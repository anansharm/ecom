app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'This is great';
	$scope.promo = 'A promotion to give you a good discount';
	$scope.products = [{
						name: 'Moving',
						price: 115,
						pubdate: new Date('1980', '00', '26'),
						cover: 'img/book-your-move.jpg',
						likes: 0,
						dislikes: 0
					},
					{
						name: 'Cleaning',
						price: 110,
						pubdate: new Date('1980', '00', '26'),
						cover: 'img/moving-company.jpg',
						likes: 0,
						dislikes: 0
					}

					];
	$scope.plusOne = function(index){
		$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index){
		$scope.products[index].dislikes += 1;
	}				
}]);
app.controller("ChildController", ["$scope",function($scope){
	$scope.title = "What is going on!";
}]);
//starting of the 2nd application
app_2.controller("SecondController", ["$scope",function($scope){
	$scope.program = {
		series: "Sherlock", 
	    series_img: "img/sherlock.jpg", 
	    genre: "Crime drama", 
	    season: 3, 
	    episode: "The Empty Hearse", 
	    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.", 
	    datetime: new Date() 
	};
}]);


//bootstraping the second application because of the limitation of ng app
//infact, this can be overcome by using ng-module as given in the example 
// in the URL: http://www.simplygoodcode.com/2014/04/angularjs-getting-around-ngapp-limitations-with-ngmodule/
angular.element(document).ready(function() {
           angular.bootstrap(document.getElementById("App2"), ['appTwo']);
         });
