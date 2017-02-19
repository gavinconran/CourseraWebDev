(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegService', 'loadingHttpInterceptor', '$http'];
function RegistrationController(RegService, loadingHttpInterceptor, $http) {
  var reg = this;
  reg.OK = false;
  reg.Info = true;

  reg.submit = function (user) {
    reg.completed = true;

    
    reg.fav = RegService.getMenuItem(user.fav).then(function(result) {

    user.favName = result.name;
    user.favDescription = result.description;

    RegService.saveUserDetails(user);
    reg.noInfo = false;
    return result; // for example, say this returns '123'
    
  });
    
  };

  reg.getUser = function () {
  	console.log('no info: ', RegService.getUserStatus());
  	if (RegService.getUserStatus()==false) {
  		reg.Info = false;
  	} else {
  		reg.OK = true;
  		reg.info = RegService.getUserDetails();
    	console.log('reg.info: ', reg.info);
    
  	}
    
    
  };

}

})();