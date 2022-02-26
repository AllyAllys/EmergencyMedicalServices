import { incident } from './../../incidentdashboard/incidentdashboard.model';
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from 'rxjs'

@Injectable({ providedIn:"root"})
export class  IncidentChartService {


  constructor(private http: HttpClient ){ }

  Incidentchart(){
    return this.http.get <incident[]> ("http://localhost:3000/api/incidentdashboard/incidentchart" )

  }



}
