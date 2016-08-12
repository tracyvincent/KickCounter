app.controller('DashboardController', ['$http', '$location', 'DataService', function($http, $location, DataService){
  var vm = this;

  vm.untimedGames = [];
  vm.timedGames = {};
  DataService.loadTimed();

untimedSuccess = function(response){
  vm.untimedGames = response.data.reverse();
}

untimedFail = function(response){
  console.log('untimed load fail', response);
}
  vm.loadUntimed = function(){
    $http.get('/dashboard/untimed').then(untimedSuccess, untimedFail);
  }

vm.loadUntimed();

timedSuccess = function(response){
  vm.timedGames = response.data.reverse();
}

timedFail = function(response){
  console.log('timed load fail', response);
}
  vm.loadTimed = function(){
    $http.get('/dashboard/timed').then(timedSuccess, timedFail);
  }

  vm.loadTimed();


deleteUntimedFail = function(response){
  console.log('delete untimed fail');
}

  vm.deleteUntimedGame = function(gameId, i){
    $http.delete('/dashboard/deleteUntimed/' + gameId).then(function(response){
      vm.untimedGames.splice(i, 1);
      console.log('delete untimed success');
    }, deleteUntimedFail);
  }

  deleteTimedFail = function(response){
    console.log('delete timed fail');
  }

    vm.deleteTimedGame = function(gameId, i){
      $http.delete('/dashboard/deleteTimed/' + gameId).then(function(response){
        vm.timedGames.splice(i, 1);
        }, deleteTimedFail);
    }

    vm.continueGame = function(gameInfo){
      DataService.setContinueGame(gameInfo);
}
}]);
