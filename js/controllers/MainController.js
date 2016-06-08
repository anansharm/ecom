app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'This is great';
	$scope.promo = 'A promotion to give you a good discount';
	$scope.products = [{
						name: 'Moving',
						price: 115,
						pubdate: new Date('1980', '00', '26'),
						cover: 'img/book-your-move.jpg'
					},
					{
						name: 'Cleaning',
						price: 110,
						pubdate: new Date('1980', '00', '26'),
						cover: 'img/moving-company.jpg'
					}

					];
}]);
app.controller("ChildController", ["$scope",function($scope){
	$scope.title = "What is going on!";
}]);
