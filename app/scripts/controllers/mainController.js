'use strict';

angular.module('app')
	.controller('mainController', function ($scope, $document) {

		$scope.scroll = 0;

		$scope.sections = [

			{
				position: 1,
				name: 'intro',
				url: '/app/views/body/intro.html'
			},
			{
				position: 2,
				name: 'product',
				url: '/app/views/body/product.html'
			},
			{
				position: 3,
				name: 'features',
				url: '/app/views/body/features.html'
			},
			{
				position: 4,
				name: 'contact',
				url: '/app/views/body/contact.html'
			}

		]

	});