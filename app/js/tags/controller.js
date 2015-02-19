app.controller('tagsController', ['$scope', '$rootScope', 'tagsFactory', 'tripsFactory', 'eventsFactory', '$http', '$routeParams',
        function ($scope, $rootScope, tagsFactory, tripsFactory, eventsFactory, $http, $routeParams) {

    $scope.trips;
    $scope.trip = {};

    $scope.tags;
    $scope.tag = {};

    $scope.tagName;
    $scope.placesByTag;
    $scope.photosByTag;

    $scope.allDefaultTags;


    $scope.tripId = $routeParams.tripId
    $scope.tagId = $routeParams.tagId
    $scope.eventsByTag;

    $scope.getTags = function() {
      tagsFactory.getTags($routeParams.tripId)
        .success(function(response){
          $scope.allTags = response
        })
        .error(function(error){
          $scope.status = "Unable to load tags: " + error.message;
        });
    };

    $scope.getDefaultTags = function () {
        tagsFactory.getDefaultTags()
        .success(function(response){
            debugger
          $scope.allDefaultTags = response
        })
        .error(function(error){
          $scope.status = "Unable to load tags: " + error.message;
          debugger
          // console.log(error)
        });
    }

    $scope.getTagsForEventTagFactory  = function() {
      tagsFactory.getTagsForEventTagFactory ($routeParams.eventId)
        .success(function(response){
          $scope.tags = response
        })
        .error(function(error){
          $scope.status = "Unable to load event: " + error.message;
        });
    }

    $scope.getEventsByTag = function() {
      tagsFactory.getEventsByTag($routeParams.tripId, $routeParams.tagId)
        .success(function(response){
          $scope.eventsByTag = response['events']  
          $scope.tagName = response['tag_name']
          $scope.placesByTag = response['places']
          $scope.trip = $routeParams.tripId
          $scope.photosByTag = response['photos']
          console.log($scope.photosByTag)
        })
        .error(function(error){
          $scope.status = "Unable to load event by tags: " + error.message;
        });
    };

    $scope.insertTag = function () {
        var tag = $scope.tag
        tagsFactory.insertTag(tag, $rootScope.activeEvent.id)
            .success(function (response) {
                $scope.status = 'Inserted tag! Refreshing event.';
                $scope.allTags.push(response);
                $scope.tag.name = ''
            }).
            error(function(error) {
                $scope.status = 'Unable to create tag: ' + error.message;
            });
    };

    $scope.insertTagForUpdateEvent = function () {
        var tag = $scope.tag
        tagsFactory.insertTagForUpdateEvent(tag, $routeParams.eventId)
            .success(function (response) {
                $scope.status = 'Inserted tag! Refreshing event.';
                $scope.tags.push(response);
                $scope.tag.name = ''
            }).
            error(function(error) {
                $scope.status = 'Unable to create tag: ' + error.message;
            });
    };

}]);
