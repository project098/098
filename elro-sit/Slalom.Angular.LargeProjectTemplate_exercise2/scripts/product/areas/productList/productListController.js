/**
 * Created by shameersyed on 7/10/15.
 */
define (["product/productModule","product/shared/productListService"],function(){
     "use strict" ;
    angular.module("product").controller("productListController",function ($scope,productListService,$state) {
        //alert ("hai");
        $scope.predicate = 'price';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };
        $scope.totalincart = 0;
        $scope.productInCart = []
        $scope.addedItems =  function (isSelected,item){
            if (isSelected) {
                $scope.totalincart++;
                $scope.productInCart.push(item);
            }
            else {
                $scope.totalincart--;
            }
        }

        $scope.changeState = function (){
            $state.go("productCheckOut");
        }

        function init (){
            //$scope.productOwners = productOwnerListService.getProductOwners();
            $scope.products = productListService.getProducts();
        }
        init ();
    });

    angular.module("product").filter('unique', function() {
        return function (products, product) {
            return _.uniq(products, function(a) { return a[product]; });
        };
    });


});
