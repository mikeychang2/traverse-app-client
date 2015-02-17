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

    eventsFactory.insertEvent = function (event) {
        return $http.post(urlBase + '/events', event);
    };

    eventsFactory.updateEvent = function (event) {
        console.log(event);
        return $http.put(urlBase + '/events/' + event.id, event)
    };

    eventsFactory.deleteEvent = function (id) {
        return $http.delete(urlBase + '/events/' + id);
    };

    return eventsFactory;
}]);

