/**
 * Movie Search
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';



import {
    services,
    controllers,
    directives,
    config
} from './app.config';

import people from './modules/people';
import base from './modules/base';

var movieSearch = 'movieSearch';
var appConfig = ($stateProvider, $urlRouterProvider) => {

    $stateProvider
        /**
         * Search a Movie
         */
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        });

    $urlRouterProvider.otherwise('/');
};

appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module(movieSearch, [
    uiRouter,
    ngAnimate,
    ngSanitize,
    ngAria,
    ngMaterial,
    ngResource,
    config,
    services,
    controllers,
    directives,
    base,
    people
]).config(appConfig);

export default movieSearch;