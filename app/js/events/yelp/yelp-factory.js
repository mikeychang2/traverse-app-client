app.factory('yelpFactory', ['$http',

  function($http) {
    var urlBase = 'http://traverse-app-api.herokuapp.com';
    var yelpFactory = {};

    yelpFactory.searchYelp = function (search) {
      return $http.post(urlBase + '/yelp' + "?term=" + search.search + "&location=" + search.location)
    };

    yelpFactory.savePlace = function (result, currentEvent) {
      return $http.post(urlBase + "/events/" + currentEvent + "/places", result)
    };

    return yelpFactory;
  }
]);
