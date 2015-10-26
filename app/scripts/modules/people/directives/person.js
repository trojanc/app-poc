'use strict';

/**
* Search Input
*/
var personWidget = () => {
    return {
    	restrict: 'E',
    	scope: {},
    	template: [
    	    '<h1>',
        	'Person Directive',
    	    '</h1>'
    	].join(''),

    	link(scope, el, attrs) {
  	        console.log("Got person widget!");
  	    
    	}
    };
};

personWidget.$inject = [];

export default personWidget;