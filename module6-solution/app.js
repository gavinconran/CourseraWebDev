(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.message = "";
  $scope.items = "";

  $scope.displayMessage = function () {
  	var totalItems = countItems($scope.items); 
  	console.log(totalItems);
    if (totalItems == 0) {
    	$scope.message =  "Please enter data first";
    } else if (totalItems > 0 && totalItems <= 3) {
    	$scope.message = "Enjoy!"
    } else {
    	$scope.message = "Too much!";
    }
  };

  function countItems(string) {
  	if (string == "") {
  		return 0;
  	} else {
  		var tokens = string.split(',');
  		return tokens.length;
  	}
  }
}


})();