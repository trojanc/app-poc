"use strict";

var PersonConfig = ($stateProvider, $urlRouterProvider) => {

    $stateProvider
        /**
         * Add a person
         */
        .state('person', {
            url: '/person',
            templateUrl: 'views/add.html',
            controller: 'PeopleAddCtrl'
        })
        .state('people', {
            url: '/people',
            templateUrl: 'views/list.html',
            controller: 'PeopleListCtrl'
        });

    $urlRouterProvider.otherwise('/');
};

PersonConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default PersonConfig;