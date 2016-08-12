app.controller('RegisterController', ['$http', '$location', function($http, $location){
  var vm = this;

  vm.show = false;

  vm.username = '';
  vm.password = '';
  vm.password2 = '';

  vm.register = function(){
    if(vm.password != vm.password2){
      vm.show = true;
      return
    } else{

      var sendData = {};

      sendData.username = vm.username;
      sendData.password = vm.password;
      $http.post('/register', sendData).then(handleSuccess, handleFailure);
    }

// logs you in after account creation
      function handleSuccess(response){
        $location.path('/');
      };

      function handleFailure(response){
        $location.path('/');
      };
}
}]);
