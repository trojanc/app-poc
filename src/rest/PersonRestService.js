'use strict';

import {PersonService} from '../services/PersonService';

export class PersonRestService{
    
    constructor(app){
        console.log("Adding Person rest services");
        this.addRoutes(app);
    }
    
    findPerson(req, res){
        console.log("need to find person");
    }
    
    /**
     * Add the routes to the app
     **/
    addRoutes(app){
        app.get('/person', this.findPerson);
    }
    
}