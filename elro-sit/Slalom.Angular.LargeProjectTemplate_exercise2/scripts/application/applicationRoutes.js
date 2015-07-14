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
                name: "dashboard",
                url: "/",
                templateUrl: "/scripts/application/areas/dashboard/scrum.html",
                controller: "applicationDashboardController",
                dependencies: [
                    "application/areas/dashboard/scrumController"
                    /*"core/shared/directives/markdownDirective",
                    "http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js",
                    "http://cdnjs.cloudflare.com/ajax/libs/prettify/r298/prettify.min.js"*/
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