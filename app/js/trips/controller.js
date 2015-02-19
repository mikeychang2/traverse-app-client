app.controller('tripsController', ['$scope', 'tripsFactory', '$http', '$window', '$route',
        function ($scope, tripsFactory, $http, $window, $route) {

    $scope.trips;
    $scope.trip = {};
    $scope.status;

    $scope.getTrips = function() {
      console.log('why is this printing out twice?!')
      tripsFactory.getTrips()
        .success(function(response){
          $scope.trips = response
        })
        .error(function(error){
          $scope.status = "Unable to load trips: " + error.message;
        });
    }

    $scope.reloadRoute = function() {
      $window.location.reload();
    }

    $scope.insertTrip = function () {
        var trip = $scope.trip
        tripsFactory.insertTrip(trip)
            .success(function (response) {
                $scope.status = 'Inserted Trip! Refreshing Trip list.';
                $scope.trips.push(response);
                $scope.trip.title = '';
            }).
            error(function(error) {
                $scope.status = 'Unable to insert trip: ' + error.message;
            });
    };

    $scope.deleteTrip = function (id) {
      tripsFactory.deleteTrip(id)
          .success(function () {
              for (var i = 0; i < $scope.trips.length; i++) {
                var checkTrip = $scope.trips[i];
                if (checkTrip.id === id) {
                  $scope.trips.splice(i, 1);
                  break;
                }
              }
          })
          .error (function(error) {
            $scope.status = 'Unable to delete trip: ' + error.message;
          });
    };

}]);
