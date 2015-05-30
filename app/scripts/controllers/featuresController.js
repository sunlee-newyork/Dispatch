'use strict';

angular.module('app')
	.controller('featuresController', function ($scope, $timeout) {

		$scope.featureActive = '1';
		$scope.sliderInterval = '5000';

		function getRandomInt(max){
			return Math.floor(Math.random() * max);
		}

		function TryParseInt(str, defaultValue){     
			var retValue = defaultValue;     
			if(str!=null){         
				if(str.length>0){             
					if (!isNaN(str)){                 
						retValue = parseInt(str);             
					}         
				}    
			}     
			return retValue; 
		}

		function slide() {
			switch($scope.featureActive){
				case "1":
					$scope.featureActive = "2";
					break;
				case "2":
					$scope.featureActive = "3";
					break;
				case "3":
					$scope.featureActive = "4";
					break;
				case "4":
					$scope.featureActive = "5";
					break;					
				case "5":
					$scope.featureActive = "6";
					break;
				case "6":
					$scope.featureActive = "7";
					break;
				case "7":
					$scope.featureActive = "8";
					break;
				case "8":
					$scope.featureActive = "1";
					break;
				default:
					$scope.featureActive = "1";
			}
			$timeout(slide, 1500 + getRandomInt(1000) + TryParseInt($scope.sliderInterval, 1000));	  	  
		}		
		$timeout(slide, 1500 + getRandomInt(1000) + TryParseInt($scope.sliderInterval, 1000));

	});