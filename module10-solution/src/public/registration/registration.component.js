(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService', 'loadingHttpInterceptor', '$http'];
function RegistrationController(MenuService, loadingHttpInterceptor, $http) {
  var reg = this;

  reg.submit = function (short_name) {
    reg.completed = true;

    reg.fav = MenuService.getMenuItem(short_name).then(function(result) {
    console.log('result:', result); // 'abc'
    return result; // for example, say this returns '123'
  });
    
  };

}

})();