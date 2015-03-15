app.controller ('instagramController' , ['$scope', 'instagramFactory', '$http', '$routeParams', '$window', '$cookies',
  function ($scope, instagramFactory, $http, $routeParams, $window, $cookies) {
    // $window.sessionStorage.igLoggedIn = 'false';
    $scope.photos = [];
    $scope.photosReference = {};
    $scope.selectedPhotos = [];
    $scope.instaCookies = $cookies.instaCookies
    $scope.status;
    $scope.testerVariable = true;


    $scope.checkInstaCookies = function () {
      if (typeof $cookies.instaCookies == 'undefined') {
        $cookies.instaCookies = "false"
      }
        console.log($cookies.instaCookies)
        console.log("cookies?")
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


    $scope.getPhotos = function () {
      instagramFactory.getPhotos()
      .success (function (response) {
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
        console.log(photo)
        $scope.photosReference[photo] = $scope.photosReference[photo] === false ? true: false;
        $("img[src$='" + photo + "']").toggleClass('selected-highlight', $scope.photosReference[photo])
        console.log("added or removed!")
    };

    $scope.photoSelection = function (a){
      for (var i = 0; i < $scope.photos.length; i++ ){
        if ($scope.photosReference[$scope.photos[i]] === true)
        {
          $scope.selectedPhotos.push($scope.photos[i]);
        }
      }
      console.log ($scope.selectedPhotos);
      return $scope.selectedPhotos
    }

     $scope.savePhotos = function(){
      console.log($routeParams.eventId)
      debugger
      var photosToSave = $scope.photoSelection();
      var event_id = $window.sessionStorage.eventId;
      // define event_id
      if (photosToSave.length > 0) {
        instagramFactory.savePhotos(event_id, photosToSave)
        .success (function (response) {
          console.log(response);

        })
        .error (function (error) {
          $scope.status = "Unable to retrieve photos: " + error.message;
        });
      }

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

  }
])
