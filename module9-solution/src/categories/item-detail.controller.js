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
  	console.log("in promise");
  	console.log("response: ", response);
  	console.log("response.data: ", response.data);
  	itemDetail.details = response.data.menu_items;
    console.log("itemDetail.details 1: ", itemDetail.details);

    itemDetail.id = item.id;
    itemDetail.name = item.name;
    itemDetail.short_name = item.short_name;
    itemDetail.special_instructions = item.special_instructions;
  });

  // }));
  console.log("itemDetail.details 2: ", itemDetail.details);
  // itemDetail.items = result;
  // console.log("itemDetail.items: ", itemDetail.items);

  // itemDetail.id = item.id;
  // itemDetail.name = item.name;
  // itemDetail.short_name = item.short_name;
  // itemDetail.special_instructions = item.special_instructions;
    
}

})();
