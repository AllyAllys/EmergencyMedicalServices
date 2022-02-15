import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  displaymenu=false;
  displayemployee=true;
  missingperson=false;
  incidentreport=false;
  patient=false;
  onsite=false;
  users=false;
  chat=false;
  health=false;

  displayuser=false;
  currentrole:any;

  constructor(private loginservice:LoginService) { }


  ngOnInit(): void {
    this.MenuDisplay();

  }

  MenuDisplay(){
    if(this.loginservice.getToken()!='')
    this.currentrole=this.loginservice.GetRolebyToken(this.loginservice.getToken());
    console.log(this.currentrole);
    this.missingperson= this.currentrole=='Adminstrator' || this.currentrole=='Public' || this.currentrole== 'Volunteer' || this.currentrole=='First Responder' ||this.currentrole=='Emergency Responder' ||this.currentrole=='Health staff' || this.currentrole=='Law Enforcement';

  }



}
