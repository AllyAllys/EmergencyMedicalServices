import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {loginData} from "./login.model";
import { Subject } from "rxjs";

@Injectable({ providedIn:"root"})

export class  LoginService {
  private token:any;
  private _updatemenu= new Subject<void>();


  userIsAuthenticated=false;
  private authStatusListener = new Subject<boolean>();
  isAuthenticated: boolean;
  tokenresp:any;
  constructor(private http: HttpClient, private router:Router  ){ }

  get updatemenu(){
    return this._updatemenu;
  }
  getauthStatusListener(){
    return this.authStatusListener.asObservable();

  }

 loginUser(Username:string, Password:string){
   const LoginData: loginData = {Username:Username,Password:Password}
   this.http.post<{token:string}>("http://localhost:3000/api/users/login",LoginData)
   .subscribe(response=>{

    const token = response.token;
    this.token= token;
    localStorage.setItem('token',response.token);

    this.router.navigate(['/homepage']);
    //this.authStatusListener.next(true);

  })
 }
 IsLogged() {
  return localStorage.getItem("token") != null;
}

 getToken(){

  return localStorage.getItem('token')
  }



  logout(){
    this.token=null;
    this.isAuthenticated =false;
    this.authStatusListener.next(false);

  }
  GetRolebyToken(token:any){
    let _token=token.split('.')[1];
    this.tokenresp=JSON.parse(atob(_token))
    console.log(this.tokenresp);
    return this.tokenresp.Userclass;
  }


}
