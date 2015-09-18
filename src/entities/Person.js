'use strict';
export class Person{
    
    constructor(name="uknown", surname="uknown"){
        this.name=name;
        this.surname=surname;
    }
    
    toString(){
        return this.name + " " + this.surname;
    }
    
    
}