'use strict';

/**
 * Search Controller
 */
var PersonRestService = (BaseRestService) => {
   
   	return angular.extend({
		'getAll' : function() {
			return this._callService('GET', 'person');
		},
		'create' : function(person){
			return this._callService('POST', 'person', person);
		}
	}, BaseRestService);
   
};

PersonRestService.$inject = ["BaseRestService"];

export default PersonRestService;