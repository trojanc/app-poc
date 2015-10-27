import angular from 'angular';

// Controllers
import PersonCtrl from './controllers/person';
import PeopleAddCtrl from './controllers/PeopleAddCtrl';
import PeopleListCtrl from './controllers/PeopleListCtrl';

// Directives
import personWidget from './directives/person';

// Factories
import PersonRestService from './factories/PersonRestService';
import Person from './factories/Person';

// Config
import PersonConfig from './routes';


var people = 'people';
var controllers = 'people.controllers';
var directives = 'people.directives';
var factories = 'people.factories';

/**
 * Controllers
 */
angular.module(controllers, [])
  .controller('PersonCtrl', PersonCtrl)
  .controller('PeopleAddCtrl', PeopleAddCtrl)
  .controller('PeopleListCtrl', PeopleListCtrl);

/**
 * Directives
 */
angular.module(directives, [])
  .directive('personWidget', personWidget);
  
/**
 * Factories
 */
angular.module(factories, [])
  .factory('PersonRestService', PersonRestService)
  .factory('Person', Person);
  
  
/**
 * Combine everything for the people module
 */
angular.module(people, [
    controllers,
    directives,
    factories
]).config(PersonConfig);


export default people;
