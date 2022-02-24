import { users } from './../../users/users.model';
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import { Observable } from 'rxjs'
import {map} from 'rxjs';

@Injectable({ providedIn:"root"})
export class  PieService {


  constructor(private http: HttpClient ){ }

  Incidents(){
    return this.http.get <users[]> ("http://localhost:3000/api/users/userchart") .pipe(map(result => result));

  }



}
