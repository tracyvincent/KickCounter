app.controller('ReportController', ['$http', '$location', 'DataService', function($http, $location, DataService){

  var vm = this;

  vm.timedGames = {};

  vm.print = function(){
    window.print();
  }
  timedSuccess = function(response){
    console.log('timed load success', response);
    vm.timedGames = response.data;
  }

  timedFail = function(response){
    console.log('timed load fail', response);
  }
    vm.loadTimed = function(){
      $http.get('/dashboard/timed').then(timedSuccess, timedFail);
    }

    vm.loadTimed();

}]);
