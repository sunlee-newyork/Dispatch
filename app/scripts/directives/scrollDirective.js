'use strict';

angular.module('app')
  .directive('scrollTop', function ($document) {
    return {
      restrict: 'AE',
      replace: true,
      link: function(scope, elem) {
        elem.bind('click', function () {
          console.log($document);
          angular.element(document.body).animate({scrollTop: 0}, "slow");

          // $document.scrollTopAnimated(400).then(function() {
          //   console && console.log('You just scrolled to the top!');
          // });  
        }); 

      }
    };
  });