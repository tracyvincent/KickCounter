app.controller('ContinueController', ['$http', '$location', 'DataService', function($http, $location, DataService){

  var vm = this;

  vm.gameSettings = {};

  vm.pageLoad = function(){
    vm.gameSettings = DataService.getDataServiceGame();
    console.log('continue controller', vm.gameSettings);
}

  vm.scorePoint = function(player){
    console.log(player);
    vm.gameSettings.totalScore++;
    for(var i = 0; i < vm.gameSettings.players.length; i++){
      if(vm.gameSettings.players[i].name == player){
        vm.gameSettings.players[i].score++;
      }
    }
  }

  vm.handleSuccess = function(response){
    console.log('saved successfullly', response);
  }

  vm.handleFailure = function(response){
    console.log('save fail', response);
  }

  vm.saveGameUpdates = function(){
    for (var i = 0; i < vm.gameSettings.players.length; i++){
      if (vm.gameSettings.players[i].score > vm.gameSettings.winner.score){
        vm.gameSettings.winner = vm.gameSettings.players[i];
      } else if(vm.gameSettings.players[i].score == vm.gameSettings.winner.score){
        vm.gameSettings.winner.name = vm.gameSettings.winner.name + ', and ' + vm.gameSettings.players[i].name;
      }
    }

    console.log(vm.gameSettings);
    $http.put('/update/' + vm.gameSettings._id, vm.gameSettings).then(vm.handleSuccess, vm.handleFailure);
  }

}]);
