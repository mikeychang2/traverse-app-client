app.controller('yelpController', ['$scope', 'yelpFactory', '$http',
  function ($scope, yelpFactory, $http) {
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

    $scope.addPlace = function(result, currentEvent){
      console.log(currentEvent)
      console.log(result)
      yelpFactory.savePlace(result, currentEvent)
        .success(function(response){
          // debugger;
          console.log(response)
        })
    }
  }
}]);


