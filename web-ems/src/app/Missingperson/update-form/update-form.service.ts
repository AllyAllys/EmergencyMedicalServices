import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {missingperson} from "../missingpersondashboard/missingpersondashboard.model";
import {Router} from '@angular/router';
import { UpdateFormComponent } from "./update-form.component";

@Injectable({ providedIn:"root"})
export class  UpdateService {
  constructor(private http: HttpClient ){ }

deleteUser(id:any){
  return this.http.delete("http://localhost:3000/api/missingpersondashboard/" + id)


}

}
