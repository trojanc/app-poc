import angular from 'angular';

import PersonCtrl from './controllers/person';
import personWidget from './directives/person';

var people = 'people';

var controllers = 'people.controllers';
var directives = 'people.directives';

/**
 * Controllers
 */
angular.module(controllers, [])
  .controller('PersonCtrl', PersonCtrl);

/**
 * Directives
 */
angular.module(directives, [])
  .directive('personWidget', personWidget);
/**
 * Combine everything for the people module
 */
angular.module(people, [
    controllers,
    directives
]);


export default people;
