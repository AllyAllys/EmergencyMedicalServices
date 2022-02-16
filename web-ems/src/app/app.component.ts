import { Router } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, DoCheck {
  displaymenu=false;
  displayemployee=false;
  displayuser=false;
  currentrole:any;
  title = 'web-ems';
  sideBarOpen=true;
  constructor(private loginservice:LoginService, private route:Router){}
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  ngOnInit():void{


  }
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

  ngDoCheck(){
    if(this.route.url=='/login'){
      this.displaymenu=false;
    }
    else{
      this.displaymenu=true;
    }

  }

}
