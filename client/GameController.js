app.controller('GameController', ['$http', '$location', '$interval', function($http, $location, $interval, DataService){
  var vm = this;

  vm.gameInit = function(){
    vm.timer = null;
    vm.timeDisplay = false;
    vm.gameSettings = {};
    vm.gameForm = true;
    vm.gameTitle = false;
    vm.gameData = {};
    vm.gameData.totalScore = 0;
    vm.gameData.winner = {name: '', score: 0},
    vm.saveGameSet = false;
    vm.seconds = 00;
    vm.timeButtons = false;
    vm.gameStart = null;
    vm.startNew = false;
    vm.players = [];
    vm.scoreButton = false;
  }

  vm.gameInit();

  vm.start = function(){
    vm.saveGameSet = false;
    vm.scoreButton = true;
      if(!vm.timer){
          vm.timer = $interval(goUp, 1000);
      }
      if(vm.gameStart == null){
        vm.gameStart = new Date();
      }
  }

  function goUp (){
      vm.seconds++;
  }

  vm.stop= function(){
    vm.saveGameSet = true;
    vm.scoreButton = false;
      if(vm.timer){
          $interval.cancel(vm.timer);
          vm.timer = null;
      }
  }

  vm.activatePlayers = function(number){
    var numPlayer = 1;
    for (var i = 1; i <= number; i++){
      vm.players.push({name: 'Name Player' + numPlayer, score: 0});
      numPlayer++;
    }
    console.log(vm.players);
  };


  vm.saveGameSettings = function(){
    vm.gameForm = false;
    vm.gameTitle = true;
    vm.activatePlayers(vm.gameSettings.numPlayers);
    if(vm.gameSettings.timed == 'false'){
      vm.saveGameSet = true;
      vm.scoreButton = true;
      vm.gameStart = new Date();
    } else {
    vm.timeDisplay = true;
    vm.timeButtons = true;
    console.log(vm.gameSettings);
    }
  }

  vm.startNewGame = function(){
    vm.gameInit();
  }

  vm.scorePoint = function(i){
      vm.players[i].score++;
  }

handleSuccess = function(){
  console.log('game saved');
}

handleFailure = function(){
  console.log('failed saving game');
}

  vm.saveGameData = function() {
    for (var i = 0; i < vm.players.length; i++){
      vm.gameData.totalScore += vm.players[i].score;
    }
    for (var i = 0; i < vm.players.length; i++){
      if (vm.players[i].score > vm.gameData.winner.score){
        vm.gameData.winner = angular.copy(vm.players[i]);
      } else if(vm.players[i].score == vm.gameData.winner.score){
        vm.gameData.winner.name += ' and ' + vm.players[i].name;
      }
    }
    vm.gameData.gameDuration = vm.seconds;
    vm.gameData.gameName = vm.gameSettings.name;
    vm.gameData.gameStart = vm.gameStart;
    vm.gameData.players = vm.players;
    vm.saveGameSet = false;
    vm.timeButtons = false;
    vm.scoreButton = false;
    console.log(vm.gameData);
    //send gameData to database
    $http.post('/game', vm.gameData).then(handleSuccess, handleFailure);

    vm.startNew = true;
  }

  vm.deleteGame = function() {
    vm.gameInit();
  }
}]);
