﻿/**
 * Defines the routing configuration for the application
 * @module coreModule
 * @class routes
 */
define([], function () {
    "use strict";
    return {
        // NOTE: The default route is specified in the coreModule routes.
        // defaultRoutePath: "/",
        states: [
            {
                name: "admin",
                url: "/admin",
                templateUrl: "/scripts/admin/areas/dashboard/productList.html",
                controller: "productListController",
                dependencies: [
                    //"admin/areas/dashboard/scrumController",
                    "admin/areas/dashboard/productListController"
                ]
            }

            // TODO: Add more routes here
            //       Replace the {tokens}
            //{
            //    name: "{name}",
            //    url: "/{url}",
            //    templateUrl: "/{root}/{module}/areas/{area-name}/{view}.html",
            //    controller: "{controller-name}Controller",
            //    dependencies: [
            //        "{module}/areas/{area-name}/{controller-name}Controller",
            //    ]
            //},
        ]
    };
});