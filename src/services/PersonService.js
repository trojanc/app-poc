'use strict';
import {Person} from '../entities/Person';

export class PersonService{
    
    constructor(){
        this.people = {};
    }
    
    addPerson(name, surname){
        this.people[name] = new Person(name, surname);
    }
    
    
    getPerson(name){
        return this.people[name];
    }
    
}