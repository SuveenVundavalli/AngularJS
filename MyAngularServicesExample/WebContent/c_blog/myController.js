myApp.controller("myController", function($scope, myService){
	//$scope.Jobs = [];
	
	$scope.blogs = myService.getAllBlogs;
	$scope.blogs1 = myService.blogs1;
	
});