 app.factory('tagsFactory', ['$http', '$routeParams', '$rootScope', function($http, $routeParams, $rootScope) {

    var tripId = $routeParams.tripId
    var eventId = $routeParams.eventId
    var tagsFactory = {};
    var urlBase = 'http://localhost:3000';

    tagsFactory.getTags = function (tripID) {
        return $http.get(urlBase + '/trips/' + tripID + '/tags');
    };

    tagsFactory.getEventsByTag = function (tripID, tagId) {
        return $http.get(urlBase + '/trips/' + tripID + '/events_by_tag/' + tagId);
    };

    tagsFactory.insertTag = function (tag) {
        return $http.post(urlBase + '/events/' + $rootScope.activeEvent.id + '/tags', tag);
    };

    tagsFactory.insertTagForUpdateEvent = function (tag) {
        return $http.post(urlBase + '/events/' + $routeParams.eventId + '/tags', tag);
    };

    tagsFactory.deleteTag = function (id) {
        return $http.delete(urlBase + '/events/' + eventID + '/tags' + id);
    };

    tagsFactory.getTagsForEventTagFactory = function (id) {
        return $http.get(urlBase + '/trips/' + tripId + '/events/' + id + '/tags');
    };

    return tagsFactory;
}]);
