//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import {MatTableModule } from '@angular/material'
import {MatFormFieldModule} from '@angular/material/form-field';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';

//services
import {StudentService} from './services/studentService';
import { environment } from 'src/environments/environment';
import {variablesGlobales} from './services/variablesGlobales';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [StudentService, variablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
