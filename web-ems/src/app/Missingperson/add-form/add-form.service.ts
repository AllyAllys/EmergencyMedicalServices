import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {missingperson} from "../missingpersondashboard/missingpersondashboard.model";
import {Router} from '@angular/router';


@Injectable({ providedIn:"root"})
export class  MissingService {
  constructor(private http: HttpClient ){ }

 createForm(Firstname:string,Surname:string,Gender:string,Age:number,Height:string,Street:string,City:string,ZipCode:number,Person_Descript:string){
   const Missingperson : missingperson = {Firstname:Firstname,Surname:Surname,Gender:Gender,Age:Age,Height:Height,Street:Street,City:City,ZipCode:ZipCode,Person_Descript:Person_Descript,}
   this.http.post("http://localhost:3000/api/missingpersondashboard/create", Missingperson)
   .subscribe(response =>{
     console.log (response);

   })
 }

}
