app.controller("NavController", function($scope, $location) {
	console.log($location.path());
	$scope.isActive = function(destination){
		return destination === $location.path();
	};
})