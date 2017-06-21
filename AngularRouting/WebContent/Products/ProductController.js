app.controller("ProductController", function($scope) {
	
	$scope.isUserClickedEdit = false;
	
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
		$scope.id = selectedProduct.id;
		$scope.name = selectedProduct.name;
		$scope.price = selectedProduct.price;
		$scope.stock = selectedProduct.stock;
		console.log($scope.id);
	};
	
	$scope.updateProduct = function(id){
		console.log("update product passed id : "+id)
		var index = getProductById(id);
		console.log(index);
		$scope.products[index].name = $scope.name;
		$scope.products[index].price = $scope.price;
		$scope.products[index].stock = $scope.stock;
		$scope.isUserClickedEdit=false;
		resetForm();
	}
	
	$scope.addProduct  = function(){
		console.log("add products method");
		$scope.products.push({
			id: $scope.id, name:$scope.name, price:$scope.price, stock:$scope.stock
		});
		resetForm();
	}
	function resetForm(){
		$scope.id='';
		$scope.name='';
		$scope.price='';
		$scope.stock='';
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
	
})