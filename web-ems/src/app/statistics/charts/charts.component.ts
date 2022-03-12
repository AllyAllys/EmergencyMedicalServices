import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private loginservice:LoginService) { }
  currentrole:any;
  users=false;
  missingperson=false;
  order=false;
  incident=false;
  patient=false;
  onsite=false;
  triage=false;


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
    this.users= this.currentrole=='Adminstrator';
    this.missingperson= this.currentrole=='Adminstrator' || this.currentrole=='Public' || this.currentrole== 'Volunteer' || this.currentrole=='First Responder' ||this.currentrole=='Emergency Responder' ||this.currentrole=='Health staff' || this.currentrole=='Law Enforcement';
    this.order = this.currentrole=='Adminstrator' || this.currentrole=='First Responder' || this.currentrole=='Emergency Responder'|| this.currentrole=='Disaster Manager';
    this.incident = this.currentrole=='Adminstrator' || this.currentrole=='Public'|| this.currentrole=='Volunteer'|| this.currentrole=='Law Enforcement' || this.currentrole=='Health staff'|| this.currentrole=='Disaster Manager';
    this.patient = this.currentrole=='Adminstrator'|| this.currentrole=='First Responder' || this.currentrole=='Emergency Responder' || this.currentrole=='Health staff'|| this.currentrole=='Disaster Manager';
    this.onsite= this.currentrole=='Adminstrator'|| this.currentrole=='First Responder' || this.currentrole=='Emergency Responder' || this.currentrole=='Volunteer' || this.currentrole=='Disaster Manager';
    this.triage = this.currentrole=='Adminstrator'|| this.currentrole=='First Responder' || this.currentrole=='Emergency Responder' || this.currentrole=='Health staff' || this.currentrole=='Volunteer'|| this.currentrole=='Disaster Manager';

  }

}
