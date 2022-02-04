
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable({ providedIn:"root"})
  export class UpdateincidentService {
  constructor(private http: HttpClient ){ }

  updateform(id:any,data:any){
    return this.http.put("http://localhost:3000/api/incidentdashboard/" + id, data)


  }





}
