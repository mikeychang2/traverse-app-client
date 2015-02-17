app.controller('eventsController', ['$scope', 'tripsFactory', 'eventsFactory', '$http', '$rootScope', '$routeParams',
        function ($scope, tripsFactory, eventsFactory, $http, $rootScope, $routeParams) {

    $scope.trips;
    $scope.trip = {};

    $scope.events;
    $scope.event = {};

    $scope.eventsByTag;

    $scope.tripId = $routeParams.tripId

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

    $scope.insertEvent = function () {
        var event = $scope.event
        eventsFactory.insertEvent(event)
            .success(function (response) {
                $scope.status = 'Inserted event! Refreshing event list.';
                $scope.events.push(response);
                $scope.event.title = ''
                $scope.event.date = ''
                $scope.event.content = ''
            }).
            error(function(error) {
                $scope.status = 'Unable to insert event: ' + error.message;
            });
    };

    $scope.deleteEvent = function (id) {
      eventsFactory.deleteEvent(id)
          .success(function () {
              for (var i = 0; i < $scope.events.length; i++) {
                var checkEvent = $scope.events[i];
                if (checkEvent.id === id) {
                  $scope.events.splice(i, 1);
                  break;
                }
              }
          })
          .error (function(error) {
            $scope.status = 'Unable to delete event: ' + error.message;
          });
    };


    // $scope.updateEvent = function (id) {
    //   eventsFactory.updateEvent(id)
    //     .success(function(response) {
    //       for (var i = 0; i < $scope.events.length; i++) {
    //             var checkEvent = $scope.events[i];
    //             if (checkEvent.id === id) {
    //               $scope.events.checkEvent=response;
    //               break;
    //             }
    //       }
    //     })
    //     .error (function(){
    //       $scope.status = 'Unable to update: ' + error.message;
    //     })
    // }
















}]);
