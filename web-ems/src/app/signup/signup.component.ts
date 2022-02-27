import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {SignupService} from "./signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  constructor(public signupService:SignupService, private _snackBar: MatSnackBar) {}

  onSignUp(form:NgForm){
    if(form.invalid){
      return;
    }
    this.signupService.createUser(form.value.Username,form.value.Userclass,form.value.Firstname,form.value.Lastname,form.value.Email,form.value.Password);
    this._snackBar.open('Registration Successful','',{
      verticalPosition:'top',
     // horizontalPosition:'center',
      panelClass:'edit'
    })
  }
  hide = true;

  ngOnInit(): void {
  }

}
