(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/categories/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/categories',
    templateUrl: 'src/categories/templates/main.template.html',
    controller: 'MainController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        var result = MenuDataService.getAllCategories();
        return result;
      }]
    }
  })

  // Item detail
  .state('mainList.itemDetail', {
    url: '/items/{itemId}',
    templateUrl: 'src/categories/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail'
  });

}

})();
