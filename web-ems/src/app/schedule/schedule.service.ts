import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {disasterschedule} from './schedule.model'

@Injectable({ providedIn:"root"})
export class  ScheduleService {


  constructor(private http: HttpClient, private router:Router ){ }

  listIncidents(){
    return this.http.get <disasterschedule[]> ("http://localhost:3000/sch/list")

  }

  addhealthForm(data:any,userId){

    console.log(data);

    return this.http.post('http://localhost:3000/sch/create',data,userId)


  }

  viewForm(id:any){
    return this.http.get("http://localhost:3000/sch/" + id)



  }

  updateform(id:any,data:any){
    return this.http.put("http://localhost:3000/sch/" + id, data)


  }


  deleteUser(id:any){
    return this.http.delete("http://localhost:3000/sch/" + id)
  }


}
