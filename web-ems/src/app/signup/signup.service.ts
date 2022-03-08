import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {signUpData} from "./signup.model";
import {Router} from '@angular/router';
import {loginData} from "../login/login.model";
import { AbstractControl } from "@angular/forms";
import { map } from "rxjs";

@Injectable({ providedIn:"root"})
export class  SignupService {
  constructor(private http: HttpClient ,private router:Router){ }

  adduserForm(data:any){
    console.log(data);
    this.router.navigate(['/login'])

    return this.http.post('http://localhost:3000/api/users/signup',data)





  }

  validateUsernameNotTaken(control: AbstractControl) {
    return this.checkUsernameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { usernameTaken: true };
      })
    );
  }

  checkUsernameNotTaken(Username: string) {
    return this.http.get("http://localhost:3000/api/users/list").pipe(
      map((usernameList: Array<any>) =>
        usernameList.filter(user => user.Username === Username)
      ),
      map(users => !users.length)
    );
  }


  validateEmailNotTaken(control: AbstractControl) {
    return this.checkEmailNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { EmailTaken: true };
      })
    );
  }

  checkEmailNotTaken(Email: string) {
    return this.http.get("http://localhost:3000/api/users/list").pipe(
      map((EmailList: Array<any>) =>
        EmailList.filter(user => user.Email === Email)
      ),
      map(users => !users.length)
    );
  }




}
