(function() {
  'use strict';
  angular.module('gh')
    .filter('sizeFilter', sizeFilter);
    /**
     * transforms kilobytes to megabytes
     * @return {String} file size in megabytes
     */
  function sizeFilter(){
    return function doSizeFilter(filesize){
      return (filesize/1000) + 'MB';
    };
  }
}());
