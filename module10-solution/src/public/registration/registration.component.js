(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegService', '$rootScope'];
function RegistrationController(RegService, $rootScope) {
  var reg = this;
  reg.OK = false;
  reg.Info = true;

  reg.submit = function (user) {
    // console.log('loadingHttpInterceptor: ', loadingHttpInterceptor.on);
    
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

  var listener;

  reg.$onInit = function() {
    listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
  };

  reg.$onDestroy = function() {
    listener();
  };

  function onSpinnerActivate(event, data) {
    reg.error = data.error;
    if (reg.error == true ) {
      reg.completed = false;
    } else {
      reg.completed = true;
    }
    console.log('reg.error: ', reg.error);
  }
  };

})();