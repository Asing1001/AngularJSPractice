/**
 * Created by andy.chen on 2015/4/27.
 */
angular.module("sportsStore")
.controller("checkoutController",function($scope,cart){
        $scope.cartData = cart.getProducts();
        $scope.removeProduct = function (productId) {
            cart.removeProduct(productId);
        }

        $scope.totalPrice = function () {
            var total = 0;
            for(var i = 0; i< $scope.cartData.length;i++){
                var item = $scope.cartData[i];
                total +=  item.price * item.count;
            }
            return total;
        };
    })