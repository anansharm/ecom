app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'This is great';
	$scope.promo = 'A promotion to give you a good discount';
	$scope.product = {
		name: 'Moving',
		price: 115
	};
}]);
app.controller("ChildController", ["$scope",function($scope){
	$scope.title = "What is going on!";
}]);