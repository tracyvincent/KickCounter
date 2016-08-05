app.controller('DashboardController', ['$http', '$location', function($http, $location){
  var vm = this;

  vm.untimedGames = [];
  vm.timedGames = [];


untimedSuccess = function(response){
  console.log('untimed load success', response.data);
  vm.untimedGames = response.data;
}

untimedFail = function(response){
  console.log('untimed load fail', response);
}
  vm.loadUntimed = function(){
    $http.get('/dashboard/untimed').then(untimedSuccess, untimedFail);
  }

vm.loadUntimed();

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

deleteUntimedSuccess = function(response){
  console.log('delete untimed success');
  vm.loadUntimed();
}

deleteUntimedFail = function(response){
  console.log('delete untimed fail');
}

  vm.deleteUntimedGame = function(gameId){
    $http.delete('/dashboard/deleteUntimed/' + gameId).then(deleteUntimedSuccess, deleteUntimedFail);
  }

  deleteTimedSuccess = function(response){
    console.log('delete timed success');
    vm.loadTimed();
  }

  deleteTimedFail = function(response){
    console.log('delete timed fail');
  }

    vm.deleteTimedGame = function(gameId){
      $http.delete('/dashboard/deleteTimed/' + gameId).then(deleteTimedSuccess, deleteTimedFail);
    }

}]);
