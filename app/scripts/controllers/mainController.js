'use strict';

angular.module('app')
	.controller('mainController', function ($scope) {

		$scope.sections = {

			intro: {
				name: 'intro',
				url: '/app/views/body/intro.html'
			},
			product: {
				name: 'product',
				url: '/app/views/body/product.html'
			},
			features: {
				name: 'features',
				url: '/app/views/body/features.html'
			},
			contact: {
				name: 'contact',
				url: '/app/views/body/contact.html'
			}

		}

	});