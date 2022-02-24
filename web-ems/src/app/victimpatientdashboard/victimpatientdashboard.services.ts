import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {victimpatient} from './victimpatientdashboard.model'
import { Observable } from 'rxjs'

@Injectable({ providedIn:"root"})
export class  PatientVictimService {


  constructor(private http: HttpClient ){ }

  listIncidents(){
    return this.http.get <victimpatient[]> ("http://localhost:3000/api/Patientvictiminformation/list")

  }
  deleteUser(id:any){
    return this.http.delete("http://localhost:3000/api/Patientvictiminformation/" + id)
  }

}
