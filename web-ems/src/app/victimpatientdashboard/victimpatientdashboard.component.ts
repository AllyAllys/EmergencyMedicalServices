import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {victimpatient} from './victimpatientdashboard.model';
import { PatientVictimService } from './victimpatientdashboard.services';

@Component({
  selector: 'app-victimpatientdashboard',
  templateUrl: './victimpatientdashboard.component.html',
  styleUrls: ['./victimpatientdashboard.component.css']
})
export class VictimpatientdashboardComponent implements OnInit {

  displayedColumns: string[] = ['VolunteerID' ,'Firstname','Gender','Address','DateTime','Action'];
  dataSource = new MatTableDataSource<victimpatient>();
  listMissing : victimpatient[] = [];
  Reports:any;

  constructor(private patientvictimservice:PatientVictimService) { }

  ngOnInit(): void {

    this.patientvictimservice.listIncidents().subscribe((data)=> {
      this.listMissing = data;
      this.dataSource = new MatTableDataSource(this.Reports);
      console.log(data)
    })

  }



}
