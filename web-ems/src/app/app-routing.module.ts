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
import {AddVictimpatientComponent} from './victimpatientdashboard/add-victimpatient/add-victimpatient.component'
import {AddformComponent} from './victimpatientdashboard/addform/addform.component'
import {OnsiteComponent } from './victimpatientdashboard/onsite/onsite.component'
import {ViewPatientvictimComponent} from './victimpatientdashboard/view-patientvictim/view-patientvictim.component'
import {ViewformComponent } from './victimpatientdashboard/viewform/viewform.component'
import {UpdateVictimpatientComponent} from './victimpatientdashboard/update-victimpatient/update-victimpatient.component'
import {OnsiteUPDATEComponent} from './victimpatientdashboard/onsite-update/onsite-update.component'
import {AddincidentformComponent} from './incidentdashboard/addincidentform/addincidentform.component'
import {ViewincidentformComponent } from './incidentdashboard/viewincidentform/viewincidentform.component'
import {UpdateincidentformComponent} from './incidentdashboard/updateincidentform/updateincidentform.component'
import {HealthstafftrackingdashboardComponent} from './healthstafftrackingdashboard/healthstafftrackingdashboard.component'
import {ViewHealthComponent} from './healthstafftrackingdashboard/view-health/view-health.component'
import {UpdateHealthComponent} from './healthstafftrackingdashboard/update-health/update-health.component'
import {UsersComponent} from './users/users.component'
import{ViewuserComponent} from './viewuser/viewuser.component'
import {UpdateuserComponent} from './updateuser/updateuser.component'
import{CreateuserComponent} from './createuser/createuser.component'
import { ChatComponent } from './chat/chat.component';
const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"incidentdashboard",component:IncidentdashboardComponent},
  {path:"missingpersondashboard",component:MissingpersondashboardComponent},
  {path: "addmissingpersonform",component:AddFormComponent},
  {path: "delete/:id",component:UpdateFormComponent},
  {path: "edit/:id",component:UpdateComponent},
  {path: "view/:id",component:ViewComponent},
  {path:"victimpatient",component:VictimpatientdashboardComponent},
  {path:"addvictimpatientform",component:AddVictimpatientComponent},
  {path:"addhospitalform",component:AddformComponent},
  {path:"onsitedashboard",component:OnsiteComponent},
  {path:"viewpatientform/:id",component:ViewPatientvictimComponent},
  {path:"viewonsiteform/:id",component:ViewformComponent},
  {path:"updatepatientform/:id",component:UpdateVictimpatientComponent},
  {path:"onsiteupdate/:id",component:OnsiteUPDATEComponent},
  {path:"addincidentform",component:AddincidentformComponent},
  {path:"viewincidentform/:id", component:ViewincidentformComponent},
  {path:"update/:id",component:UpdateincidentformComponent},
  {path:"healthtrackingdashboard",component:HealthstafftrackingdashboardComponent},
  {path:"viewhealthtrackingform/:id",component:ViewHealthComponent},
  {path:"addhealthform",component:HealthstaffComponent},
  {path:"updatehealthfrom/:id",component:UpdateHealthComponent},
  {path:"users",component:UsersComponent},
  {path:"ViewuserComponent/:id",component:ViewuserComponent},
  {path:"updateusersform/:id",component:UpdateuserComponent},
  {path:"create",component:CreateuserComponent},
  {path:"chat",component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
