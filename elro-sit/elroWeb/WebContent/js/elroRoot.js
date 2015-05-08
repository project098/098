/**
 * Created by wu26 on 5/8/2015.
 */

var elromodule=angular.module('elroapp',['ngRoute']);
bpgmodule.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: '../bpg/html/index.html'
        })
        .when('/practices',{
            controller:'practicesCtrl',
            templateUrl: '../bpg/html/practices.html'
        }).when('/people', {
            controller: 'peopleCtrl',
            templateUrl: '../bpg/html/people.html'
        }).when('/contactus', {
            controller: 'contactCtrl',
            templateUrl: '../bpg/html/contactus.html'
        }).when('/consulting', {
            controller: 'consultingCtrl',
            templateUrl: '../bpg/html/consulting.html'
        }).when('/buyelrO', {
            controller: 'buyelrOCtrl',
            templateUrl: '../bpg/html/buyelrO.html'
        }).when('/login', {
            controller: 'loginCtrl',
            templateUrl: '../bpg/html/login.html'
        }).when('/registerNow', {
            controller: 'registerNowCtrl',
            templateUrl: '../bpg/html/registerNow.html'
        })
});

