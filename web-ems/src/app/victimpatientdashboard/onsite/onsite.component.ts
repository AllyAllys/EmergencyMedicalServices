import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {victimpatient} from '../victimpatientdashboard.model';
import { onsitePatientVictimService } from './onsite.service';
@Component({
  selector: 'app-onsite',
  templateUrl: './onsite.component.html',
  styleUrls: ['./onsite.component.css']
})
export class OnsiteComponent implements OnInit {

  displayedColumns: string[] = ['VolunteerID' ,'Firstname','Gender','Address','DateTime','Action'];
  dataSource = new MatTableDataSource<victimpatient>();
  listMissing : victimpatient[] = [];
  Reports:any;

  constructor( private onsitepatientvictimservice:onsitePatientVictimService) { }

  ngOnInit(): void {
    this.onsitepatientvictimservice.listIncidents().subscribe((data)=> {
      this.listMissing = data;
      this.dataSource = new MatTableDataSource(this.Reports);
      console.log(data)
    })
  }

}
