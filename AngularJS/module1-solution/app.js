(function functionName() {
'use strict';

angular.module ('LunchCheck', [])
.controller ('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
  $scope.name = "";
  $scope.sayMessage = "";

  $scope.check = function () {
      if ($scope.name == null || $scope.name == "") {
        $scope.sayMessage ="Please enter data first"
      } else {
        var arrayOfStrings = $scope.name.split(",");
        var totalValue = arrayOfStrings.length;
        if (totalValue <= 3) {
          $scope.sayMessage ="Enjoy!"
        } else {
          $scope.sayMessage ="Too much!"
        }
      }
  };

};

})();
