import { Component, OnInit } from '@angular/core';
import {IncidentService} from './incidentdashboard.service'
import {incident} from './incidentdashboard.model'

const ELEMENT_DATA: incident[] = [

];
@Component({
  selector: 'app-incidentdashboard',
  templateUrl: './incidentdashboard.component.html',
  styleUrls: ['./incidentdashboard.component.css'],
  providers: [IncidentService]
})
export class IncidentdashboardComponent implements OnInit {


  displayedColumns: string[] = [ 'Subject', 'UploadDate'];
  dataSource = ELEMENT_DATA;
  listIncidents : incident[] = [];

  constructor(private incidentService: IncidentService) { }


  ngOnInit(): void {
    this.incidentService.listIncidents().subscribe(data => {
      this.listIncidents = data;
      console.log(data)
    })
  }



}
