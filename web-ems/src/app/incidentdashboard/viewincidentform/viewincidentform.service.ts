import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn:"root"})
export class  ViewincidentService {
  constructor(private http: HttpClient ){ }

  viewincidentForm(id:any)
 {
  return this.http.get("http://localhost:3000/api/incidentdashboard/" + id)


  }

}
