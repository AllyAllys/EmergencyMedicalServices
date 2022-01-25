import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {missingperson} from './missingpersondashboard.model'
import { Observable } from 'rxjs'

@Injectable({ providedIn:"root"})
export class  MissingpersonService {


  constructor(private http: HttpClient ){ }

  listIncidents(){
    return this.http.get <missingperson[]> ("http://localhost:3000/api/Missingpersondashboard/list" )

  }

}
