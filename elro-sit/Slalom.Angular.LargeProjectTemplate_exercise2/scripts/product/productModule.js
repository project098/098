/**
 * The administration module
 * @module adminModule
 */
define(["Angular", "AngularUiRouter", "product/productRoutes"], function (angular, angularUiRouter, routeConfig) {
    "use strict";
    // Create the administration module
    var productModule = angular.module("product", ["ngResource", "ui.router", "scUtilities"]);
    // Configure the admin module for CORS and to use the require.js loader 
    productModule.config(function ($injector, moduleConfigurationProvider, requireLoaderProvider) {
        moduleConfigurationProvider.configureCors($injector);
        requireLoaderProvider.configure(productModule, $injector, routeConfig);
    });
    return productModule;
});