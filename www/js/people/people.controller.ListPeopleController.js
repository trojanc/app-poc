angular.module("appPoc")
.controller("ListPeopleController",["$scope", "PersonRestService", function($scope, PersonRestService){
	PersonRestService.getAll().then(function(people){
		$scope.people = people;
	});
}]);