/**
 * Created by andy.chen on 2015/4/21.
 */
angular.module("sportsStore")
    .constant("productListActiveClass","btn-primary")
    .constant("SizePerPage",3)
    .controller("productListCtrl", function ($scope, $filter, productListActiveClass, SizePerPage) {
        var selectedCategory = null;

        $scope.selectedPage=1;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

        $scope.getCategoryClass = function(category){
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.selectPage = function(newPage){
            $scope.selectedPage = newPage;
        }



    })