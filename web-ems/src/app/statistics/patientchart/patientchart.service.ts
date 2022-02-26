import { victimpatient } from './../../victimpatientdashboard/victimpatientdashboard.model';
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

import { Observable } from 'rxjs'

@Injectable({ providedIn:"root"})
export class  PatientVictimChartService {


  constructor(private http: HttpClient ){ }

  victimChart(){
    return this.http.get <victimpatient[]> ("http://localhost:3000/api/Patientvictiminformation/victimchart")

  }


}
