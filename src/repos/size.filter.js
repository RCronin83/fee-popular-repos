(function() {
  'use strict';
  angular.module('gh')
  .filter('sizeFilter', sizeFilter);

  function sizeFilter(){
    /**
     * converts to filesize from kb to mb
     * @param  {Number} filesize kb file size
     * @return {String}          the file size converted to mb
     */
    return function doSizeFilter(filesize){
      return (filesize/1000) + 'MB';
    };
  }
}());
