(function () {
"use strict";

angular.module('common')
.service('RegService', RegService);


RegService.$inject = ['$http', 'ApiPath'];
function RegService($http, ApiPath) {
  var service = this;

  service.getMenuItem = function (short_name) {
    var config = {};
    if (short_name) {
      config.params = {'short_name': short_name};
    }

    return $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function (response) {
      return response.data;
    });
  };

  service.saveUserDetails = function (user) {
    service.userDetails = user;
    console.log('user saved: ', user);
    
  };

  service.getUserDetails = function () {
    console.log('user got: ', service.userDetails);
    return service.userDetails
    
  };

}



})();
