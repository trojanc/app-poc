/**
 * Rest service client for the TypeRestService
 */
angular.module('appPoc').factory("PersonRestService", [ "RestServiceBase", function(RestServiceBase) {
	return angular.extend({
		'getAll' : function() {
			return this._callService('GET', 'person');
		}
	}, RestServiceBase);

} ]);