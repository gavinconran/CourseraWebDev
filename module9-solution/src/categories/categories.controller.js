(function () {
'use strict';

angular.module('MenuApp')
.controller('MainController', MainController);


MainController.$inject = ['MenuDataService', 'items'];
function MainController(MenuDataService, items) {
  var mainList = this;
  mainList.items = items.data;
}

})();