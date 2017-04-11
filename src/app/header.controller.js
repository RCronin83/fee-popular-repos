(function() {
    'use strict';

    angular.module('gh')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['GithubService'];
    /**
     * gets and saves our authentication token
     * @param {function} GithubService service which connects to github api
     */
    function HeaderController(GithubService) {
        let vm = this;
        vm.token = GithubService.getUserToken() || '';

        vm.saveToken = function saveToken() {
            GithubService.setUserToken(vm.token);
        };
    }
})();
