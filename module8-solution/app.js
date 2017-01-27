(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath',  "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      list: '<items',
      title: '@title'
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.found = [];
  list.found.search = false;
  list.title = 'Using Isolate Scope Custom Directive';

  list.getResultItems = function (searchTerm) {
  	console.log('searchTerm: ', searchTerm);
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      list.found = response;
      list.found.search = true;
      console.log('list.found: ', list.found);
      console.log('list.found.length: ', list.found.length);
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
      if (searchTerm !== '') {
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var description = result.data.menu_items[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(result.data.menu_items[i]);
          }
        }	
      }
 		 // return processed items   
    	return foundItems;
    });

    return response;
  };

}

})();