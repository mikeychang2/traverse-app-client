 app.factory('tagsFactory', ['$http', '$routeParams', function($http, $routeParams) {

    var tagId = $routeParams.tagId

    var eventID = $routeParams.eventID
    var tagsFactory = {};
    var urlBase = 'http://localhost:3000';

    tagsFactory.getTags = function (tripID) {
        return $http.get(urlBase + '/trips/' + tripID + '/tags');
    };


    tagsFactory.insertTag = function (event) {
        return $http.post(urlBase + '/events/' + eventID + '/tags');
    };


    tagsFactory.deleteTag = function (id) {
        return $http.delete(urlBase + '/events/' + eventID + '/tags' + id);
    };

    return tagsFactory;
}]);



               // GET    /trips/:trip_id/tags(.:format)          tags#index
               // POST   /events/:event_id/tags(.:format)        tags#create
               // DELETE /events/:event_id/tags/:id(.:format)    tags#destroy
