app.controller('facebookController', ['$scope', '$http',
  function ($scope, $http) {
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

    $scope.login = function (){
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          console.log('Logged in.');
          console.log(response);
          // debugger
          var authResponse = response.authResponse
          $http.get(urlBase + '/facebook' + '?user_id=' + authResponse.userID + "&accessToken=" + authResponse.accessToken)
            .success(function(response){
              console.log(response)
            })
            .error(function(error){
              $scope.status = "Unable to save auth response: " + error.message;
            });
          // FB.api('/me/photos/uploaded', 'get', function(response){
          //   console.log(response)
          // });
        }
        else {
          // FB.login();
          FB.login(function(){
           FB.getLoginStatus(function(response){
            console.log(response);
           })
         })
        }
      });
    }

  }
])
