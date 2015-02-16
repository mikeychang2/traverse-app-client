app.controller('authController', ['$scope', '$http', '$window', '$location',
  function ($scope, $http, $window, $location) {
    $scope.login = false;
    $scope.signup = false;
    $scope.message = '';
    $scope.user = {username: '', password: ''};
    $scope.new_user = {name: '', username: '', email:'', password: '' }

    var urlBase = ""

    $scope.authenticate = function () {
      $http.post('http://localhost:3000/auth', $scope.user)
        .success(function (data, status, headers, config) {
          $window.sessionStorage.token = data.auth_token;
          $window.sessionStorage.user_id = data.user_id;
          console.log($window.sessionStorage);
          // set authservice to true (boolean isloggedin)
          $scope.message = 'Welcome';
          $scope.user = '';
          $location.path('/trips')
        })
        .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;

          // set authservice to false
          // Handle login errors here
          $scope.message = 'Error: Invalid user or password';
        });
    };

     $scope.register = function() {
      console.log($scope.new_user)
      $http.post('http://localhost:3000/users', $scope.new_user)
        .success(function(data, status, headers, config){
          $window.sessionStorage.token = data.auth_token;
          $window.sessionStorage.user_id = data.user_id;
          console.log($window.sessionStorage.token);
          $scope.message = "Welcome!";
          $scope.new_user = '';
          $location.path('/trips')
        })
        .error(function(data, status, headers, config){
          delete $window.sessionStorage.token;
          $scope.message = "Error: Check registration fields"
        })
     }

     $scope.logout = function () {
        // change back to false authservice
        delete $window.sessionStorage.token;
        delete $window.sessionStorage.user_id;
    };
  }]);

