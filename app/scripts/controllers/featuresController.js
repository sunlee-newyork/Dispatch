'use strict';

angular.module('app')
	.controller('featuresController', function ($scope, $timeout) {

		$scope.featureActive = '1';
		$scope.featuresLength = '8';
		$scope.sliderInterval = '4000';

		function getRandomInt (max) {
			return Math.floor(Math.random() * max);
		}

		function TryParseInt (str, defaultValue) {     
			var retValue = defaultValue;     
			if (str!=null) {         
				if (str.length>0) {             
					if (!isNaN(str)) {                 
						retValue = parseInt(str);             
					}         
				}    
			}     
			return retValue; 
		}

		function slide() {
			if ($scope.featureActive != $scope.featuresLength) {
				$scope.featureActive = String(parseInt($scope.featureActive) + 1);	
			} else {
				$scope.featureActive = 1;
			}
			$timeout(slide, $scope.sliderInterval);
		}	
		$timeout(slide, $scope.sliderInterval);

	});