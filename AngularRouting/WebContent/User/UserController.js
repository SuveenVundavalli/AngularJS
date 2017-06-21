app.controller("UserController", function($scope) {
	$scope.logged = true;
	console.log("is user logged in : "+$scope.logged);
	$scope.isUserLoggedin = function(){
		$scope.logged = !$scope.logged;
		console.log("is user logged in : "+$scope.logged);
	};
})