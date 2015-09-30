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
};

PersonRestService.prototype.getAll = function(req, res){
    var people = PersonService.getAll();
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(people));
};

PersonRestService.prototype.addPerson = function(req, res){
    console.log("Add person");
    
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
    app.get('/rest/person/:name', this.findPerson);
    app.get('/rest/person', this.getAll);
    app.post('/rest/person', this.addPerson);
}

module.exports = new PersonRestService();