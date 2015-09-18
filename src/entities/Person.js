'use strict';

function Person(){
    this.name="uknown";
    this.surname="uknown";
}

Person.prototype.toString = function(){
    return this.name + " " + this.surname;
}
    
module.exports = Person;