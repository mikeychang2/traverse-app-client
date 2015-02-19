app.controller('carouselController', ['$scope',
  function($scope){
    $scope.myInterval = 10000;
    $scope.slides = [
      {
        image: 'http://lorempixel.com/400/200/'
      },
      {
        image: 'http://lorempixel.com/400/200/food'
      }
    ];
}]);
