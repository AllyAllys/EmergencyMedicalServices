
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {missingperson} from "../missingpersondashboard/missingpersondashboard.model";
import { Subject } from "rxjs";


@Injectable({ providedIn:"root"})
  export class  MissingService {
  constructor(private http: HttpClient ){ }



  //createForm(data:any){
  //  return this.http.post('http://localhost:3000/api/Missingpersondashboard/create',data)

  //}



}
