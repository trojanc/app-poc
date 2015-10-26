'use strict';

/**
 * Search Controller
 */
var PersonRestService = (RestServiceBase) => {
   
   	return angular.extend({
		'getAll' : function() {
			return this._callService('GET', 'person');
		}
	}, RestServiceBase);
   
};

PersonRestService.$inject = ["RestServiceBase"];

export default PersonRestService;