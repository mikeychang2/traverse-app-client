var app = angular.module('traverseApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/trips', {
        controller: 'tripsController',
        templateUrl: '/app/views/trips.html'
    }).
    .otherwise({ redirectTo: '/' });

}]);


