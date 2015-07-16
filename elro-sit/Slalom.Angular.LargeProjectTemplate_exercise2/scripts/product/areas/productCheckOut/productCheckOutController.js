/**
 * Created by shameersyed on 7/16/15.
 */



/**
 * Created by shameersyed on 7/10/15.
 */
define (["product/productModule","product/shared/productCheckOutService"],function(){
    "use strict" ;
    angular.module("product").controller("productCheckOutController",function ($scope,productListService) {
        //alert ("hai");
        function init (){
            //$scope.productOwners = productOwnerListService.getProductOwners();
            $scope.products = productListService.getProducts();
        }
        init ();
    });
});

