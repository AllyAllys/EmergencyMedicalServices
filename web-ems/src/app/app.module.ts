import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { IncidentdashboardComponent } from './incidentdashboard/incidentdashboard.component';
import { MissingpersondashboardComponent } from './Missingperson/missingpersondashboard/missingpersondashboard.component';
import { HealthstafftrackingdashboardComponent } from './healthstafftrackingdashboard/healthstafftrackingdashboard.component';
import { VictimpatientdashboardComponent } from './victimpatientdashboard/victimpatientdashboard.component';
import { AddFormComponent } from './Missingperson/add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';


import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { UpdateFormComponent } from './Missingperson/update-form/update-form.component';
import { UpdateComponent } from './Missingperson/update/update.component';
import { HealthstaffComponent } from './healthstaff/healthstaff.component';
import { HealthstaffPostListComponent } from './healthstaff-post-list/healthstaff-post-list.component';
import { ViewComponent } from './Missingperson/view/view.component';
import { AddVictimpatientComponent } from './victimpatientdashboard/add-victimpatient/add-victimpatient.component';
import { UpdateVictimpatientComponent } from './victimpatientdashboard/update-victimpatient/update-victimpatient.component';
import { AddformComponent } from './victimpatientdashboard/addform/addform.component';
import { ViewformComponent } from './victimpatientdashboard/viewform/viewform.component';
import { ViewPatientvictimComponent } from './victimpatientdashboard/view-patientvictim/view-patientvictim.component';
import { OnsiteComponent } from './victimpatientdashboard/onsite/onsite.component';
import { OnsiteUPDATEComponent } from './victimpatientdashboard/onsite-update/onsite-update.component';
import { AddincidentformComponent } from './incidentdashboard/addincidentform/addincidentform.component';
import { ViewincidentformComponent } from './incidentdashboard/viewincidentform/viewincidentform.component';
import { UpdateincidentformComponent } from './incidentdashboard/updateincidentform/updateincidentform.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomepageComponent,
    IncidentdashboardComponent,
    MissingpersondashboardComponent,
    HealthstafftrackingdashboardComponent,
    VictimpatientdashboardComponent,
    AddFormComponent,
    UpdateFormComponent,
    UpdateComponent,
    HealthstaffComponent,
    HealthstaffPostListComponent,
    ViewComponent,
    AddVictimpatientComponent,
    UpdateVictimpatientComponent,
    AddformComponent,
    ViewformComponent,
    ViewPatientvictimComponent,
    OnsiteComponent,
    OnsiteUPDATEComponent,
    AddincidentformComponent,
    ViewincidentformComponent,
    UpdateincidentformComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSnackBarModule,
    MatPaginatorModule,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:2000}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
