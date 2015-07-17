/**
 * Created by shameersyed on 7/10/15.
 */
define (["product/productModule","product/shared/productListService"],function(){
     "use strict" ;
    angular.module("product").controller("productListController",function ($scope,productListService,$state) {
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
                productListService.setProductsInCart(item,isSelected);
            }
            else {
                productListService.setProductsInCart(item,isSelected);
                $scope.totalincart--;
            }
        }
        $scope.changeState = function (){
            $state.go("productCheckOut");
        }
        function init (){
            // Fetching List of products and product Category
            productListService.getProductList().then(function(data){
                $scope.productList =  data;
                productListService.setProducts (data);
            },function(error){
                console.log("Products are not available");
            });
            productListService.getProductCategories().then(function(data){
                $scope.productCategoriesList =  data;
            },function(error){
                console.log("Products are not available");
            });
            //productListService.setProducts ($scope.productList);
        }
        init ();
    });

    angular.module("product").filter('unique', function() {
        return function (products, product) {
            return _.uniq(products, function(a) { return a[product]; });
        };
    });


});
