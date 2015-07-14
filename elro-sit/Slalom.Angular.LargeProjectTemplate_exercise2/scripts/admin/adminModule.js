/**
 * The administration module
 * @module adminModule
 */
define(["Angular", "AngularUiRouter", "admin/adminRoutes"], function (angular, angularUiRouter, routeConfig) {
    "use strict";
    // Create the administration module
    var adminModule = angular.module("admin", ["ngResource", "ui.router", "scUtilities"]);

    // Configure the admin module for CORS and to use the require.js loader 
    adminModule.config(function ($injector, moduleConfigurationProvider, requireLoaderProvider) {
        moduleConfigurationProvider.configureCors($injector);
        requireLoaderProvider.configure(adminModule, $injector, routeConfig);
    });

    return adminModule;
});