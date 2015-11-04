// Angular dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

// User created dependencies
import people from './modules/people';
import base from './modules/base';

var appPoc = 'appPoc';
var appConfig = ($stateProvider, $urlRouterProvider, $mdThemingProvider) => {

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
    
     $mdThemingProvider.theme('default').primaryPalette('light-green');
};

appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider'];

angular.module(appPoc, [
    uiRouter,
    ngAnimate,
    ngSanitize,
    ngAria,
    ngMaterial,
    ngResource,
    base,
    people
]).config(appConfig);

export default appPoc;