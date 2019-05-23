import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public url: string; 

  constructor(private _httpclient:HttpClient) { 
    this.url= Global.url;
  }

  getStudents():Observable<any>{debugger
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._httpclient.get(this.url+'students', {headers:headers});
   }
}
