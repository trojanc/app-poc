'use strict';

/**
 * Search Controller
 */
var Person = ($resource) => {
   	return $resource('/rest/person/:id',{ id: '@id' });
};

Person.$inject = ["$resource"];

export default Person;