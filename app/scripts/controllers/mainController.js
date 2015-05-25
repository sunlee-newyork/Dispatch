'use strict';

angular.module('app')
	.controller('mainController', function ($scope, $document, $window) {

		$scope.scroll = 0;

		// $scope.$watch(function () {
		// 	return $window.innerWidth;
		// }, function (value) {
		// 	console.log(value);
		// 	$scope.windowWidth = value;
		// });

	});