import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {incident} from './incidentdashboard.model'
import { Observable } from 'rxjs'

@Injectable({ providedIn:"root"})
export class  IncidentService {


  constructor(private http: HttpClient ){ }

  listIncidents(){
    return this.http.get <incident[]> ("http://localhost:3000/api/incidentdashboard/list" )

  }
  deleteUser(id:any){
    return this.http.delete("http://localhost:3000/api/incidentdashboard/" + id)
  }


}
