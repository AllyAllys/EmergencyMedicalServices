import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {healthstaff} from '../healthstaff/healthstaff.model'

@Injectable({ providedIn:"root"})
export class  HealthService {


  constructor(private http: HttpClient, private router:Router ){ }

  listIncidents(){
    return this.http.get <healthstaff[]> ("http://localhost:3000/Healthstafftracking/list")

  }

  viewForm(id:any){
    return this.http.get("http://localhost:3000/Healthstafftracking/" + id)


  }
  addhealthForm(data:any,userId){

    console.log(data);

    return this.http.post('http://localhost:3000/Healthstafftracking/create',data,userId)


  }
  updateform(id:any,data:any){
    return this.http.put("http://localhost:3000/Healthstafftracking/" + id, data)


  }
  deleteUser(id:any){
    return this.http.delete("http://localhost:3000/Healthstafftracking/" + id)
  }

}
