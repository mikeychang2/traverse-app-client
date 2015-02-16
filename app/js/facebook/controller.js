app.controller('facebookController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.user = "test";

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
        }
        else {
          // FB.login();
          FB.login(function(){
           FB.api('/me/feed', 'post', {message: 'Hello, world!'});
          }, {scope: 'publish_actions'});
        }
      });
    }

  }
])
