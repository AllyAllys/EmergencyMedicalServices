
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable({ providedIn:"root"})
  export class AddincidentService {
  constructor(private http: HttpClient ){ }



  addincidentForm(data:any){
    console.log(data);
    return this.http.post('http://localhost:3000/api/incidentdashboard/create',data)


  }



}

