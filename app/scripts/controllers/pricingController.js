'use strict';

angular.module('app')
	.controller('pricingController', function ($scope) {

		$scope.selections = {
			numLocations: 100,
			numDisplays: 4,			
			corporate: 0,
			franchise: 150,
			community: 0,
			displays: 1000,
			design: 300,
			installation: 600,
			backup: 0,
			wall: 0,
			ceiling: 0
		}

		$scope.quote = {
			perLocation: {
				oneTime: 0,
				monthly: 0
			},
			allLocations: {
				oneTime: 0,
				monthly: 0
			}
		}

		$scope.$watchCollection('selections', function (newVal, oldVal) {
			console.log("watchCollection called.");
			console.log("newVal: ", newVal);
			$scope.quote.perLocation.oneTime = (newVal.numDisplays * newVal.displays) + newVal.design + newVal.installation + newVal.backup + newVal.wall + newVal.ceiling;
			$scope.quote.allLocations.oneTime = $scope.quote.perLocation.oneTime * newVal.numLocations;
			$scope.quote.perLocation.monthly = newVal.corporate + newVal.franchise + newVal.community;
			$scope.quote.allLocations.monthly = $scope.quote.perLocation.monthly * newVal.numLocations;
		});

	});