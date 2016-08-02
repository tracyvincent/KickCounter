angular.module('kickApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/views/login.html',
    controller: 'LoginController',
    controllerAs: 'login'
  })
  .when('/register', {
    templateUrl: '/views/register.html',
    controller: 'RegisterController',
    controllerAs: 'register'
  })
  .when('/dashboard', {
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardController',
    controllerAs: 'dash'
  })
  .when('/game', {
    templateUrl: 'views/game.html',
    controller: 'GameController',
    controllerAs: 'game'
  })
  $locationProvider.html5Mode(true);
}]);
