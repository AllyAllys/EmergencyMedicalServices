import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {missingperson} from "../missingpersondashboard/missingpersondashboard.model";
import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn:"root"})
export class  ViewService {
  constructor(private http: HttpClient ){ }

 viewForm(id:any){
  return this.http.get("http://localhost:3000/api/missingpersondashboard/" + id)


}

}
