'use strict';

/**
 * Search Controller
 */
var PeopleListCtrl = ($scope, PersonRestService) => {
   	
   	PersonRestService.getAll().then(function(people){
		$scope.people = people;
	});
};

PeopleListCtrl.$inject = ["$scope", "PersonRestService"];

export default PeopleListCtrl;