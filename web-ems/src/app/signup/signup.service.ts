import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {signUpData} from "./signup.model";
import {Router} from '@angular/router';
import {loginData} from "../login/login.model";

@Injectable({ providedIn:"root"})
export class  SignupService {
  constructor(private http: HttpClient ,private router:Router){ }

 createUser(Username:string, Userclass:string, Firstname:string,Lastname:string,Email:string,Password:string){
   const SignUpData : signUpData = {Username:Username, Userclass:Userclass, Firstname:Firstname,Lastname:Lastname,Email:Email,Password:Password}
   this.http.post("http://localhost:3000/api/users/signup", SignUpData)
   .subscribe(response =>{
     console.log (response);
     this.router.navigate(['/login'])

   })
 }
}
