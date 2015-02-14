console.log("hello you're in auth_controller")

var yourApp = angular.module('traverseApp', ['ng-token-auth']);

yourApp.config(function($authProvider) {
  $authProvider.configure({
            apiUrl: 'http://localhost:3000' //your api's url
          });
});

yourApp.controller('mainCtrl', function ($scope, $http, $auth) {


  //OAUTH SIGN IN
  $scope.handleBtnClick = function() {
    debugger
    $auth.authenticate('facebook')
    .then(function(resp) {
      alert('something successful happened')
    })
    .catch(function(resp) {
        // handle errors
        // handle errors
        alert('something terrible happened')
      });
  };

  //OAUTH SIGN OUT
  $scope.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };

});
