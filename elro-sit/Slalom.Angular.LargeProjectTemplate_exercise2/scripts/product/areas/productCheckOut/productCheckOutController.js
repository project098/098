/**
 * Created by shameersyed on 7/16/15.
 */

/**
 * Created by shameersyed on 7/10/15.
 */
define (["product/productModule","product/shared/productListService"],function(){
    "use strict" ;
    angular.module("product").controller("productCheckOutController",function ($scope,productListService) {
        var temp = productListService.getProductInCart();
        var temprod = productListService.getProducts();

        alert ("tempprod length -- > "+temprod.length);
        alert ("tempprod data -- > "+temprod[0].productID);

        alert ("temp length--> "+temp.length);
        alert ("temp data -- >  "+temp[0]);

        //alert ("product ID -- >"+temprod[0].productID);
        var finalList=[];
        //var addCount=0;/*

        for(var i = 0; i < 7; i++) {
            for (var j=0;j<temp.length;j++)
            if (temprod[i].productID==temp[j]){
                console.log (temprod[i].productID);
                finalList.push(temprod[i]);
            }
        }


      /*  finalList[addCount].push(obj[i]);
        addCount++;
        alert ("inside if---> " + obj.productID);
        break;*/
        console.log("final List length-- > " + finalList.length);


        /*console.log("final list value  --- > " + finalList[0].productID);
        console.log("final list value  --- > " + finalList[0].category);
*/

        for (var c=0; c<finalList.length; c++) {
            console.log("final list value  --- > " + finalList[c].productID);
            console.log("final list value  --- > " + finalList[c].category);
        }

        //var finalList = _.pluck(_.dropWhile(temprod, 'active', false), 'user');
        //alert (temprod);
        //alert ("temp variable value--->"+temp[0]);
        //alert ("temp variable value--->"+temp[1]);

        function init (){
        }
        init ();
    });
});

