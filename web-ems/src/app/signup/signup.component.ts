import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SignupService} from "./signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  constructor(public signupService:SignupService) {}

  onSignUp(form:NgForm){
    if(form.invalid){
      return;
    }
    this.signupService.createUser(form.value.Username,form.value.Userclass,form.value.Firstname,form.value.Lastname,form.value.Email,form.value.Password);
  }
  hide = true;

  ngOnInit(): void {
  }

}
