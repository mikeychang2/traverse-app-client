app.controller ('instagramController' , ['$scope', 'instagramFactory', '$http', '$routeParams',

  function ($scope, instagramFactory, $http, $routeParams) {
    console.log($routeParams)
    $scope.results;
    $scope.instagram = {};
    $scope.photos = [];
    $scope.status;

    $scope.igLogin = function () {
       instagramFactory.igLogin()
      .success (function(response){
        debugger;
        console.log(response)
        // i'm expecting response to be true
        })
        .error (function(error){
          debugger
          console.log(error)
          $scope.status = "Unable to load trips: " + error.message;
        });
    }

    $scope.getPhotos = function () {
      instagramFactory.getPhotos()
      .success (function (response) {
        debugger;
        console.log(response)
        $scope.photos = response;
      })
      .error (function(error) {
        $scope.status = "Unable to load trips: " + error.message;
      })
    }


  }
])