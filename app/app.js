var app = angular.module('traverseApp', [
  'ngRoute'
  ]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/trips', {
        controller: 'tripsController',
        templateUrl: '/js/trips/trips.html'
    })
    .when('/auth', {
        controller: 'authController',
        templateUrl: 'js/auth/auth.html'
    })
    .otherwise({ redirectTo: '/' })
}]);

