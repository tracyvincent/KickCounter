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
  .when('/continueGame', {
    templateUrl: 'views/continueGame.html',
    controller: 'ContinueController',
    controllerAs: 'continue'
  })
  .when('/kickReport', {
    templateUrl: 'views/kickReport.html',
    controller: 'ReportController',
    controllerAs: 'report'
  })
  $locationProvider.html5Mode(true);
}]);
