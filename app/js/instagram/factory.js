app.factory('instagramFactory', ['$http',

  function($http) {
    var urlBase = 'http://localhost:3000';
    var instagramFactory = {};

    instagramFactory.igLogin = function () {
      // window.location.assign("https://api.instagram.com/oauth/authorize/?client_id=cb89d1dac394466e9767ad0e3bf9c6bf&redirect_uri=http://localhost:9000/instagram&response_type=code")

      // return $http.get(urlBase + '/instagram')
    };
    instagramFactory.getPhotos = function () {
      return $http.get(urlBase + '/instagram/photos')
    }

    return instagramFactory;
  }

])