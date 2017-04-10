(function() {
  'use strict';

  angular.module('gh')
    .directive('gitRepo', gitRepo);

    function gitRepo(){
      return{
        templateUrl: 'repos/single-repo.template.html',
        restrict: 'E',
        scope:{
          repo: '='
        }
      };
    }
}());
