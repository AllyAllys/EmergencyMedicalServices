import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import {Router} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn:"root"})
export class  UpdateformService {
  constructor(private http: HttpClient ){ }

  updateform(id:any,data:any){
  return this.http.put("http://localhost:3000/api/Patientvictiminformation/" + id, data)


}

onsiteupdateform(id:any,data:any){
  return this.http.put("http://localhost:3000/api/onsitepatientvictiminformation/" + id, data)
}

}
