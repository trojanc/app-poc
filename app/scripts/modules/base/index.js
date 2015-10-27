import angular from 'angular';

// Import services
import BaseRestService from './factories/BaseRestService';

// Import Controllers
import HomeCtrl from './controllers/HomeCtrl';

// Import Directives
import AppMenu from './directives/AppMenu';

var base = 'base';
var factories = 'base.factories';
var controllers = 'base.controllers';
var directives = 'base.directives';

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
 * Directives
 */
angular.module(directives, [])
  .directive('appMenu', AppMenu);

/**
 * Combine everything for the people module
 */
angular.module(base, [
    factories,
    controllers,
    directives
]);

export default base;
