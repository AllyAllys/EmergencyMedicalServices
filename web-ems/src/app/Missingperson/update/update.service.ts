import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {missingperson} from "../missingpersondashboard/missingpersondashboard.model";
import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn:"root"})
export class  PutService {
  constructor(private http: HttpClient ){ }

  updateform(id:any,data:any){
  return this.http.put("http://localhost:3000/api/missingpersondashboard/" + id, data)


}

}
