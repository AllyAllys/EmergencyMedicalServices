import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs'
import { EventEmitter } from '@angular/core';
import {LoginService} from '../login/login.service'
import { SignupService } from '../signup/signup.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  userIsAuthenticated = false;
  displaymenu=false;
  constructor(private loginService:LoginService,private signupservice:SignupService ,private router:Router ) { }
  private authListenerSubs: Subscription;

  ngOnInit(): void {
    this.authListenerSubs = this.loginService.getauthStatusListener().subscribe(isAuthenticated=>{
     this.userIsAuthenticated = isAuthenticated;
    });

  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

  IsLogged() {
    return !!localStorage.getItem("token");
  }


 // ngOnDestroy(): void {
  //  this.authListenerSubs.unsubscribe();

 // }
 ngDoCheck(){
  if(this.router.url=='/login'){
    this.displaymenu=false;
  }
  else{
    this.displaymenu=true;
  }

}

  onlogout(){
    alert('Your session expired')
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
