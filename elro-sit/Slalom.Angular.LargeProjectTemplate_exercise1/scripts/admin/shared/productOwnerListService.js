/**
 * Created by shameersyed on 7/10/15.
 */

define (["application/applicationModule"],function () {
        angular.module("application").service("productOwnerListService",function (){
            alert ("inside service");
            var productOwners = [
                {name:"shameer",age:54},
                {name:"mole",age:23}
            ]

            function getProductOwners () {
                return productOwners;
            }

            var service = {
                getProductOwners:getProductOwners
            }
            return service;
        })
})

