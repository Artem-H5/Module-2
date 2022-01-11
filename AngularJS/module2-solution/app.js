(function functionName() {
'use strict';

var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module ('ShoppingListCheckOff', [])
.controller ('ToBuyController', ToBuyController);
.controller ('AlreadyBoughtController', AlreadyBoughtController);
.service ('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ["$scope"];
function ToBuyController($scope) {
  $scope.shoppingList = shoppingList;
//   $scope.sayMessage = "";

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

  $scope.shoppingList2.push(newItem);
  };

// function ToBuyController() {
//   var parent = this;
//   parent.value = shoppingList
}
// LunchCheckController.$inject = ["$scope"];
// function LunchCheckController($scope) {
//   $scope.name = "";
//   $scope.sayMessage = "";


};

})();