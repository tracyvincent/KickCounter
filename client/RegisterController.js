angular.module('kickApp').controller('RegisterController', ['$http', '$location', function($http, $location){
  var vm = this;

  vm.show = false;

  vm.username = '';
  vm.password = '';
  vm.password2 = '';

  vm.register = function(){
    console.log('Username', vm.username);
    console.log('Password', vm.password);
    console.log('Password2', vm.password2);
    if(vm.password != vm.password2){
      vm.show = true;
      return
    } else{

      var sendData = {};

      sendData.username = vm.username;
      sendData.password = vm.password;
      console.log(sendData);
      $http.post('/register', sendData).then(handleSuccess, handleFailure);
    }

      function handleSuccess(response){
        console.log('Success', response);
        $location.path('/dashboard');
      };

      function handleFailure(response){
        console.log('Failure', response);
        $location.path('/failure');
      };
}
}]);
