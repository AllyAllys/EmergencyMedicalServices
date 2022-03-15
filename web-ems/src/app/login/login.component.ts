import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public loginService:LoginService , private _snackBar:MatSnackBar) { }
  isLoading = false;



  onLogin(form:NgForm){
    if(form.invalid){
      alert("Invalid Login!")
      return;

    }

    this.loginService.loginUser(form.value.Username,form.value.Password,form.value.Userclass);
    this.loginService.updatemenu.next();



    this._snackBar.open('Logged In','',{
      verticalPosition:'top',
     // horizontalPosition:'center',
      panelClass:'edit'
    })


  }

  ngOnInit(): void {
  }

}
