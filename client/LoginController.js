app.controller('LoginController', ['$http', '$location', '$cookies', function($http, $location, $cookies){
  var vm = this;

  vm.username = '';
  vm.password = '';

  vm.login = function(){
    console.log('Username', vm.username);
    console.log('Password', vm.password);

    var sendData = {};

    sendData.username = vm.username;
    sendData.password = vm.password;
    console.log(sendData);

    $http.post('/login', sendData).then(handleSuccess, handleFailure);
  };

  function handleSuccess(response){
    console.log('Success', response);
    $location.path('/dashboard');
  };

  function handleFailure(response){
    console.log('Failure', response);
  };
  vm.loggedIn = function(){
    console.log($cookies);
    if ($cookies.user){
      $location.path('/dashboard')
    }
  }
}]);
