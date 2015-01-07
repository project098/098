/**
 * Created by wx53 on 9/25/2014.
 */

/*function Hello1($scope, $http) {
    //$http.get('http://localhost:3000/api').
        $http.get('http://localhost:8080/createEmp').
        success(function(data)
        {
            $scope.api = data;
            console.log(data);
        });
}*/
/*

function Hello1 ($scope,$http){
 var springRestAppMod = angular.module ("springRestCtrlModule",[]);


    springRestAppMod.config(function($httpProvider) {
        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        //Remove the header used to identify ajax call  that would prevent CORS from working
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

    $http(
        {
            url:'http://localhost:8080/createEmp',
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*.localhost:63343/' },
            data:JSON.stringify( {firstName: 'shameer', lastName: 'syed', id: '779079',department:4,age:38})
        }
    ).success(function(data)
        {
            $scope.api = data;
            console.log ("hai  vevery");
            console.log(data);
        });
}
*/
