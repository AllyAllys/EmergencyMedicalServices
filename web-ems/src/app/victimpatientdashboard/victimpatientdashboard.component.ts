import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {victimpatient} from './victimpatientdashboard.model';
import { PatientVictimService } from './victimpatientdashboard.services';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-victimpatientdashboard',
  templateUrl: './victimpatientdashboard.component.html',
  styleUrls: ['./victimpatientdashboard.component.css']
})
export class VictimpatientdashboardComponent implements OnInit {

  displayedColumns: string[] = ['VolunteerID' ,'Firstname','Gender','Address','DateTime','Action'];
  dataSource = new MatTableDataSource<victimpatient>();
  //listMissing : victimpatient[] = [];
  Reports:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private patientvictimservice:PatientVictimService) { }

  ngOnInit(): void {

    this.patientvictimservice.listIncidents().subscribe((data)=> {
      //this.listMissing = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(form_id:any){

    this.patientvictimservice.deleteUser(form_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
      alert("Deleted Successfully");
    })

  }



}
