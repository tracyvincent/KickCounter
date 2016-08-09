app.factory('DataService', ['$http', function($http){

var dataServiceGame = {}
var timedGames = {};

function setContinueGame(gameInfo){
  dataServiceGame = gameInfo;
  console.log('DataService', dataServiceGame);
}

timedSuccess = function(response){
  console.log('timed load success', response);
  timedGames = response.data;
}

timedFail = function(response){
  console.log('timed load fail', response);
}

loadTimed = function(){
    $http.get('/dashboard/timed').then(timedSuccess, timedFail);
  }


return{
  getDataServiceGame: function(){
  return dataServiceGame;
},
  setContinueGame: setContinueGame,
  loadTimed: loadTimed,
  getTimedGames: function(){
    return timedGames;
  }
}

}]);
