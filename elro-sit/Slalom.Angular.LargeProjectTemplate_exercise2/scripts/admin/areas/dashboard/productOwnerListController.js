/**
 * Created by shameersyed on 7/10/15.
 */
define (["application/applicationModule","admin/shared/productOwnerListService"],function(){
     "use strict" ;
    angular.module("application").controller("productOwnerScrumController",function ($scope,productOwnerListService) {
        alert ("hai");
        function init (){
            $scope.productOwners = productOwnerListService.getProductOwners();
            $scope.products = productOwnerListService.getProducts();
        }
        init ();
    });
});
