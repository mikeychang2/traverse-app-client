app.controller('tripsController', ['$scope', 'tripsFactory', '$http',
        function ($scope, tripsFactory, $http) {

    $scope.trips;
    $scope.trip = {};
    // $scope.status;

    // Hitting rails-API to get all trips from trips#index
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

    $scope.getTrips();

    // $scope.updateTrip = function (id) {
    //     var cust;
    //     for (var i = 0; i < $scope.trips.length; i++) {
    //         var currCust = $scope.trips[i];
    //         if (currCust.ID === id) {
    //             cust = currCust;
    //             break;
    //         }
    //     }

    //     tripsFactory.updateTrip(cust)
    //       .success(function () {
    //           $scope.status = 'Updated Customer! Refreshing customer list.';
    //       })
    //       .error(function (error) {
    //           $scope.status = 'Unable to update trip: ' + error.message;
    //       });
    // };

    $scope.insertTrip = function () {
        var trip = $scope.trip
        // debugger;

        tripsFactory.insertTrip(trip)
            .success(function () {
                $scope.status = 'Inserted Trip! Refreshing Trip list.';
                $scope.trips.push(trip);
                // jquery to append href for new trip
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


    // $scope.deleteCustomer = function (id) {
    //     dataFactory.deleteCustomer(id)
    //     .success(function () {
    //         $scope.status = 'Deleted Customer! Refreshing customer list.';
    //         for (var i = 0; i < $scope.customers.length; i++) {
    //             var cust = $scope.customers[i];
    //             if (cust.ID === id) {
    //                 $scope.customers.splice(i, 1);
    //                 break;
    //             }
    //         }
    //         $scope.orders = null;
    //     })
    //     .error(function (error) {
    //         $scope.status = 'Unable to delete customer: ' + error.message;
    //     });
    // };

    // $scope.getCustomerOrders = function (id) {
    //     dataFactory.getOrders(id)
    //     .success(function (orders) {
    //         $scope.status = 'Retrieved orders!';
    //         $scope.orders = orders;
    //     })
    //     .error(function (error) {
    //         $scope.status = 'Error retrieving customers! ' + error.message;
    //     });
    // // };

}]);
