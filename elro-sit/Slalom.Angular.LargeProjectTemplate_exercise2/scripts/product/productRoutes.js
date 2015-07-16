/**
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
                name: "product",
                url: "/product",
                templateUrl: "/scripts/product/areas/productList/productList.html",
                controller: "productListController",
                dependencies: [
                    //"admin/areas/dashboard/scrumController",
                    "product/areas/productList/productListController"
                ]
            },

            {
                name: "productCheckOut",
                url: "/product/productCheckOut",
                templateUrl: "/scripts/product/areas/productCheckOut/productCheckOut.html",
                controller: "productCheckOutController",
                dependencies: [
                    //"admin/areas/dashboard/scrumController",
                    "product/areas/productCheckOut/productCheckOutController"
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