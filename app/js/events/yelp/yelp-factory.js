app.factory('yelpFactory', ['$http',

  function($http) {
    var urlBase = 'http://localhost:3000';
    var yelpFactory = {};

    yelpFactory.searchYelp = function (search) {
      return $http.post(urlBase + '/yelp' + "?term=" + search.search + "&location=" + search.location)
    };

    return yelpFactory;
  }
]);
