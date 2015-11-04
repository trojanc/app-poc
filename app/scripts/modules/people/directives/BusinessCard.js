'use strict';

/**
* Search Input
*/
var BusinessCard = (Person) => {
    return {
    	restrict: 'E',
    	replace: true,
    	template: [
    	    '<md-card class="business-card">',
            '  <md-card-content>',
            '    <h2 class="md-title">{{person.name}} {{person.surname}}</h2>',
            '  </md-card-content>',
            '  <div class="md-actions" layout="row" layout-align="end center">',
            '    <md-button ng-click="edit()">Edit</md-button>',
            '    <md-button ng-click="delete()">Delete</md-button>',
            '  </div>',
            '</md-card>'
    	].join(''),

    	link(scope, el, attrs) {
  	       
  	        scope.delete = function(){
  	            console.log("Delete: " + JSON.stringify(scope.person));
  	            scope.person.$delete(function(){
  	                console.log("Deleted! ");
  	            });
  	            
  	        }
  	        
  	        scope.edit = function(){
  	            console.log("edit: " + JSON.stringify(scope.person));
  	        }
    	}
    };
};

BusinessCard.$inject = ["Person"];

export default BusinessCard;