'use strict';
import {Person} from '../entities/Person';

export class PersonService{
    
    constructor(){
        
    }
    
    
    getPerson(id){
        return new Person();
    }
    
}