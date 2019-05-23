import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {students} from '../../models/students';
import {StudentService} from '../../services/studentService'
import {FirebaseService} from '../../services/firebaseService'
import{Router, ActivatedRoute} from '@angular/router';
import {variablesGlobales} from '../../services/variablesGlobales'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    list: students[]=[{
     _id:"", 
     ID:"",
    active:false, 
    grades: null, 
    Name:"", 
    Gender:"", 
    Class:"", 
    Club:"", 
    Persona:"", 
    Crush:"", 
    BreastSize:"", 
    Strength:"", 
    Hairstyle:"", 
    Color:"", 
    Stockings:"", 
    Accessory:"", 
    ScheduleTime:"", 
    ScheduleDestination:"", 
    ScheduleAction:"",
    __v:null}];

  displayedColumns: string[] = ['Name', 'grades', 'Gender', 'Class', 'Club', 'Persona', 'Crush', 'BreastSize', 'Strength', 'Hairstyle', 
                                'Stockings', 'Accessory', 'ScheduleTime', 'ScheduleDestination', 'ScheduleAction', 'Average'];
  dataSource :MatTableDataSource<any>;

  constructor(private _StudentService:StudentService,
              private _FirebaseService:FirebaseService,
              private router: Router,
              private _variablesGlobales:variablesGlobales) { }

  ngOnInit() {
    this.getStudents()
    //this.getStudentsFirebase()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    debugger
  }

  detalles(elemento, name){
    console.log(elemento)
    this._variablesGlobales.grades=elemento
    this._variablesGlobales.Name=name
    this.router.navigate(['/detalles']);
  }

  getStudents(){
    this._StudentService.getStudents().subscribe(
      response=>{debugger
          console.log(response)

          //response.Students.filter(x=>x.active)
          let dataFiltered = response.Students.filter(x => x.active)

           let vector=[]
           console.log(vector)
           dataFiltered.forEach((element, index) => {
           
             let objeto={Name:"", grades:null, Gender:"", Class:"", Club:"", Persona:"", Crush:"", BreastSize:"", Strength:"", Hairstyle:"", 
                         Stockings:"", Accessory:"", ScheduleTime:"", ScheduleDestination:"", ScheduleAction:"", Average:null, Color:""}
            
            
              console.log(element.active)
              objeto.Name= element.Name
              objeto.grades=element.grades
              objeto.Gender= element.Gender
              objeto.Class= element.Class
              objeto.Club= element.Club
              objeto.Persona= element.Persona
              objeto.Crush= element.Crush
              objeto.BreastSize= element.BreastSize
              objeto.Strength= element.Strength
              objeto.Hairstyle= element.Hairstyle
              objeto.Stockings= element.Stockings
              objeto.Accessory= element.Accessory
              objeto.ScheduleTime= element.ScheduleTime
              objeto.ScheduleDestination= element.ScheduleDestination
              objeto.ScheduleAction= element.ScheduleAction
              let sum = element.grades.reduce((previous, current) => current += previous);
              let avg = sum / element.grades.length;
              objeto.Average= avg.toFixed(2)
              objeto.Color= element.Color
              
            
            
            vector[index]=objeto

            // if(vector[index].Name==""){
            //     console.log("si esta vacio")
            //     vector.splice(index,1)
            // }
            
          });

         
          
          this.dataSource = new MatTableDataSource(vector);
           
           console.log(vector)
    });
  }

  getStudentsFirebase(){
    this._FirebaseService.getStudents().subscribe(
      (response)=>{
          console.log(response)
          
          let vector=[]
          this.list=response
          debugger
          //this.list.filter(x=>x.active)
          let dataFiltered = this.list.filter(x => x.active)
          console.log(dataFiltered)
          dataFiltered.forEach((element, index) => {
            console.log("este es el elemento")
            console.log(element)
             let objeto={Name:"", grades:null, Gender:"", Class:"", Club:"", Persona:"", Crush:"", BreastSize:"", Strength:"", Hairstyle:"", 
                         Stockings:"", Accessory:"", ScheduleTime:"", ScheduleDestination:"", ScheduleAction:"", Average:"", Color:""}
            debugger
            
              objeto.Name= element.Name
              objeto.grades=element.grades
              objeto.Gender= element.Gender
              objeto.Class= element.Class
              objeto.Club= element.Club
              objeto.Persona= element.Persona
              objeto.Crush= element.Crush
              objeto.BreastSize= element.BreastSize
              objeto.Strength= element.Strength
              objeto.Hairstyle= element.Hairstyle
              objeto.Stockings= element.Stockings
              objeto.Accessory= element.Accessory
              objeto.ScheduleTime= element.ScheduleTime
              objeto.ScheduleDestination= element.ScheduleDestination
              objeto.ScheduleAction= element.ScheduleAction
              let sum = element.grades.reduce((previous, current) => current += previous);
              let avg = sum / element.grades.length;
              objeto.Average= avg.toFixed(2)
              objeto.Color= element.Color

      
            vector[index]=objeto
          })

      
          this.dataSource = new MatTableDataSource(vector);


    });
  }

  calculateStyles(color){debugger
    return {
      color
    };
  }

}
