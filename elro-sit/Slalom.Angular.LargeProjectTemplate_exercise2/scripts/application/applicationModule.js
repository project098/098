/**
 * The application module
 * @module applicationModule
 */
define(["Angular", "AngularUiRouter", "application/applicationRoutes"], function (angular, angularUiRouter, routeConfig) {
    "use strict";
    // Create the application module
    var applicationModule = angular.module("application", ["ngResource", "ui.router", "scUtilities"]);

    // Configure the application module for CORS and to use the require.js loader 
    applicationModule.config(function ($injector, moduleConfigurationProvider, requireLoaderProvider) {
        moduleConfigurationProvider.configureCors($injector);
        requireLoaderProvider.configure(applicationModule, $injector, routeConfig);
    });

    return applicationModule;
});