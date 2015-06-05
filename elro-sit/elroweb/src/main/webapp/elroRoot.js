/**
 * Created by wu26 on 5/8/2015.
 */

var elromodule = angular.module('elroapp',['ngRoute']);
elromodule.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'html/main.html'
        })
        .when('/practices',{
            controller:'practicesCtrl',
            templateUrl: 'html/practises.html'
        }).when('/people', {
            controller: 'peopleCtrl',
            templateUrl: 'html/people.html'
        }).when('/contactus', {
            controller: 'contactCtrl',
            templateUrl: 'html/contactus.html'
        }).when('/consulting', {
            controller: 'consultingCtrl',
            templateUrl: 'html/consulting.html'
        }).when('/buyelrO', {
            controller: 'buyelrOCtrl',
            templateUrl: 'html/buyelrO/buyelrOHome.html'
        }).when('/login', {
            controller: 'loginCtrl',
            templateUrl: 'html/login.html'
        }).when('/registerNow', {
            controller: 'registerNowCtrl',
            templateUrl: 'html/registerNow.html'
        }).when('/main', {
            controller: 'registerNowCtrl',
            templateUrl: 'html/main.html'
        })
});

elromodule.controller('menuCtrl',function($scope){
    //alert ("consultingCtrl");
    /*
     Here you can handle controller for specific route as well.
     */
    alert ("menuCtrl");
    $scope.ishome = true;

});


