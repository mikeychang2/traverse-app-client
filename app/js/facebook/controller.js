app.controller('facebookController', ['$scope', '$http', '$window',
  function ($scope, $http, $window) {
    $scope.user = "test";
    var urlBase = 'http://localhost:3000';

    $scope.initialize = function (){
      console.log("testingggg!");
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1411251792503804',
          xfbml      : true,
          version    : 'v2.1'
        });
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

    // $scope.checkUser = function(){
    //   FB.getLoginStatus(function(response) {
    //     if (response.status === 'connected') {
    //       $window.sessionStorage.facebook = true
    //     }
    //     else{
    //       $window.sessionStorage.facebook = false
    //     }
    //   }
    // }

    $scope.login = function (){
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          console.log('Logged in.');
          console.log(response);
          var authResponse = response.authResponse
          $http.get(urlBase + '/facebook' + '?user_id=' + authResponse.userID + "&accessToken=" + authResponse.accessToken)
            .success(function(response){
              console.log(response)
              $window.sessionStorage.facebook = true
            })
            .error(function(error){
              $window.sessionStorage.facebook = false
              $scope.status = "Access Token expired: " + error.message;
            });
        }
        else {
          FB.login(function(){
           FB.getLoginStatus(function(response){
            console.log(response);
            var authResponse = response.authResponse
            $http.get(urlBase + '/facebook' + '?user_id=' + authResponse.userID + "&accessToken=" + authResponse.accessToken)
            .success(function(response){
              console.log(response)
              $window.sessionStorage.facebook = true
            })
            .error(function(error){
              $window.sessionStorage.facebook = false
              $scope.status = "Unable to save auth response: " + error.message;
            });
           })
         })
        }
      });
    }


    $scope.getPhotos = function (){
      $http.get(urlBase + '/facebook/photos')
      .success (function (response) {
        return response
      })
      .error (function (error) {
        $scope.status = "Unable to retrieve photos: " + error.message;
      });
    }

    $scope.checkAccessToken = function(){
      $http.get(urlBase + '/facebook/validation')
      .success (function (response) {
        $window.sessionStorage.facebook = response
      })
      .error (function (error) {
        $scope.status = "Unable to validate token: " + error.message;
      });
    }

  }
])
