/**
 * Created by andy.chen on 2015/4/23.
 */
angular.module("cart", [])
    .factory("cart", function () {
        var cartData = [];
        return {

            addProduct: function (id, name, price) {
                var itemHasExisted = false;
                for(var i = 0; i < cartData.length; i++)
                {
                    if(cartData[i].id==id)
                    {
                        cartData[i].count ++;
                        itemHasExisted = true;
                        break;
                    }
                }

                if(!itemHasExisted){
                    cartData.push({count:1,id:id,name:name,price:price})
                }
            },

            removeProduct: function (id) {
                for(var i = 0; i < cartData.length; i++)
                {
                    if(cartData[i].id==id)
                    {
                        cartData.splice(i,1);
                        break;
                    }
                }

            },

            getProducts: function () {
              return cartData;
            }
        }
    })
    .directive("cartSummary", function (cart) {
        return {
            restrict:"E", //means only can use as Element
            templateUrl:"components/cart/cartSummary.html",
            controller: function ($scope) {
                var cartData = cart.getProducts();
                $scope.totalPrice = function () {
                    var total = 0;
                    for(var i = 0; i<cartData.length;i++){
                        var item = cartData[i];
                        total +=  item.price * item.count;
                    }
                    return total;
                };

                $scope.itemCount = function () {
                    var count = 0;
                    for(var i = 0; i<cartData.length;i++){
                        count +=  cartData[i].count;
                    }
                    return count;
                }


            }

        }
    });
