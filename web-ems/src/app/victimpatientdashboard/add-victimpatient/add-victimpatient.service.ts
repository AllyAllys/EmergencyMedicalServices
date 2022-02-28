
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {victimpatient} from '../victimpatientdashboard.model'
import { Subject } from "rxjs";


@Injectable({ providedIn:"root"})
  export class AddvictimpatientService {
  constructor(private http: HttpClient ){ }



  createForm(data:any,userId){
    console.log(data);
    return this.http.post('http://localhost:3000/api/Patientvictiminformation/create',data,userId)


  }

  addForm(data:any,userId){
    console.log(data);
    return this.http.post('http://localhost:3000/api/onsitepatientvictiminformation/create',data,userId)


  }


}


