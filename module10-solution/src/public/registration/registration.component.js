(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var reg = this;

  reg.submit = function (short_name) {
    reg.completed = true;

    reg.fav = MenuService.getMenuItem(short_name);
    
  };
}

})();