import { orderchart } from "./order.model";
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

import { Observable } from 'rxjs'

@Injectable({ providedIn:"root"})
export class OrderChartService {


  constructor(private http: HttpClient ){ }

  OrderChart(){
    return this.http.get <orderchart[]> ("http://localhost:3000/Itemrequests/itemchart")

  }


}
