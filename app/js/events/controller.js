app.controller('eventsController', ['$scope', 'tripsFactory', 'eventsFactory', '$http', '$routeParams',
        function ($scope, tripsFactory, eventsFactory, $http, $routeParams) {

    $scope.trips;
    $scope.trip = {};

    $scope.events;
    $scope.event = {};

    $scope.getEvents = function() {
      eventsFactory.getEvents()
        .success(function(response){
          $scope.events = response
          $scope.trip = $routeParams.tripId
        })
        .error(function(error){
          $scope.status = "Unable to load events: " + error.message;
        });
    }

    $scope.getEvents();

}]);
