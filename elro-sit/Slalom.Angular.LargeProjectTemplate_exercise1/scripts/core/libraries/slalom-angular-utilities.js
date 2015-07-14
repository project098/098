define(["Angular"], function (angular) {

    var scUtilityModule = angular.module("scUtilities", ["ngResource"]);

    scUtilityModule.provider("moduleConfiguration", function () {

        this.configureCors = function (moduleInjector) {
            if (!moduleInjector) {
                throw new Error("moduleConfigurationProvider .init() must be called before .configureCors()")
            }

            var moduleHttpProvider = moduleInjector.get('$httpProvider');
            moduleHttpProvider.defaults.useXDomain = true;
            delete moduleHttpProvider.defaults.headers.common["X-Requested-With"];

            return this;
        };

        this.$get = function () { };
    });

    scUtilityModule.provider("requireLoader", function () {

        // Retain the providers for later use, and use the routeConfig to configure the Angular UI Router states
        this.configure = function (module, moduleInjector, routeConfig) {
            if (!module) {
                throw new Error("The parameter 'module' was not provided.");
            }

            if (!moduleInjector) {
                throw new Error("The parameter 'moduleInjector' was not provided.");
            }

            if (!routeConfig) {
                throw new Error("The parameter 'routeConfig' was not provided.");
            }

            var moduleProvide = moduleInjector.get('$provide');
            var moduleCompileProvider = moduleInjector.get('$compileProvider');
            var moduleControllerProvider = moduleInjector.get('$controllerProvider');
            var moduleFilterProvider = moduleInjector.get('$filterProvider');

            retainProviders(module, moduleProvide, moduleCompileProvider, moduleControllerProvider, moduleFilterProvider);
            configureRouter(moduleInjector, routeConfig);
            return this;
        };

        // The provider will only be used in another modules "config" so the $get function only exists to satisfy the Angular requirement
        this.$get = function () { };

        function retainProviders(module, $provide, $compileProvider, $controllerProvider, $filterProvider) {
            // Replace the default objects with the registration providers.
            // This allows any controllers/directives/services/etc to be registered AFTER the module had been bootstrapped
            module.factory = $provide.factory;
            module.service = $provide.service;
            module.directive = $compileProvider.directive;
            module.controller = $controllerProvider.register;
            module.filter = $filterProvider.register;
        }

        function configureRouter(moduleInjector, routeConfig) {
            // If states are configured assume the angular ui router is used
            // If routes are configured assume the default angular router is used
            if (routeConfig.states) {
                configureAngularUIRouter(moduleInjector, routeConfig);
            }
            else if (routeConfig.routes) {
                configureAngularRouter(moduleInjector, routeConfig);
            }
            else {
                throw new Error("The routeConfig object must contain routes or states.");
            }
        }

        function configureAngularUIRouter(moduleInjector, routeConfig) {
            var $stateProvider = moduleInjector.get('$stateProvider');
            var $urlRouterProvider = moduleInjector.get('$urlRouterProvider');

            if (routeConfig.states !== undefined) {
                for (var i = 0; i < routeConfig.states.length; i++) {
                    var state = routeConfig.states[i];
                    addDependenciesToResolve(state);
                    $stateProvider.state(state);
                }
            }

            // Configure the default route using the route config
            if (routeConfig.defaultRoutePath !== undefined) {
                $urlRouterProvider.otherwise(routeConfig.defaultRoutePath);
            }
        }

        function configureAngularRouter(moduleInjector, routeConfig) {
            var $routeProvider = moduleInjector.get('$routeProvider');

            if (routeConfig.routes !== undefined) {
                angular.forEach(routeConfig.routes, function (route, path) {
                    addDependenciesToResolve(route);
                    $routeProvider.when(path, route);
                });
            }

            // Configure the default route using the route config
            if (routeConfig.defaultRoutePath !== undefined) {
                $routeProvider.otherwise({ redirectTo: routeConfig.defaultRoutePath });
            }
        }

        function addDependenciesToResolve(config) {
            // Adds the required dependencies promise to the config.resolve.
            // This promise to require the scripts will be resolved before the config is loaded.
            config.resolve = config.resolve || {};
            config.resolve.requiredDependencies = ["$q", "$rootScope", function ($q, $rootScope) {
                return resolveDependencies(config.dependencies, $q, $rootScope);
            }];
        }

        function resolveDependencies(dependencies, $q, $rootScope) {
            // Creates a promise that is resolved once the script dependencies are downloaded.
            // If the $rootScope is not already in a digest, call $apply to ensure the UI is refreshed.
            var deferred = $q.defer();

            require(dependencies, function () {
                if (!$rootScope.$$phase) {
                    $rootScope.$apply(function () {
                        deferred.resolve();
                    });
                }
                else {
                    deferred.resolve();
                }
            });

            return deferred.promise;
        }
    });

});