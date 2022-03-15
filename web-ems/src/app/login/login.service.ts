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

 loginUser(Username:string, Password:string,Userclass:string){
   const LoginData: loginData = {Username:Username,Password:Password,Userclass:Userclass}
   this.http.post<{token:string}>("http://localhost:3000/api/users/login",LoginData)
   .subscribe(response=>{

    const token = response.token;
    this.token= token;
    localStorage.setItem('token',response.token);

    this.router.navigate(['/homepage']);

    window.location.assign("/homepage");


    //this.authStatusListener.next(true);
    //window.location.reload();

  })
 }
 IsLogged() {
  return localStorage.getItem("token") != '';
}

 getToken(){

  return localStorage.getItem('token')  || '';
  }

  getID(){
    return localStorage.getItem('_id')
  }



  /*logout(){
    this.token=null;
    this.isAuthenticated =false;
    this.authStatusListener.next(false);

  }
  */
  GetRolebyToken(token:any){
    let _token=token.split('.')[1];
    this.tokenresp=JSON.parse(atob(_token))
    console.log(this.tokenresp);
    let user =this.tokenresp._id
    let name= this.tokenresp.Firstname
    let last= this.tokenresp.Lastname
    let role= this.tokenresp.Userclass
    localStorage.setItem('_id',user); //Stores current user token in the local storage
    localStorage.setItem('Firstname',name);
    localStorage.setItem('Lastname',last);
    localStorage.setItem('Userclass',role);
    return this.tokenresp.Userclass;

  }


}
