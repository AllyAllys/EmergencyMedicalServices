import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../incidentdashboard/incidentdashboard.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  elements=[];
  constructor(private incidentService:IncidentService) { }

  ngOnInit(): void {
  }

  delete(form_id){

    this.incidentService.deleteUser(form_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
      alert("Deleted Successfully");
    })

  }

}
