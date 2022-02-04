import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn:"root"})
export class  ViewPatientService {
  constructor(private http: HttpClient ){ }

 viewpatientForm(id:any)
 {
  return this.http.get("http://localhost:3000/api/Patientvictiminformation/" + id)


  }

  onsiteviewpatientForm(id:any){
    return this.http.get("http://localhost:3000/api/onsitepatientvictiminformation/" + id)
  }

}
