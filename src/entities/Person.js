'use strict';

export default class Person{
    
    contructor(_id, _name, _surname){
        this.id=_id;
        this.name=_name;
        this.surname=_surname;
    }
    
    toString(){
        return this.name + " " + this.surname;
    }
}
