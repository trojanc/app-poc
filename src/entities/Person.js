'use strict';

function Person(name, surname){
    this.name=name;
    this.surname=surname;
}

Person.prototype.toString = function(){
    return this.name + " " + this.surname;
}
    
module.exports = Person;