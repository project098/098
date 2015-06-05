/**
 * Created by wu26 on 6/3/2015.
 */
var buyelrOmodule = angular.module('buyelroapp',['ngRoute']);
buyelrOmodule.config(function($routeProvider){
    $routeProvider
        .when('/buyelrO', {
            controller: 'buyelrOCtrl',
            templateUrl: 'html/buyelrOHome.html'
        }).when('/buyelrO/merchants', {
            controller: 'buyelrOMerchantsOCtrl',
            templateUrl: 'html/buyelrO/marchants.html'
        }).when('/buyelrO/resources', {
            controller: 'buyelrOResourcesCtrl',
            templateUrl: 'html/buyelrO/resources.html'
        }).when('/buyelrO/about', {
            controller: 'buyelrOAboutCtrl',
            templateUrl: 'html/buyelrO/about.html'
        }).when('/buyelrO/support', {
            controller: 'buyelrOSupportCtrl',
            templateUrl: 'html/buyelrO/support.html'
        }).when('/main', {
            controller: 'registerNowCtrl',
            templateUrl: 'html/main.html'
        })
});



