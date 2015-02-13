angular.module('traverseApp')
    .controller('tripsController', ['$scope', 'tripsFactory'],
        function ($scope, tripsFactory, $http) {

    $scope.trips = "hi";
    $scope.trip;
    $scope.status;


    // Hitting rails-API to get all trips from trips#index
    $scope.getTrips = function() {
      debugger;
      tripsFactory.getTrips()
        .success(function(trips){
          $scope.trips = trips
        })
        .error(function(error){
          $scope.status = "Unable to load trips: " + error.message;
        })
    };

    // $scope.updateCustomer = function (id) {
    //     var cust;
    //     for (var i = 0; i < $scope.customers.length; i++) {
    //         var currCust = $scope.customers[i];
    //         if (currCust.ID === id) {
    //             cust = currCust;
    //             break;
    //         }
    //     }

    //     dataFactory.updateCustomer(cust)
    //       .success(function () {
    //           $scope.status = 'Updated Customer! Refreshing customer list.';
    //       })
    //       .error(function (error) {
    //           $scope.status = 'Unable to update customer: ' + error.message;
    //       });
    // };

    // $scope.insertCustomer = function () {
    //     //Fake customer data
    //     var cust = {
    //         ID: 10,
    //         FirstName: 'JoJo',
    //         LastName: 'Pikidily'
    //     };
    //     dataFactory.insertCustomer(cust)
    //         .success(function () {
    //             $scope.status = 'Inserted Customer! Refreshing customer list.';
    //             $scope.customers.push(cust);
    //         }).
    //         error(function(error) {
    //             $scope.status = 'Unable to insert customer: ' + error.message;
    //         });
    // };

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
    // };
      getTrips();
}]);
