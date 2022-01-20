import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {loginData} from "./login.model";

@Injectable({ providedIn:"root"})
export class  LoginService {
  constructor(private http: HttpClient ){ }


 loginUser(Username:string, Password:string){
   const LoginData: loginData = {Username:Username,Password:Password}
   this.http.post("http://localhost:3000/api/users/login",LoginData)
   .subscribe(response =>{
    console.log (response);

  })
 }
}
