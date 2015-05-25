'use strict';

angular.module('app')
	.directive('timer', function ($interval) {
    return {
	    restrict: 'AE',
	    replace: true,
	    link: function(scope, elem, attrs) {
	    	$interval(function() {
					elem.css('display', 'block');
				}, 2000, 0);
	    }
	  };
	});