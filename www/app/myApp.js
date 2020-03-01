
        var myApp = angular.module("myApp", ["ngMaterial", "ui.router"]); 
 
		myApp.config(function($stateProvider, $urlRouterProvider, $mdIconProvider) {
	    
	    $urlRouterProvider.otherwise('/recipe');
	    
	    $stateProvider
	        
	        .state('recipe', {
	            url: '/recipe',
	            templateUrl: 'recipe.html',
  				controller: 'recipeController'
	        })   

		});


		// configurando o tema do angular material
		myApp.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('myTheme')
		    .primaryPalette('blue-grey')
		    .accentPalette('grey');
		});

		var url_base = "http://knisja.org/ta/lda/TASK5/api/";
		var key = "tywehjdsud73y7riwesdnsdhs9dhw9hewkdhsd";
		
		var url_base_front = "";
		//var url_base_front = "http://ligiano.web2415.uni5.net/hybrid-app/app/#!/";		