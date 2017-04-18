(function() {
  'use strict';

  angular.module('gh')
  .directive('gitRepo', gitRepo);
  /**
  * creates a custom directive
  * @return {object} options for our directive
  */
  function gitRepo(){
    let $ = angular.element;

    return{
      templateUrl: 'repos/gitRepo.template.html',
      restrict: 'E',
      link: setupCollapse,
      scope:{
        repo: '='

      }
    };
    /**
    * allows for collapsable panels
    * @param  {Object}           scope   properties of our directive
    * @param  {HTMLInputElement} element The element which we apply the function to
    * @return {Void}         [description]
    */
    function setupCollapse(scope, element){
      $(element)
      .find('header')
      .on('click', function hidePanelBody(){
        $(element).find('section').toggleClass('hidden');
      });
    }
  }
}());
