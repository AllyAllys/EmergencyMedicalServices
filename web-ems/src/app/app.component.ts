import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  displaymenu=false;
  displayemployee=false;
  displayuser=false;
  currentrole:any;
  title = 'web-ems';
  sideBarOpen=true;
  constructor(private loginservice:LoginService){}
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  ngOnInit():void{
   // this.authListenerSubs = this.loginservice.getauthStatusListener().subscribe(isAuthenticated=>{
   //  this.userIsAuthenticated = isAuthenticated;
    // })

  }
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
 // ngOnDestroy(): void {
  //  this.authListenerSubs.unsubscribe();}


}
