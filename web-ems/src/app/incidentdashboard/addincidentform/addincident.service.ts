
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable({ providedIn:"root"})
  export class AddincidentService {
  constructor(private http: HttpClient ){ }

userId:any

  addincidentForm(formData,userId){
    console.log(formData);
    console.log(userId)
    return this.http.post('http://localhost:3000/api/incidentdashboard/create',formData,userId)


  }




}

