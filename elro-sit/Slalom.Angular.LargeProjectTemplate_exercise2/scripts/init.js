(function () {
    "use strict";

    /*
     * Initial require.js configuration
     */
    require.config({
        baseUrl: "/scripts",
        paths: {
            jQuery: [
                //"http://code.jquery.com/jquery-1.9.1",
                "core/libraries/jquery"
            ],
            Angular: [
                //"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.min",
                "core/libraries/angular"
            ],
            AngularResource: [
                //"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-resource.min",
                "core/libraries/angular-resource"
            ],
            AngularCookies: [
                //"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-cookies.min",
                "core/libraries/angular-cookies"
            ],
            AngularUiRouter: "core/libraries/angular-ui-router.min",
            SlalomAngularUtilities: "core/libraries/slalom-angular-utilities",
            Bootstrap: [
                //"https://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min",
                "core/libraries/bootstrap.min"
            ],
            Modernizr: "core/libraries/modernizr",
            Underscore: "core/libraries/underscore"
        },
        shim: {
            "jQuery": {
                exports: "jQuery"
            },
            "Modernizr": {
                exports: "modernizr"
            },
            "Underscore": {
                exports: "underscore"
            },
            "Angular": {
                deps: ["jQuery"],
                exports: "angular"
            },
            "AngularResource": {
                deps: ["Angular"],
                exports: "AngularResource"
            },
            "AngularCookies": {
                deps: ["Angular"],
                exports: "AngularCookies"
            },
            "AngularUiRouter": {
                deps: ["Angular"],
                exports: "AngularUiRouter"
            },
            "Bootstrap": {
                deps: ["jQuery"],
                exports: "bootstrap"
            }
        }
    });

    /*
     * @module coreModule
     * @class init
     */
    require(["Angular", "AngularResource", "AngularCookies", "AngularUiRouter", "SlalomAngularUtilities", "Underscore", "Bootstrap", "core/coreModule", "application/applicationModule", "admin/adminModule"], function () {
        // Load the application prerequisites
        // NOTE: The baseController and coreNavigationDiretive are required here because
        //       they are loaded before the module bootstrap has completed.
        // NOTE: If the application does not require lazy loading of script dependencies
        //       all the scripts should be required here.
        require(["core/shared/controllers/baseController", "core/shared/directives/coreNavigationDirective"], function () { 
            angular.bootstrap(document, ["core"]); // Bootstrap the core module
        });
    });
}());