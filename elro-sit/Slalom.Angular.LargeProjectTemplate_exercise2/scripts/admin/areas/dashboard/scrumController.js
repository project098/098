/**
 * A Controller to handle the functionality of the admin landing page
 * @module coreModule
 * @class HomeController
 */
define(["admin/adminModule"], function () {
    "use strict";
    angular.module("admin").controller("productOwnerScrumController", function ($scope) {
        alert ("xxxx")
        $scope.description = "Scrum - Product Owner Build Teams Increase Value";
    });
});
