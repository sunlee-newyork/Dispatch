'use strict';

angular.module('app')
	.directive('timer', function ($timeout) {
    return {
	    restrict: 'AE',
	    replace: true,
	    link: function(scope, elem, attrs) {
	    	$timeout(function() {
					elem.css('display', 'block');
				}, 3000);
	    }
	  };
	});