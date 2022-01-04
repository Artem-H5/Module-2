(function functionName() {
'use strict'

angular.module ('LunchCheck', [])
.controller ('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.name = "";
  $scope.sayMessage = "";

  $scope.check = function () {
    splitString($scope.name, ',');
    $scope.name = totalValueCheck($scope.name)
  };

  function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  var totalValue = arrayOfStrings.length;
  }

  function totalValueCheck ($scope.name) {
    if (totalValue <= 3) {
      $scope.sayMessage ="Enjoy!"
    } else if (totalValue > 3) {
      $scope.sayMessage ="Too much!"
    } else ($scope.sayMessage == "") {
      $scope.sayMessage ="Please enter data first"
    }
  };

};

})();
