/**
 * Created by Charl-PC on 2015-10-01.
 */
angular.module('appPoc')
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

    } ]);