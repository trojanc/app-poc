'use strict';

var PersonService = require('../services/PersonService');

function PersonRestService(){
    console.log("constructor PersonRestService");
}

PersonRestService.prototype.initialise = function(app){
    console.log("Adding Person rest services");
    this.addRoutes(app);
}
    
PersonRestService.prototype.findPerson = function(req, res){
    var person = PersonService.getPerson();
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(person));
}

PersonRestService.prototype.addPerson = function(req, res){
    var name = req.body.name;
    var surname = req.body.surname;
    
    var person = PersonService.addPerson(name, surname);
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(person));
}

/**
 * Add the routes to the app
 **/
PersonRestService.prototype.addRoutes = function(app){
    app.get('/person', this.findPerson);
    app.post('/person', this.addPerson);
}

module.exports = new PersonRestService();