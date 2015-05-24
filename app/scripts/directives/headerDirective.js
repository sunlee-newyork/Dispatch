'use strict';

angular.module('app')
	.directive('headerPosition', function ($window) {
	  return {
	    scope: {
	      scroll: '=headerPosition'
	    },
	    link: function(scope, element, attrs) {
	      var windowEl = angular.element($window);
	      var handler = function() {
	        scope.scroll = document.body.scrollTop;
	      }
	      windowEl.on('scroll', scope.$apply.bind(scope, handler));
	      handler();
	    }
	  };
	});