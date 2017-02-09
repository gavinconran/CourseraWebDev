(function () {
'use strict';

angular.module('MenuApp')
.component('shoppingList', {
  templateUrl: 'src/categories/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();