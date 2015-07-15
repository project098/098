/**
 * Created by shameersyed on 7/10/15.
 */
define (["admin/adminModule","admin/shared/productListService"],function(){
     "use strict" ;
    angular.module("application").controller("productListController",function ($scope,productListService) {
        //alert ("hai");
        $scope.predicate = 'price';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };
        $scope.totalincart = 0
        $scope.addedItems =  function (item){
            $scope.totalincart++;

        }

        function init (){
            //$scope.productOwners = productOwnerListService.getProductOwners();
            $scope.products = productListService.getProducts();
        }
        init ();
    });

    angular.module("admin").filter('unique', function() {
        return function (products, product) {
            return _.uniq(products, function(a) { return a[product]; });
        };
    });

});
