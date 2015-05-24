'use strict';

angular.module('app')
	.controller('headerController', function ($scope, $document) {

		$scope.scrollUp = function () {
			$document.scrollTopAnimated(0).then(function() {
        console && console.log('You just scrolled to the top!');
      }); 
		}

	});