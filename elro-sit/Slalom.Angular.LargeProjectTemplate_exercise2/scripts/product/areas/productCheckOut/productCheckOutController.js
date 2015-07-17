/**
 * Created by shameersyed on 7/16/15.
 */

define (["product/productModule","product/shared/productListService"],function(){
    "use strict" ;
    angular.module("product").controller("productCheckOutController",function ($scope,productListService) {

        var productList = productListService.getProducts();
        var productInCart = productListService.getProductInCart();

        // Fetching Details for products  in users cart.

        var finalList=[];
        for(var i = 0; i < productList.length; i++) {
            for (var j=0;j<productInCart.length;j++)
                if (productList[i].productId==productInCart[j]){
                    finalList.push(productList[i]);
                }
        }
        $scope.itemsInCart = finalList;
        init ();
        function init (){
         }
    });
});

