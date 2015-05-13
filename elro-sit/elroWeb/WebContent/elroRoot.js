/**
 * Created by wu26 on 5/8/2015.
 */

var elromodule = angular.module('elroapp',['ngRoute']);
elromodule.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: '../WebContent/html/main.html'
        })
        .when('/practices',{
            controller:'practicesCtrl',
            templateUrl: '../WebContent/html/practises.html'
        }).when('/people', {
            controller: 'peopleCtrl',
            templateUrl: '../WebContent/html/people.html'
        }).when('/contactus', {
            controller: 'contactCtrl',
            templateUrl: '../WebContent/html/contactus.html'
        }).when('/consulting', {
            controller: 'consultingCtrl',
            templateUrl: '../WebContent/html/consulting.html'
        }).when('/buyelrO', {
            controller: 'buyelrOCtrl',
            templateUrl: '../WebContent/html/buyelrO.html'
        }).when('/login', {
            controller: 'loginCtrl',
            templateUrl: '../WebContent/html/login.html'
        }).when('/registerNow', {
            controller: 'registerNowCtrl',
            templateUrl: '../WebContent/html/registerNow.html'
        }).when('/main', {
            controller: 'registerNowCtrl',
            templateUrl: '../WebContent/html/main.html'
        })
});

