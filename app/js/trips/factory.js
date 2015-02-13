angular.module('traverseApp')
    .factory('tripsFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:3000/api/trips';
    var tripsFactory = {};

    tripsFactory.getTrips = function () {
        return $http.get(urlBase);
    };

    tripsFactory.getTrip = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    tripsFactory.insertTrip = function (trip) {
        return $http.post(urlBase, trip);
    };

    tripsFactory.updateTrip = function (trip) {
        return $http.put(urlBase + '/' + trip.ID, trip)
    };

    tripsFactory.deleteTrip = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return tripsFactory;
}]);
