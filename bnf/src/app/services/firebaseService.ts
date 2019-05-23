import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { students } from '../models/students';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    studentsRef:AngularFirestoreCollection<students>;
    ultimoDia: Observable<students[]>;

  constructor(private afs: AngularFirestore) { }


  getStudents(){
    
    this.studentsRef = this.afs.collection('students');
    this.ultimoDia = this.studentsRef.valueChanges(); 
      
    return this.ultimoDia;
  }
}
