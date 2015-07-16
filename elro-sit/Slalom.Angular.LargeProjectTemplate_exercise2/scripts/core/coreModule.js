/**
 * The core application module
 * @module coreModule
 */
define(["Angular", "AngularUiRouter", "core/coreRoutes"], function (angular, ngRoute, routeConfig) {
    "use strict";
    // Create the core module
    // NOTE: All the application modules need to be added as dependencies to the core module.
    //       This will ensure the modules are loaded at bootstrap.  If the modules are configured
    //       for require.js lazy loading then the module contents will not be loaded until the user
    //       requests a "state" requiring the content.
    var coreModule = angular.module("core", ["ngResource", "ui.router","scUtilities", "application", "product"]);

    // Configure the core module for CORS and to use the lazy loader
    coreModule.config(function ($injector, moduleConfigurationProvider, requireLoaderProvider) {
        moduleConfigurationProvider.configureCors($injector);
        requireLoaderProvider.configure(coreModule, $injector, routeConfig);
    });

    return coreModule;
});