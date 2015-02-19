app.controller('yelpController', ['$scope', 'yelpFactory', '$http', '$routeParams',
  function ($scope, yelpFactory, $http, $routeParams) {
    $scope.results;
    $scope.yelp = {};
    $scope.place;
    $scope.yelpLink = true;

    $scope.searchYelp = function () {
      var search = $scope.yelp

      yelpFactory.searchYelp(search)
      .success(function(response) {
        // response.businesses[0].url
        // to grab url at index of objects we get back
        // console.log(response.businesses[0])
        // console.log(response.businesses[0].image_url)
        // console.log(response.businesses[0].url)
        // console.log(response.businesses[0].location.coordinate)
        // console.log(response.businesses[0].name)
        $scope.results = response.businesses
        console.log($scope.results)
      })
      .error(function (error) {
        $scope.status = "OOOOPS THAT DUN WORK" + error.message;
      })

    $scope.addPlace = function(result){
      console.log(result)
      var event_id = $routeParams.eventId;
      // debugger
      yelpFactory.savePlace(result, event_id)
        .success(function(response){
          console.log(response)
        })
    }
  }
}]);


