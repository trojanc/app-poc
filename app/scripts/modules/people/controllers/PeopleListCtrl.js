'use strict';

/**
 * Search Controller
 */
var PeopleListCtrl = ($scope, Person) => {
   	
   	$scope.people = Person.query(function(){
		console.log("Got people");
	});
};

PeopleListCtrl.$inject = ["$scope", "Person"];

export default PeopleListCtrl;