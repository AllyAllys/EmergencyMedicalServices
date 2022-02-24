import { missingperson } from './../Missingperson/missingpersondashboard/missingpersondashboard.model';
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from 'rxjs'
import {map} from 'rxjs';

@Injectable({ providedIn:"root"})
export class  ChartService {


  constructor(private http: HttpClient ){ }

  MissingpersonChart(){
    return this.http.get <missingperson[]> ("http://localhost:3000/api/Missingpersondashboard/chart") .pipe(map(result => result));

  }

  MissingpersonChart2(){
    return this.http.get("http://localhost:3000/api/Missingpersondashboard/chartt") .pipe(map(result => result));

  }

}
