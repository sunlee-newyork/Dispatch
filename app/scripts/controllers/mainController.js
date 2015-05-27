'use strict';

angular.module('app')
	.controller('mainController', function ($scope, $document, $window) {

		$scope.scroll = 0;

		$scope.contactForm = {
			email: null,
			number: null,
			message: null
		}

	});