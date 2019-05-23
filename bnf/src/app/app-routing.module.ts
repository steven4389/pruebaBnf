import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component'
import {DetallesComponent} from '../app/components/detalles/detalles.component'

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'detalles', component: DetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
