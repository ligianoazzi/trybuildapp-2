myApp.controller('recipeController',  ['$scope', '$http','$rootScope',  function($scope, $http, $rootScope, $mdDateLocale){

	$rootScope.pageTitle = "CMS";

	$scope.getData = function(){
		$http
		.get(url_base+"return-data.php?key="+key)
		.then(function(data){
				$scope.clientes = data;
		});
	}
	$scope.getData();
 
}]);