import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {loginData} from "./login.model";

@Injectable({ providedIn:"root"})

export class  LoginService {
  private token:any;
  constructor(private http: HttpClient, private router:Router  ){ }



 loginUser(Username:string, Password:string){
   const LoginData: loginData = {Username:Username,Password:Password}
   this.http.post<{token:string}>("http://localhost:3000/api/users/login",LoginData)
   .subscribe(response=>{

    const token = response.token;
    this.token= token;
    localStorage.setItem('token',response.token)
    //this.router.navigate(['/homepage'])


  })
 }

 getToken(){

  return localStorage.getItem('token')
  }
}
