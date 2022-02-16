import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  displaymenu=false;
  displayemployee=true;
  missingperson=false;
  incident = false;
  patient=false;
  onsite=false;
  users=false;
  chat=false;
  health=false;

  displayuser=false;
  currentrole:any;

  constructor(private loginservice:LoginService,private route:Router) { }


  ngOnInit(): void {
    this.loginservice.updatemenu.subscribe(res=>{
     this.MenuDisplay();
    });
    this.MenuDisplay();

  }




  MenuDisplay(){
    if(this.loginservice.getToken()!='')
    this.currentrole=this.loginservice.GetRolebyToken(this.loginservice.getToken());
    console.log(this.currentrole);
    this.missingperson= this.currentrole=='Adminstrator' || this.currentrole=='Public' || this.currentrole== 'Volunteer' || this.currentrole=='First Responder' ||this.currentrole=='Emergency Responder' ||this.currentrole=='Health staff' || this.currentrole=='Law Enforcement';
    this.incident = this.currentrole=='Adminstrator' || this.currentrole=='Public'|| this.currentrole=='Volunteer'|| this.currentrole=='Law Enforcement';
    this.patient = this.currentrole=='Adminstrator'|| this.currentrole=='First Responder' || this.currentrole=='Emergency Responder' || this.currentrole=='Health staff';
    this.onsite= this.currentrole=='Adminstrator'|| this.currentrole=='First Responder' || this.currentrole=='Emergency Responder' || this.currentrole=='Volunteer';
    this.users=this.currentrole=='Adminstrator';
    this.chat=this.currentrole=='Adminstrator'|| this.currentrole=='Disaster Manager' || this.currentrole=='First Responder' || this.currentrole=='Emergency Responder';
    this.health = this.currentrole=='Adminstrator'|| this.currentrole=='First Responder' || this.currentrole=='Emergency Responder';
  }



}
