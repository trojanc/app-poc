'use strict';
import {PersonRestService} from './PersonRestService';

export class RestServices{
    
    constructor(app){
        console.log("Adding rest services");
        new PersonRestService(app);
    }
    
}