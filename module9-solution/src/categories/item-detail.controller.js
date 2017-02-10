(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'items', 'MenuDataService'];
function ItemDetailController($stateParams, items, MenuDataService) {
  	
  var itemDetail = this;
  var item = items.data[$stateParams.itemId];

  var promise = MenuDataService.getItemsForCategory(item.short_name);

  promise.then(function(response) {
  	itemDetail.details = response.data.menu_items;
    itemDetail.name = item.name;
  });
    
}

})();
