app.controller('ContinueController', ['$http', '$location', 'DataService', function($http, $location, DataService){

  var vm = this;

  vm.gameSettings = {};
  vm.scoreButton = true;


  vm.pageLoad = function(){
    vm.gameSettings = DataService.getDataServiceGame();
}

  vm.scorePoint = function(i){
    vm.gameSettings.totalScore++;
      vm.gameSettings.players[i].score++;
  }

  vm.handleSuccess = function(response){
    console.log('saved successfullly', response);
  }

  vm.handleFailure = function(response){
    console.log('save fail', response);
  }

  vm.saveGameUpdates = function(){
    vm.scoreButton = false;
    vm.gameSettings.winner = {name: '', score: 0};
    for (var i = 0; i < vm.gameSettings.players.length; i++){
      if (vm.gameSettings.players[i].score > vm.gameSettings.winner.score){
        vm.gameSettings.winner = angular.copy(vm.gameSettings.players[i]);
      } else if(vm.gameSettings.players[i].score == vm.gameSettings.winner.score){
        vm.gameSettings.winner.name += ' and ' + vm.gameSettings.players[i].name + ' each ';
      }
    }
    $http.put('/update/' + vm.gameSettings._id, vm.gameSettings).then(vm.handleSuccess, vm.handleFailure);
  }

}]);
