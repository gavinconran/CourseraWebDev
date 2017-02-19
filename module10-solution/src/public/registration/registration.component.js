(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegService', 'loadingHttpInterceptor', '$http'];
function RegistrationController(RegService, loadingHttpInterceptor, $http) {
  var reg = this;
  reg.OK = false;

  reg.submit = function (user) {
    reg.completed = true;
    console.log('user: ', user);
    reg.fav = RegService.getMenuItem(user.fav).then(function(result) {
    console.log('result:', result); // 'abc'

    RegService.saveUserDetails(user);


    return result; // for example, say this returns '123'

    

  });
    
  };

  reg.getUser = function () {
    reg.info = RegService.getUserDetails();
    console.log('reg.info: ', reg.info);
    reg.OK = true;
    
  };

}

})();