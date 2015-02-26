app.factory('tripsFactory', ['$http', function($http) {

    var urlBase = 'http://traverse-app-api.herokuapp.com';
    var tripsFactory = {};

    tripsFactory.getTrips = function () {
        return $http.get(urlBase + '/trips');
    };

    tripsFactory.getTrip = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    tripsFactory.insertTrip = function (trip) {
        return $http.post(urlBase + '/trips', trip);
    };

    tripsFactory.updateTrip = function (trip) {
        return $http.put(urlBase + '/' + trip.ID, trip)
    };

    tripsFactory.deleteTrip = function (id) {
        return $http.delete(urlBase + '/trips' + '/' + id);
    };

    return tripsFactory;
}]);
