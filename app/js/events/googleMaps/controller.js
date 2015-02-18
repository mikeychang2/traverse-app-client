app.controller('googleMapsController', ['$scope', '$http', '$window', '$routeParams',
  function ($scope, $http, $window, $routeParams) {

	var urlBase = 'http://localhost:3000';
	$scope.map = { center: { latitude: 37.7833, longitude: -122.4167 }, zoom: 8 };
	$scope.tripId = $routeParams.tripId;
	$scope.markerList = [];

	// $scope.marker = {
 //            coords: {
 //                latitude: 40.1451,
 //                longitude: -99.6680
 //            },
 //            show: false,
 //            id: 0,
 // 		   message: "test"
 //        };

	
	$scope.parseResponse = function (places){
		for (var i=0; i < places.length; i++){
			var coord = places[i].coordinates.split(",");
			var latitude_val = coord[0];
			var longitude_val = coord[1];
			var info_place = places[i].name + " - \n" + places[i].address;
			var marker = {
				coords: {
	                latitude: latitude_val,
	                longitude: longitude_val
			    },
	            show: false,
	            id: places[i].id,
	            message: info_place
			}
			$scope.markerList.push(marker)
		}
		console.log($scope.markerList);
		return $scope.markerList
	}

	$scope.getPlaces = function (){
		$http.get(urlBase + '/trips/' + $scope.tripId + "/map")
            .success(function(response){
				$scope.parseResponse(response);
				// debugger;
            })
            .error(function(error){
              $scope.status = "Unable to get places: " + error.message;
        });

	}

	$scope.getPlaces();

  }
])