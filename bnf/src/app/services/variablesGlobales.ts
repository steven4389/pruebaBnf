import { Injectable } from '@angular/core';


@Injectable()
export class variablesGlobales{
    public grades:Array<number>
    public Name=""
   
    constructor(){}

    getName(){
        let data = this.Name
        this.Name=null
        return data
    }

    getGrades(){
        let data = this.grades
        this.grades=null
        return data
    }

}