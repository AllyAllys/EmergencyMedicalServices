import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {orders} from './orders.model'
import { Observable } from 'rxjs'

@Injectable({ providedIn:"root"})
export class OrderService {

  userId:any
  constructor(private http: HttpClient ){ }

  listIncidents(){
    return this.http.get <orders[]> ("http://localhost:3000/Itemrequests/list")

  }
  addorderForm(data:any,userId){


    console.log(data);
    return this.http.post('http://localhost:3000/Itemrequests/create',data,userId)


  }
  ordersForm(id:any)
  {
   return this.http.get("http://localhost:3000/Itemrequests/" + id)


   }

   updateform(id:any,data:any){
    return this.http.put("http://localhost:3000/Itemrequests/" + id, data)


  }

  deleteUser(id:any){
    return this.http.delete("http://localhost:3000/Itemrequests/" + id)
  }


}
