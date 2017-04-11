(function() {
  'use strict';

  angular.module('gh')
    .directive('gitRepo', gitRepo);

    function gitRepo(){
      let $ = angular.element;

      return{
        templateUrl: 'repos/single-repo.template.html',
        restrict: 'E',
        link: setupCollapse,
        transclude; true,
        scope:{
          repo: '='
        }
      };
      function setupCollapse(scope, element){
        $(element)
          .find('header')
          .on('click', function hidePanelBody(){
            $(element).find('section').toggleClass('hidden');
          });
      }
    }
}());
