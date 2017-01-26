(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath',  "https://davids-restaurant.herokuapp.com");


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  var origTitle = "Available Choices";
  

  list.getResultItems = function (searchTerm) {
  	console.log('searchTerm: ', searchTerm);
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      list.found = response;
      console.log('3: ', list.found);
      list.title = origTitle + " (" + list.found.length + " items )";
      console.log('3: ', list.found.length);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  list.removeItem = function (itemIndex) {
  	list.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result) {
    	// process result and only keep items that match
    	var foundItems = [];
    	for (var i = 0; i < result.data.menu_items.length; i++) {
      		var description = result.data.menu_items[i].description;
      		if (description.toLowerCase().indexOf(searchTerm) !== -1) {
        		foundItems.push(result.data.menu_items[i]);
      }
    }
 		// return processed items   
    	return foundItems;
    });

    return response;
  };

}

})();