/**
 * Created by andy.chen on 2015/4/21.
 */
angular.module("sportsStore")
    .constant("productListActiveClass","btn-primary")
    .constant("SizePerPage",3)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass, cart) {
        var selectedCategory = null;

        $scope.selectedPage=1;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        };

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        };

        $scope.getCategoryClass = function(category){
            return selectedCategory == category ? productListActiveClass : "";
        };

        $scope.selectPage = function(newPage){
            $scope.selectedPage = newPage;
        };

        $scope.getPagerClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        };

        $scope.addToCart=function(item){
            cart.addProduct(item.id,item.name,item.price);
        }



    })