app.controller('yelpController', ['$scope', 'yelpFactory', '$http',
  function ($scope, yelpFactory, $http) {
    $scope.results;
    $scope.yelp = {};

    $scope.searchYelp = function () {
      var search = $scope.yelp

      yelpFactory.searchYelp(search)
      .success(function(response) {
        debugger
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
    }
  }
]);


