(function() {
  'use strict';
  angular.module('gh')
  .filter('popularityOrdering', popularityOrdering);
  /**
  * sorts our repos according to popularity
  * @return {Array} sorted repos
  */
  function popularityOrdering(){
    /**
    * creates an array of repos
    * @param  {array} collection a collection of our repos
    * @return {array}            a copy of our collection of repos so we dont create an infinite loop
    */
    return function doPopularityOrdering(collection){
      let collectionCopy = [].concat(collection);
      if(!Array.isArray(collection)){
        return collectionCopy;
      }
      /**
      * sorts our array of repos according to popularity
      * @type {Number}
      */
      return collectionCopy.sort(function doPopularitySorting(a, b){
        return b.popularity - a.popularity;
      });

    };
  }
}());
