/**
 * A Controller to handle the functionality of the application landing page
 * @module coreModule
 * @class IndexController
 */
define(["application/applicationModule"], function () {
    "use strict";
    angular.module("application").controller("applicationDashboardController", function ($scope, $location, $stateParams, $http) {
        $scope.description = "Scrum - Team Members";
        $scope.readme = "";

        function init() {
            // Load the readme contents
            $http.get("/readme.md").success(function (response) {
                $scope.readme = response;
            });
        }

        init();
    });
});