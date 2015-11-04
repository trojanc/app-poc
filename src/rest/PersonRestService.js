'use strict';

import PersonService from '../services/PersonService';

/**
 * The person rest service provides a rest service interface
 * to the PersonService
 */
class PersonRestService{
    
    constructor(){
        console.log("constructor PersonRestService");
    }
    
    initialise(app){
        console.log("Adding Person rest services");
        this.addRoutes(app);
    }
    
         
    getPerson(req, res){
        var person = PersonService.getPerson(req.params.id);
        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(person));
    }
    
    getAll(req, res){
        var people = PersonService.getAll();
        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(people));
    }
    
    addPerson(req, res){
        console.log("Add person");
        
        var name = req.body.name;
        var surname = req.body.surname;
        
        var person = PersonService.addPerson(name, surname);
        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(person));
    }
    
    
    deletePerson(req, res){
        console.log("Add person");
        
        var id = req.params.id;
        console.log("Deleting " + id);
        var person = PersonService.getPerson(id);
        PersonService.deletePerson(id);
        
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(person));
    }
    
    
    /**
     * Add the routes to the app
     **/
    addRoutes(app){
        app.get('/rest/person/:id', this.getPerson);
        app.get('/rest/person', this.getAll);
        app.post('/rest/person', this.addPerson);
        app.delete('/rest/person/:id', this.deletePerson);
    }

    
}

   
export default new PersonRestService();