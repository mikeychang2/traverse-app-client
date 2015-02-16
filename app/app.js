var app = angular.module('traverseApp', [
  'ngStorage',
  'ngRoute'
  ]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/trips', {
        controller: 'tripsController',
        templateUrl: '/js/trips/trips.html'
    })
    .when('/', {
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

    .otherwise({ redirectTo: '/' })
}]);

