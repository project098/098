/**
 * Created by shameersyed on 7/10/15.
 */

define (["application/applicationModule"],function () {
        angular.module("application").service("productListService",function (){
            //alert ("inside service");
            /*var productOwners = [
                {name:"shameer",age:54},
                {name:"mole",age:23}
            ]*/
            var productsInCart= [];

            var products = [
                {productID:"1",category:"Driving Sunglassess",brand:"VENT",price:"75",
                    imgsrc:"/scripts/core/assets/img/img1.png"},
                {productID:"2",category:"Safety Goggles",brand:"Sigma",price:"35",imgsrc:"/scripts/core/assets/img/img2.png"},
                {productID:"3",category:"Driving Sunglassess",brand:"VENT",price:"275",imgsrc:"/scripts/core/assets/img/img3.png"},
                {productID:"4",category:"Sunglassess",brand:"Polo Fashion",price:"235",imgsrc:"/scripts/core/assets/img/img4.png"},
                {productID:"5",category:"Contact Lens",brand:"VENT",price:"90",imgsrc:"/scripts/core/assets/img/img5.png" },
                {productID:"6",category:"Driving Sunglassess",brand:"VENT",price:"75",imgsrc:"/scripts/core/assets/img/img6.png" },
                {productID:"7",category:"Driving Sunglassess",brand:"VENT",price:"75",imgsrc:"/scripts/core/assets/img/img2.png" }
            ]

            function setProductsInCart (item){
                alert ("adding to cart--- >"+ item);
                productsInCart.push(item);
            }
            function getProductInCart () {
                return productsInCart;
            }
            function getProducts () {
             return products;
             }

            //var productsInCart=[];

           /* return {
                getProductInCart: function () {
                    return productsInCart;
                },
                setProductsInCart: function (value) {
                    productsInCart = value;
                },
                getProducts : function getProducts () {
                return products;
            }

            };*/



            /*function getProductOwners () {
                return productOwners;
            }*/



            var service = {
                //getProductOwners:getProductOwners,
                getProducts:getProducts,
                setProductsInCart:setProductsInCart,
                getProductInCart:getProductInCart
                //getProductInCart:getProductInCart

            }
            return service;
        })
})

