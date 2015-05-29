'use strict';

angular.module('app')
	.directive('widthHeight', function () {
    return {
	    restrict: 'AE',
	    replace: true,
	    link: function(scope, elem, attrs) {
	    	console.log(elem);
	    	console.log(elem[0].clientWidth);
	      elem[0].offsetHeight = elem[0].clientWidth;
	    }
	  };
	});