'use strict';
import {PersonRestService} from './PersonRestService';

class RestServices{
    
    constructor(){
        console.log("constructor RestServices");
        
    }
    
    initialise(app){
        console.log("Initialising RestServices");
        PersonRestService.initialise(app);
    }
    
}
var instance = new RestServices();
export default instance;