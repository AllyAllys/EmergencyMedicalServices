import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import {IncidentService} from './incidentdashboard.service'
import {incident} from './incidentdashboard.model'
import { ActivatedRoute } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';

const ELEMENT_DATA: incident[] = [

];
@Component({
  selector: 'app-incidentdashboard',
  templateUrl: './incidentdashboard.component.html',
  styleUrls: ['./incidentdashboard.component.css'],
  providers: [IncidentService],

})

export class IncidentdashboardComponent implements OnInit {
//Add Incident Form




  displayedColumns: string[] = ['PublicID' ,'Subject', 'UploadDate','Actions'];
  dataSource = new MatTableDataSource<incident>();
  listIncidents : incident[] = [];
  Reports:any;



  constructor(private incidentService: IncidentService) {}


  ngOnInit(): void {



    this.incidentService.listIncidents().subscribe((data)=> {
      this.listIncidents = data;
      this.dataSource = new MatTableDataSource(this.Reports);
      console.log(data)
    })










  }
}
