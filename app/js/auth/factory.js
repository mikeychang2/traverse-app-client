app.factory('authInterceptor', ['$rootScope', '$q', '$window',
  function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    }
  };
}]);

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});

app.factory('AuthenticationFactory', ['$window', function($window) {

  var auth = {

    isLogged: false,

    check: function() {
      if ($window.sessionStorage.token && $window.sessionStorage.user_id) {
        this.isLogged = !this.isLogged;
      } else {
        this.isLogged = !this.isLogged;
        delete $window.sessionStorage.user_id;
        delete $window.sessionStorage.token;
      }
    }
  };

  return auth;
}])
