app.factory('eventsFactory', ['$http', '$routeParams', function($http, $routeParams) {

    var tripId = $routeParams.tripId
    var eventsFactory = {};
    var urlBase = 'http://localhost:3000/trips/' + tripId;

    eventsFactory.getEvents = function () {
        return $http.get(urlBase + '/events');
    };

    eventsFactory.getEvent = function (id) {
        return $http.get(urlBase + '/events' + id);
    };

    eventsFactory.insertEvent = function () {
        return $http.post(urlBase + '/events');
    };

    eventsFactory.updateEvent = function (event) {
        return $http.put(urlBase + '/' + event.id, event)
    };

    eventsFactory.deleteEvent = function (id) {
        return $http.delete(urlBase + '/events/' + id);
    };

    return eventsFactory;
}]);
