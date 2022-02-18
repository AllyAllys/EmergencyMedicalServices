import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {orders} from './orders.model'
import { Observable } from 'rxjs'

@Injectable({ providedIn:"root"})
export class OrderService {


  constructor(private http: HttpClient ){ }

  listIncidents(){
    return this.http.get <orders[]> ("http://localhost:3000/Orders/list")

  }
  addorderForm(data:any){

    console.log(data);
    return this.http.post('http://localhost:3000/Itemrequests/create',data)


  }

}
