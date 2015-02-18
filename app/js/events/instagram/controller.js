app.controller ('instagramController' , ['$scope', 'instagramFactory', '$http', '$routeParams', '$window', '$cookies',
  function ($scope, instagramFactory, $http, $routeParams, $window, $cookies) {
    // $window.sessionStorage.igLoggedIn = 'false';
    $scope.photos = [];
    $scope.photosReference = {};
    $scope.selectedPhotos = [];
    $scope.instaCookies = $cookies.instaCookies
    $scope.status;

    $scope.checkInstaCookies = function () {
      if (typeof $cookies.instaCookies == 'undefined') {
        $cookies.instaCookies = "false"
      }
    }

    $scope.checkInstaCookies();

    // Sets the user to IG-logged in when they authenticate
    $scope.igAuth = function() {
      $cookies.instaCookies = "true";
    }

    // Sends a OAuth request via server & gets photos
    $scope.igLogin = function () {
       instagramFactory.igLogin($routeParams.code)
      .success (function(response){
        $scope.getPhotos()
        })
        .error (function(error){
          console.log(error)
          $scope.status = "Unable to load trips: " + error.message;
        });
    }

    $scope.checkWindowIG = function() {
      return $window.sessionStorage.igLoggedIn
    }

    // $scope.checkUser = function () {
    //   debugger
    //   instagramFactory.checkUser()
    //   .success (function(response){
    //     if (response == "true") {
    //       $scope.igLoggedIn = "true"
    //     } else {
    //       $scope.igLoggedIn = "false"
    //     }
    //   })
    //     .error (function(error){
    //       console.log(error)
    //     });
    // }

    // $scope.checkUser()

    $scope.getPhotos = function () {
      instagramFactory.getPhotos()
      .success (function (response) {
        debugger;
        console.log(response)
        $scope.photos = response;
        for (var i = 0; i < $scope.photos.length; i++ ){
          $scope.photosReference[$scope.photos[i]] = false
        }
        console.log($scope.photos);
        console.log($scope.photosReference);
      })
      .error (function(error) {
        $scope.status = "Unable to load trips: " + error.message;
      })
    }

     $scope.toggleCustom = function(photo) {
        $scope.photosReference[photo] = $scope.photosReference[photo] === false ? true: false;
        console.log("added or removed!")
    };

    $scope.photoSelection = function (){
      for (var i = 0; i < $scope.photos.length; i++ ){
        if ($scope.photosReference[$scope.photos[i]] === true)
        {
          $scope.selectedPhotos.push($scope.photos[i]);
        }
      }
      console.log ($scope.selectedPhotos);
      return $scope.selectedPhotos
    }

     $scope.savePhotos = function(currentEvent){
      console.log(currentEvent)
      var photosToSave = $scope.photoSelection();
      var event_id = currentEvent;
      // define event_id
      if (photosToSave.length > 0) {
        $http.post(urlBase + '/events/' + event_id + '/photos', {photos: photosToSave})
        .success (function (response) {
          console.log(response);
          debugger
        })
        .error (function (error) {
          $scope.status = "Unable to retrieve photos: " + error.message;
        });
      }

    }


  }
])
