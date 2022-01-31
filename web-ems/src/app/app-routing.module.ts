import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import {HomepageComponent} from './homepage/homepage.component';
import {IncidentdashboardComponent} from './incidentdashboard/incidentdashboard.component';
import {MissingpersondashboardComponent} from './Missingperson/missingpersondashboard/missingpersondashboard.component';
import { AddFormComponent} from './Missingperson/add-form/add-form.component';
import { VictimpatientdashboardComponent } from './victimpatientdashboard/victimpatientdashboard.component';
import {UpdateFormComponent} from './Missingperson/update-form/update-form.component';
import { UpdateComponent } from './Missingperson/update/update.component';
import { HealthstaffComponent } from './healthstaff/healthstaff.component';
import { ViewComponent } from './Missingperson/view/view.component';

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"incidentdashboard",component:IncidentdashboardComponent},
  {path:"missingpersondashboard",component:MissingpersondashboardComponent},
  {path: "addmissingpersonform",component:AddFormComponent},
  {path: "delete/:id",component:UpdateFormComponent},
  {path: "edit/:id",component:UpdateComponent},
  {path:"healthstaff",component:HealthstaffComponent},
  {path: "view/:id",component:ViewComponent},
  {path:"victimpatient",component:VictimpatientdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
