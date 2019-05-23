import { Component, OnInit } from '@angular/core';
import {variablesGlobales} from '../../services/variablesGlobales'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  public grades=[]
  public Name=""

  constructor(private _variablesGlobales:variablesGlobales) { }

  ngOnInit() {
    this.grades=this._variablesGlobales.getGrades()
    this.Name=this._variablesGlobales.getName()
  }

}
