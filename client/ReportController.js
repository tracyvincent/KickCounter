app.controller('ReportController', ['$http', '$location', 'DataService', function($http, $location, DataService){

  var vm = this;

  vm.timedGames = DataService.getTimedGames();
  console.log(vm.timedGames);

  vm.print = function(){
    window.print();
  }

}]);
