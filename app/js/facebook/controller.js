app.controller('facebookController', ['$scope', '$http', '$window',
  function ($scope, $http, $window) {
    $scope.windowStorage = "";
    $scope.photos = [];
    $scope.photosReference = {};
    $scope.selectedPhotos = [];

    var urlBase = 'http://localhost:3000';

    $scope.initialize = function (){
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1411251792503804',
          xfbml      : true,
          version    : 'v2.1'
        });

        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            // $window.sessionStorage.facebook = "true"
            $scope.windowStorage = "true"
            $scope.$apply();
          }
          else{
            $window.sessionStorage.facebook = "false"
            $scope.windowStorage = "false"
          }
          })
        };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    }

    $scope.initialize();


    $scope.login = function (){
          FB.login(function(){
           FB.getLoginStatus(function(response){
            var authResponse = response.authResponse

            $http.get(urlBase + '/facebook' + '?user_id=' + authResponse.userID + "&accessToken=" + authResponse.accessToken)
            .success(function(response){
              console.log(response)
              // $window.sessionStorage.facebook = response
              $scope.windowStorage = response
            })
            .error(function(error){
              // $window.sessionStorage.facebook = "false"
              $scope.windowStorage = "false"
              $scope.status = "Unable to save auth response: " + error.message;
            });

           })
         })
        }


    $scope.getPhotos = function (){
      $http.get(urlBase + '/facebook/photos')
      .success (function (response) {
        console.log(response)
        // return response
        $scope.photos = response;
        for (var i = 0; i < $scope.photos.length; i++ ){
          $scope.photosReference[$scope.photos[i]] = false
        }
        console.log($scope.photos);
        console.log($scope.photosReference);
      })
      .error (function (error) {
        $scope.status = "Unable to retrieve photos: " + error.message;
      });
    }

    $scope.toggleCustom = function(photo) {
        $scope.photosReference[photo] = $scope.photosReference[photo] === false ? true: false;
        console.log($scope.photosReference);
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

    $scope.savePhotos = function(){

      var photosToSave = $scope.photoSelection();
      $scope.selectedPhotos = [];
      var event_id = 2;
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

  // check access token expiration and re-validate it (SERVERSIDE: FacebookController: def validation)
    // $scope.checkAccessToken = function(){
    //   $http.get(urlBase + '/facebook/validation')
    //   .success (function (response) {
    //     $window.sessionStorage.facebook = response
    //   })
    //   .error (function (error) {
    //     $scope.status = "Unable to validate token: " + error.message;
    //   });
    // }

  }
])
