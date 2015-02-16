var app = angular.module('traverseApp', [
  'ngRoute'
  ]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/trips', {
        controller: 'tripsController',
        templateUrl: '/js/trips/trips.html'
    })
    .when('/auth', {
        controller: 'authController',
        templateUrl: 'js/auth/auth.html'
    })
    .when('/trips/:tripId', {
        controller: 'eventsController',
        templateUrl: 'views/events.html'
    })
    .when('/trips/:tripId/events', {
        controller: 'eventsController',
        templateUrl: 'views/events.html'
    })

    .when('/trips/:tripId/events/:eventId', {
        controller: 'eventsController',
        templateUrl: 'views/event.html'
    })
    .when('/facebook', {
        controller: 'facebookController',
        templateUrl: 'views/facebook.html'
    })

    .otherwise({ redirectTo: '/' })
}]);

