app.controller('modalController', ['$scope',
  function($scope) {
    $scope.FBShown = false;
    $scope.IGShown = false;
    $scope.yelpShown = false;
    $scope.photos = []

    $scope.chooseFacebookPhotos = function(){
      // adding photos from Facebook with pulling in photos that are
    }

    // render Facebook photos in a modal
    $scope.toggleFB = function() {
      $scope.FBShown = !$scope.FBShown;
    };

    // render IG photos in a modal
    $scope.toggleIG = function() {
      $scope.IGShown = !$scope.IGShown;
    };

    // render IG search & links in a modal
    $scope.toggleYelp = function() {
      $scope.yelpShown = !$scope.yelpShown;
    };

  }]);
