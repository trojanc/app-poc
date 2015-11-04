'use strict';
import Person from '../entities/Person';

class PersonService{
    constructor(){
        console.log("Creating new PersonService");
        this.people = [];
        this.nextId = 0;
    }
    
    
    addPerson(name, surname){
        var person = new Person(this.nextId++, name, surname)
        this.people.push(person);
        return person;
    }
    
    getPerson (id){
        for(var idx=0 ; idx<this.people.length ; idx++){
            if(this.people[idx].id == id){
                return this.people[idx];
            }
        }
        return new Person();
    }
    
    deletePerson(id){
        for(var idx=0 ; idx<this.people.length ; idx++){
            if(this.people[idx].id == id){
                this.people.splice(idx, 1);
            }
        }
    }
    
    getAll(){
        return this.people;
    }
}

export default new PersonService();