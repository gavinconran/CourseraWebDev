(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'items', 'MenuDataService'];
function ItemDetailController($stateParams, items, MenuDataService) {
  	
  var itemDetail = this;
  var item = items.data[$stateParams.itemId];

  var result = MenuDataService.getItemsForCategory(item.short_name);
  console.log("controller_result: ", result);
  itemDetail.items = result.$$state;
  // console.log("itemDetail.items: ", itemDetail.items);

  itemDetail.id = item.id;
  itemDetail.name = item.name;
  itemDetail.short_name = item.short_name;
  itemDetail.special_instructions = item.special_instructions;
    
}

})();
