import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import {IncidentdashboardComponent} from './incidentdashboard/incidentdashboard.component';
//import {MissingpersonComponent} from './missingpersondashboard/missingpersondashboard.component';

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"incidentdashboard",component:IncidentdashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
