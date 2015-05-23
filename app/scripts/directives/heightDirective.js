'use strict';

angular.module('app')
	.directive('fullHeight', function ($window) {
    return {
	    restrict: 'AE',
	    replace: true,
	    link: function(scope, elem, attrs) {
	    	var fullHeight = window.innerHeight;
	    	console.log(fullHeight);
	      elem.css('height', fullHeight + 'px');
	    }
	  };
	});