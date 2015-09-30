'use strict';
var Person = require('../entities/Person');

function PersonService(){
    console.log("Creating new PersonService");
    this.people = {};
}


PersonService.prototype.addPerson = function (name, surname){
    var person = new Person(name, surname)
    this.people[name] = person;
    return person;
}
    
    
PersonService.prototype.getPerson = function(name){
    return this.people[name] || new Person();
}

PersonService.prototype.getAll = function(name){
    return this.people;
}

module.exports = new PersonService();