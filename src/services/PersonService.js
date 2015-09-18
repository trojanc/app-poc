'use strict';
import {Person} from '../entities/Person';

class PersonService{
    
    constructor(){
        console.log("Creating new PersonService");
        this.people = {};
    }
    
    addPerson(name, surname){
        this.people[name] = new Person(name, surname);
    }
    
    
    getPerson(name){
        return this.people[name];
    }
    
}
var instance = new PersonService()
export default instance;