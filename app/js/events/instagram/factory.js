app.factory('instagramFactory', ['$http',

  function($http) {
    var urlBase = 'http://localhost:3000';
    var instagramFactory = {};

    instagramFactory.igLogin = function (accessCode) {
      return $http.get(urlBase + '/instagram'  + '?access_token=' + accessCode)
    };

    instagramFactory.getPhotos = function () {
      return $http.get(urlBase + '/instagram/photos')
    }

    instagramFactory.checkUser = function () {
      return $http.get(urlBase + '/instagram/checker')
    }

    instagramFactory.savePhotos = function(currentEvent, photosToSave) {
      return $http.post(urlBase + '/events/' + currentEvent + '/photos', {photos: photosToSave})
    }

    return instagramFactory;
  }

])
