'use strict';
var PersonRestService = require('./PersonRestService');

function RestServices(){
    console.log("constructor RestServices");
}
    
RestServices.prototype.initialise = function(app){
    console.log("Initialising RestServices");
    PersonRestService.initialise(app);
}

module.exports = new RestServices();