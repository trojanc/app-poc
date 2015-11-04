"use strict";

var PersonConfig = ($stateProvider, $urlRouterProvider) => {

    $stateProvider
        /**
         * Add a person
         */
        .state('person', {
            url: '/person',
            templateUrl: 'views/people/add.html',
            controller: 'PeopleAddCtrl'
        })
        .state('people', {
            url: '/people',
            templateUrl: 'views/people/list.html',
            controller: 'PeopleListCtrl'
        });
};

PersonConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default PersonConfig;