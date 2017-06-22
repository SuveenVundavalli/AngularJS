app.controller("ProductController", function($scope) {
	
	$scope.isUserClickedEdit = false;
	$scope.searchText1 = "";
	$scope.searchOption = "";
	$scope.sp={};
	
	
	$scope.products = [
		{id: 1, name:'Product 1', price:1000, stock:25},
		{id: 2, name:'Product 2', price:2000, stock:26},
		{id: 3, name:'Product 3', price:3000, stock:27},
		{id: 4, name:'Product 4', price:4000, stock:28},
		{id: 5, name:'Product 5', price:5000, stock:29},
		{id: 6, name:'Product 6', price:6000, stock:30}
	];
	
	
	
	$scope.deleteProduct = function(id){
		var sure = confirm("confirm delete product");
		if(sure){
			var index = getProductById(id);
			console.log(index);
			if(index!=-1)
				$scope.products.splice(index,1);
			else
				alert("Something Wrong Happened");
		} else
			alert("Aborted");
		
	};
	
	$scope.editProduct = function(id){
		$scope.isUserClickedEdit = true;
		var index = getProductById(id);
		var selectedProduct = $scope.products[index];
		//$scope.sp=selectedProduct;
		$scope.sp.id = selectedProduct.id;
		$scope.sp.name = selectedProduct.name;
		$scope.sp.price = selectedProduct.price;
		$scope.sp.stock = selectedProduct.stock;
		console.log($scope.sp);
	};
	
	$scope.updateProduct = function(id,myForm){
		console.log("update product passed id : "+id)
		var index = getProductById(id);
		console.log(index);
		$scope.products[index].name = $scope.sp.name;
		$scope.products[index].price = $scope.sp.price;
		$scope.products[index].stock = $scope.sp.stock;
		$scope.isUserClickedEdit=false;
		resetForm(myForm);
	}
	
	$scope.addProduct  = function(myForm){
		console.log("add products method");
		$scope.products.push({
			id: $scope.sp.id, name:$scope.sp.name, price:$scope.sp.price, stock:$scope.sp.stock
		});
		resetForm(myForm);
	}
	function resetForm(myForm){
		$scope.sp={};
		myForm.$setPristine();
		myForm.$setUntouched();
	}
	
	function getProductById(id){
		for(var i=0; i< $scope.products.length;i++){
			//console.log("getProductsById "+$scope.products[i].id);
			if($scope.products[i].id == id){
				return i;
			}
		}
		
		return -1;
	};
	$scope.searchText = {};
	$scope.search = function(searchText){
		if($scope.searchOption=='id'){
			$scope.searchText = {};
			console.log("in "+$scope.searchOption);
			$scope.searchText.id = searchText;
		} else if($scope.searchOption=='name'){
			$scope.searchText = {};
			console.log("in "+$scope.searchOption);
			$scope.searchText.name = searchText;
		} else if($scope.searchOption=='price'){
			$scope.searchText = {};
			console.log("in "+$scope.searchOption);
			$scope.searchText.price=searchText;
		} else if($scope.searchOption=='stock'){
			$scope.searchText = {};
			console.log("in "+$scope.searchOption);
			$scope.searchText.stock=searchText;
		}else {
			$scope.searchText = {};
			console.log($scope.searchOption);
			$scope.searchText = searchText;
		}
		console.log("");
	};
})