var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider) {
	
	$routeProvider.when("/",{
		templateUrl : "Home/Home.html",
		controller : "HomeController"
	})
	.when("/Blog",{
		templateUrl : "Blog/Blog.html",
		controller : "BlogController"
	})
	.when("/Form",{
		templateUrl : "Form/Form.html",
		controller : "FormController"
	})
	.when("/Jobs",{
		templateUrl : "Jobs/Jobs.html",
		controller : "JobsController"
	})
	.when("/Products",{
		templateUrl : "Products/Products.html",
		controller : "ProductController"
	})
	.when("/Login",{
		templateUrl : "User/Login.html",
		controller : "UserController"
	})
	.when("/Logout",{
		templateUrl : "User/Logout.html",
		controller : "UserController"
	})
	.otherwise({redirectTo:'/'});
	
});