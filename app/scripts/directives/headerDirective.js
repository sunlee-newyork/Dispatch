'use strict';

angular.module('app')
	.directive('header', function ($window) {
	  return {
	    scope: {
	      scroll: '=scrollPosition'
	    },
	    link: function(scope, element, attrs) {
	      var windowElement = angular.element($window);
	      var handler = function() {
	        scope.scroll = windowElement.scrollTop();
	      }
	      windowElement.on('scroll', scope.$apply.bind(scope, handler));
	      handler();
	    }
	  };
	});