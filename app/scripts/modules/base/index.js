import angular from 'angular';

import BaseRestService from './factories/BaseRestService';
import HomeCtrl from './controllers/HomeCtrl';

var base = 'base';

var factories = 'base.factories';
var controllers = 'base.controllers';

/**
 * Factories
 */
angular.module(factories, [])
  .factory('BaseRestService', BaseRestService);
  
/**
 * Controllers
 */
angular.module(controllers, [])
  .controller('HomeCtrl', HomeCtrl);

/**
 * Combine everything for the people module
 */
angular.module(base, [
    factories,
    controllers
]);

export default base;
