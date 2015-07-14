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
            //Driving Sunglasses ,Sunglasses , Computer Glasses, Eye Glasses ,Safety Goggles ,
            // Fashion and LifeStyles , Contact Lens
            //Popular Brands : Sigma , Crystal , Asaiana ,Sapphire , Kids Vue , UVEX , VENT ,
            // Polo Fashion , rock , Oliver,

            var products = [

                {productID:"1",catagory:"Driving Sunglassess",brand:"VENT",price:"75",imgsrc:"core/assests/img/img1.png"},
                {productID:"2",catagory:"Safety Goggles",brand:"Sigma",price:"35",imgsrc:"core/assests/img/img2.png"},
                {productID:"3",catagory:"Driving Sunglassess",brand:"VENT",price:"275",imgsrc:"core/assests/img/img3.png"},
                {productID:"4",catagory:"Sunglassess",brand:"Polo Fashion",price:"235",imgsrc:"core/assests/img/img4.png"},
                {productID:"5",catagory:"Contact Lens",brand:"VENT",price:"90",imgsrc:"core/assests/img/img5.png" },
                {productID:"6",catagory:"Driving Sunglassess",brand:"VENT",price:"75",imgsrc:"core/assests/img/img6.png" },
                {productID:"7",catagory:"Driving Sunglassess",brand:"VENT",price:"75",imgsrc:"core/assests/img/img2.png" }

            ]


            function getProductOwners () {
                return productOwners;
            }

            function getProducts () {
                return products;
            }

            var service = {
                getProductOwners:getProductOwners,
                getProducts:getProducts
            }
            return service;
        })
})

