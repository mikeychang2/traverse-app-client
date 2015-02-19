app.controller('authController', ['$scope', '$http', '$window', '$location', 'AuthenticationFactory',
  function ($scope, $http, $window, $location, AuthenticationFactory) {
    // $scope.login = false;
    // $scope.signup = false;
    $scope.message = '';
    $scope.user = {username: '', password: ''};
    $scope.new_user = {name: '', username: '', email:'', password: '' }
    $scope.oneAtATime = true;
    $scope.user_name;

    var urlBase = ""


    $scope.authenticate = function () {
      $http.post('http://localhost:3000/auth', $scope.user)
        .success(function (data, status, headers, config) {
          $window.sessionStorage.token = data.auth_token;
          $window.sessionStorage.user_id = data.user_id;
          $window.sessionStorage.user_name = data.user_name;
          // set authservice to true (boolean isloggedin)
          $scope.user_name = data.user_name;
          console.log($scope.user_name);
          $scope.message = 'Welcome';
          $scope.user = '';
          $location.path('/trips')
          // AuthenticationFactory.check();
        })
        .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;
          $scope.user = ''
          $location.path('/')

          // set authservice to false
          // Handle login errors here
          $scope.message = 'Error: Invalid user or password';
        });9
    };


     $scope.register = function() {
      console.log($scope.new_user)
      $http.post('http://localhost:3000/users', $scope.new_user)
        .success(function(data, status, headers, config){
          $window.sessionStorage.token = data.auth_token;
          $window.sessionStorage.user_id = data.user_id;
          $window.sessionStorage.user_name = data.user_name;

          console.log($window.sessionStorage.token);
          $scope.message = "Welcome!";
          $scope.user_name = data.user_name;
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

