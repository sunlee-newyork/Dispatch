'use strict';

angular.module('app')
	.directive('sliderWrapperWidth', function () {
    return {
	    restrict: 'AE',
	    replace: true,
	    link: function(scope, elem, attrs) {
	    	console.log(elem);  // angular.element instance
				console.log(elem.children().length);
	    }
	  };
	});