var app = angular.module('traverseApp', ['ngRoute', 'ng-token-auth']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/trips', {
        controller: 'tripsController',
        templateUrl: '/views/trips.html'
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

app.config(function($authProvider) {
  $authProvider.configure({
            apiUrl: 'http://localhost:3000' //your api's url
          });
});

app.controller('authCtrl', function ($scope, $http, $auth) {

  //OAUTH SIGN IN
  $scope.handleBtnClick = function() {
    $auth.authenticate('facebook')
    .then(function(resp) {
      alert('something successful happened')
    })
    .catch(function(resp) {
        // handle errors
        // handle errors
        alert('something terrible happened')
      });
  };

  //OAUTH SIGN OUT
  $scope.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };

});
