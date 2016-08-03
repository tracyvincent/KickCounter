app.controller('GameController', ['$http', '$location', '$interval', function($http, $location, $interval){
  var vm = this;

  vm.gameInit = function(){
    vm.timer = null;
    vm.timeDisplay = false;
    vm.gameSettings = {};
    vm.gameForm = true;
    vm.gameTitle = false;
    vm.gameData = {};
    vm.saveGameSet = false;
    vm.seconds = 00;
    vm.timeButtons = false;
    vm.gameStart = null;
    vm.startNew = false;
  }

  vm.gameInit();

  vm.start = function(){
    vm.saveGameSet = false;
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
      if(vm.timer){
          $interval.cancel(vm.timer);
          vm.timer = null;
      }
  }

  vm.saveGameSettings = function(){
    $http.get('/login/hello').then(function(response){vm.gameData.user = response.data}, function(err){ console.log(err);});
    vm.gameForm = false;
    vm.gameTitle = true;
    if(vm.gameSettings.timed == 'false'){
      vm.saveGameSet = true;
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

  vm.saveGameData = function() {
    if (vm.seconds > 0){
      vm.gameData.gameDuration = vm.seconds;
    }
    vm.gameData.gameName = vm.gameSettings.name;
    vm.gameData.gameStart = vm.gameStart;
    vm.saveGameSet = false;
    vm.timeButtons = false;
    console.log(vm.gameData);
    //send gameData to database


    vm.startNew = true;
  }

  vm.deleteGame = function() {
    vm.gameInit();
  }
}]);
