app.factory('DataService', ['$http', function($http){

var dataServiceGame = {}

function setContinueGame(gameInfo){
  dataServiceGame = gameInfo;
  console.log('DataService', dataServiceGame);
}

return{
  getDataServiceGame: function(){
  return dataServiceGame;
},
  setContinueGame: setContinueGame
}
}]);
