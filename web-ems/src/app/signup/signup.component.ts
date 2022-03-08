import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {SignupService} from "./signup.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  constructor(public signupService:SignupService, private _snackBar: MatSnackBar) {}


  form = new FormGroup({

    Username: new FormControl(" ",[Validators.required],this.signupService.validateUsernameNotTaken.bind(this.signupService)),
    Userclass:new FormControl('',Validators.required),
    Firstname:new FormControl('',Validators.required),
    Lastname:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required,this.signupService.validateEmailNotTaken.bind(this.signupService)),
    Password:new FormControl('',[Validators.required, Validators.minLength(8)]),



  });

  SaveData(){

    if (this.form.invalid) return;

    this.signupService.adduserForm( this.form.value)
    .subscribe( ( result ) => {
      this.form.reset( {} );
     console.log(result);
     });


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
