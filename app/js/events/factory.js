app.factory('eventsFactory', ['$http', '$routeParams', function($http, $routeParams) {

    var tripId = $routeParams.tripId
    var eventsFactory = {};
    var urlBase = 'http://localhost:3000/trips/' + tripId;

    eventsFactory.getEvents = function () {
        return $http.get(urlBase + '/events');
    };

    eventsFactory.getAllEvents = function () {
        return $http.get(urlBase + '/all_events');
    };

    eventsFactory.getEvent = function (id) {
        return $http.get(urlBase + '/events/' + id);
    };

    eventsFactory.getTagsForEvent = function (id) {
        return $http.get(urlBase + '/events/' + id + '/tags');
    };

    eventsFactory.insertEvent = function () {
        return $http.post(urlBase + '/events');
    };

    eventsFactory.updateEvent = function (event) {
        return $http.put(urlBase + '/events/' + event.id, event)
    };

    eventsFactory.editEvent = function (event) {
        return $http.put(urlBase + '/events/' + event.id, event)
    };

    eventsFactory.deleteEvent = function (id) {
        return $http.delete(urlBase + '/events/' + id);
    };

    // Call Server API to return photos for that event
    eventsFactory.getPhotosForEvent = function (id) {
        return $http.get('http://localhost:3000/events/' + id + '/photos');
    };

    return eventsFactory;
}]);

