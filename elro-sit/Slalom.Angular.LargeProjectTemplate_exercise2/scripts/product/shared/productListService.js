/**
 * Created by shameersyed on 7/10/15.
 */

define (["application/applicationModule"],function () {
        angular.module("application").service("productListService",function ($q, $http){
            var productsInCart= [];
            var productList = [];
           function setProducts (items){
                productList = angular.copy(items);
            }
            function getProducts () {
                return productList;
            }
            function setProductsInCart (item,isSelected){
               if(isSelected){
                productsInCart.push(item);
                }else {
                        //remove item from the cart
                }
            }
            function getProductInCart () {
                return productsInCart;
            }
            function getProductList(){
                var deferred = $q.defer();
                $http.get("http://onboardingexercise2.azurewebsites.net/api/v1/products")
                    .success(function (data){
                        deferred.resolve(data);
                    })
                    .catch(function (error){
                        deferred.reject(error)
                    });
                return deferred.promise;
            }
            function getProductCategories(){
                var deferred = $q.defer();
                $http.get("http://onboardingexercise2.azurewebsites.net/api/v1/productCategories")
                    .success(function (data){
                        deferred.resolve(data);
                    })
                    .error(function (error){
                        deferred.reject(error)
                    });
                return deferred.promise;
            }
            var service = {
                getProductList:getProductList,
                getProductCategories: getProductCategories,
                setProductsInCart:setProductsInCart,
                getProductInCart:getProductInCart,
                setProducts:setProducts,
                getProducts:getProducts
            }
            return service;
        })
})

