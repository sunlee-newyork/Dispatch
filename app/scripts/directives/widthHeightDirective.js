'use strict';

angular.module('app')
	.directive('widthHeight', function () {
    return {
	    restrict: 'AE',
	    replace: true,
	    link: function(scope, elem, attrs) {
	      elem.css('height', elem[0].clientWidth + 'px');
	    }
	  };
	});