// JavaScript File
;(function(){
    angular.module("peopleApp", [])
    .factory("RestServiceBase", [ "$http", "$q", function($http, $q) {
		return {
			'_callService' : function(method, url, sendingData, params) {
				var restPath;
				var contextPath = "/"
				if (contextPath === "/" || contextPath === "") {
					restPath = "/rest/";
				} else {
					restPath = contextPath + "/rest/";
				}
				var deferred = $q.defer();

				// TODO implement CSRF
				var token = null; // $("meta[name='_csrf']").attr("content");
				var header = null; // $("meta[name='_csrf_header']").attr("content");
				var headers = {};

				if (header != null && header != "") {
					headers[header] = token;
				}

				$http({
					'method' : method,
					'url' : restPath + url,
					'data' : sendingData,
					'params' : params,
					'headers' : headers
				}).success(function(data, status, headers, config) {
					deferred.resolve(data == "" ? null : data);
				}).error(function(data, status, headers, config) {
					deferred.reject(data);
				});
				return deferred.promise;
			},
			'_checkNullArray' : function(expectedArray){
				if(expectedArray == null){
					expectedArray = [];
				}
				return expectedArray;
			}
		}

	} ])
	/**
	 * Rest service client for the TypeRestService
	 */
	.factory("PersonRestService", [ "RestServiceBase", function(RestServiceBase) {
		return angular.extend({
			'getAll' : function() {
				return this._callService('GET', 'person');

			}
		}, RestServiceBase);

	} ])
    .controller("ListPeopleController",["$scope", "PersonRestService", function($scope, PersonRestService){
        PersonRestService.getAll().then(function(people){
            $scope.people = people;
        });
    }])
})();