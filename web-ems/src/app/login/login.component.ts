import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public loginService:LoginService) { }
  isLoading = false;

  onLogin(form:NgForm){
    if(form.invalid){
      return;
    }
    this.loginService.loginUser(form.value.Username,form.value.Password);
  }

  ngOnInit(): void {
  }

}
