'use strict';

angular.module('app')
	.directive('widthHeight', function () {
    return {
	    restrict: 'AE',
	    replace: true,
	    link: function(scope, elem, attrs) {
	    	// console.log("Element width: ", elem[0].clientWidth);
	      elem.css('height', elem[0].clientWidth + 'px');
	    }
	  };
	});