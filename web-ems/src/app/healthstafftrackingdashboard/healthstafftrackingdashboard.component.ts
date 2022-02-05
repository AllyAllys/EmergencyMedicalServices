import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {healthstaff} from '../healthstaff/healthstaff.model'
import { HealthService } from './healthstafftracking.service';
@Component({
  selector: 'app-healthstafftrackingdashboard',
  templateUrl: './healthstafftrackingdashboard.component.html',
  styleUrls: ['./healthstafftrackingdashboard.component.css']
})
export class HealthstafftrackingdashboardComponent implements OnInit {

  displayedColumns: string[] = ['FirstID' ,'Firstname','Address','Date','Action'];
  dataSource = new MatTableDataSource <healthstaff>();
  listMissing : healthstaff[] = [];
  Reports:any;

  constructor(private healthservice:HealthService ) { }

  ngOnInit(): void {
    this.healthservice.listIncidents().subscribe((data)=> {
      this.listMissing = data;
      this.dataSource = new MatTableDataSource(this.Reports);
      console.log(data)
    })
  }

}
