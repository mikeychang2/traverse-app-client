 app.factory('tagsFactory', ['$http', '$routeParams', '$rootScope', function($http, $routeParams, $rootScope) {

    var tagsFactory = {};
    var urlBase = 'http://localhost:3000';

    tagsFactory.getTags = function (tripID) {
        return $http.get(urlBase + '/trips/' + tripID + '/tags');
    };

    tagsFactory.getEventsByTag = function (tripID, tagId) {
        console.log($routeParams)
        console.log(tagId);
        return $http.get(urlBase + '/trips/' + tripID + '/events_by_tag/' + tagId);
    };

    tagsFactory.insertTag = function (tag) {
        return $http.post(urlBase + '/events/' + $rootScope.activeEvent.id + '/tags', tag);
    };


    tagsFactory.deleteTag = function (id) {
        return $http.delete(urlBase + '/events/' + eventID + '/tags' + id);
    };

    return tagsFactory;
}]);



               // GET    /trips/:trip_id/tags(.:format)          tags#index
               // POST   /events/:event_id/tags(.:format)        tags#create
               // DELETE /events/:event_id/tags/:id(.:format)    tags#destroy
