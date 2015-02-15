app.controller('authController', function ($scope, $http, $window) {
  $scope.message = '';
  $scope.user = {username: '', password: ''};

  var urlBase = ""

  $scope.authenticate = function () {
    $http.post('http://localhost:3000/auth', $scope.user)
      .success(function (data, status, headers, config) {
        $window.sessionStorage.token = data.auth_token;
        $scope.message = 'Welcome';
      })
      .error(function (data, status, headers, config) {
        // Erase the token if the user fails to log in
        delete $window.sessionStorage.token;

        // Handle login errors here
        $scope.message = 'Error: Invalid user or password';
      });
  };
});
