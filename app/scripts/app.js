'use strict';

angular.module('app', [
		'ngSanitize',
		'ngAnimate',
		'ngRoute',
		'duScroll',
		'snap'
	])

  .value('duScrollDuration', 1000)

	.config(function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: '/app/views/main/main.html',
				controller: 'mainController'
			})

			.otherwise({
				redirectTo: '/'
			});
	})

	.config(function (snapRemoteProvider) {
		snapRemoteProvider.globalOptions = { 
    	// resistance: 0.8,
    	// flickThreshold: 30,
    	minPosition: -200,
    	disable: 'left', 
    	touchToDrag: false
    };
	})

	.controller('globalController', function ($scope) {
		$scope.sections = [
			{
				position: 1,
				name: 'intro',
				url: '/app/views/body/intro.html'
			},
			{
				position: 2,
				name: 'product',
				url: '/app/views/body/product.html'
			},
			{
				position: 3,
				name: 'features',
				url: '/app/views/body/features.html'
			},
			{
				position: 4,
				name: 'contact',
				url: '/app/views/body/contact.html'
			}
		];
	});

	// .run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
 //    var original = $location.path;
 //    $location.path = function (path, reload) {
 //      if (reload === false) {
 //        var lastRoute = $route.current;
 //        var un = $rootScope.$on('$locationChangeSuccess', function () {
 //          $route.current = lastRoute;
 //          un();
 //        });
 //      }
 //      return original.apply($location, [path]);
 //    };
	// }]);	