/**
 * Created by andy.chen on 2015/2/6.
 */

angular.module("sportsStore").controller("sportsStoreCtrl", function ($scope) {
    $scope.data = {
        products: [
            {
                "name": "Kayak",
                "description": "A boat for one person",
                "category": "Watersports",
                "price": 275,
                "id": "b0c8bab9f5ec7932"
            }, {
                "name": "Lifejacket",
                "description": "Protective and fashionable",
                "category": "Watersports",
                "price": 48.95,
                "id": "f0b95b600fb398a1"
            }, {
                "name": "Soccer Ball",
                "description": "FIFA-approved size and weight",
                "category": "Soccer",
                "price": 19.5,
                "id": "2d218a20ca97280a"
            }, {
                "name": "Corner Flags",
                "description": "Give your playing field a professional touch",
                "category": "Soccer",
                "price": 34.95,
                "id": "a7e69b72c3f1081d"
            }, {
                "name": "Stadium",
                "description": "Flat-packed 35000-seat stadium",
                "category": "Soccer",
                "price": 79500,
                "id": "07f5708cbdbab863"
            }, {
                "name": "Thinking Cap",
                "description": "Improve your brain efficiency by 75%",
                "category": "Chess",
                "price": 16,
                "id": "621da1c98c09081e"
            }, {
                "name": "Unsteady Chair",
                "description": "Secretly give your opponent a disadventage",
                "category": "Chess",
                "price": 29.95,
                "id": "adb34321b57508a2"
            }, {
                "name": "Human Chess Board",
                "description": "A fun game for the family",
                "category": "Chess",
                "price": 75,
                "id": "204e08b8383918cb"
            }, {
                "name": "Bling-Bling King",
                "description": "Gold-plated, diamond-studded King",
                "category": "Chess",
                "price": 1200,
                "id": "cb18c18f4c37688a"
            }]
    }
})
