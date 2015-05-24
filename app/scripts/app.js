'use strict';

angular.module('app', [
		'ngSanitize',
		'ngAnimate',
		'ngRoute',
		'duScroll'
	])

  .value('duScrollDuration', 1000)

	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: '/app/views/main/main.html',
				controller: 'mainController'
			})

			.otherwise({
				redirectTo: '/'
			});
	}])

	.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
      if (reload === false) {
        var lastRoute = $route.current;
        var un = $rootScope.$on('$locationChangeSuccess', function () {
          $route.current = lastRoute;
          un();
        });
      }
      return original.apply($location, [path]);
    };
	}]);	