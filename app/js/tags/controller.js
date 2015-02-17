app.controller('tagsController', ['$scope', 'tagsFactory', 'tripsFactory', 'eventsFactory', '$http', '$routeParams',
        function ($scope, tagsFactory, tripsFactory, eventsFactory, $http, $routeParams) {

    $scope.trips;
    $scope.trip = {};

    $scope.tags;
    $scope.tag = {};

    $scope.tripId = $routeParams.tripId
    $scope.tagId = $routeParams.tagId
    $scope.eventsByTag;

    $scope.getTags = function() {
      tagsFactory.getTags($routeParams.tripId)
        .success(function(response){
          $scope.tags = response
        })
        .error(function(error){
          $scope.status = "Unable to load tags: " + error.message;
        });
    };
    $scope.getTags();

    getEventsByTag = function() {
      tagsFactory.getEventsByTag($routeParams.tripId, $routeParams.tagId)
        .success(function(response){
          $scope.eventsByTag = response    
        })
        .error(function(error){
          $scope.status = "Unable to load event by tags: " + error.message;
        });
    };

    getEventsByTag();

    $scope.insertTag = function () {
        var tag = $scope.tag
        tagsFactory.insertTag(tag, $routeParams.eventId)
            .success(function (response) {
                $scope.status = 'Inserted tag! Refreshing event.';
                $scope.tags.push(response);
                $scope.tag.name = ''
            }).
            error(function(error) {
                $scope.status = 'Unable to create tag: ' + error.message;
            });
    };

    // $scope.deleteEvent = function (id) {
    //   eventsFactory.deleteEvent(id)
    //       .success(function () {
    //           for (var i = 0; i < $scope.events.length; i++) {
    //             var checkEvent = $scope.events[i];
    //             if (checkEvent.id === id) {
    //               $scope.events.splice(i, 1);
    //               break;
    //             }
    //           }
    //       })
    //       .error (function(error) {
    //         $scope.status = 'Unable to delete event: ' + error.message;
    //       });
    // };


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
