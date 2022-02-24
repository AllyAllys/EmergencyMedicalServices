import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {victimpatient} from '../victimpatientdashboard.model';
import { onsitePatientVictimService } from './onsite.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-onsite',
  templateUrl: './onsite.component.html',
  styleUrls: ['./onsite.component.css']
})
export class OnsiteComponent implements OnInit {

  displayedColumns: string[] = ['VolunteerID' ,'Firstname','Gender','Address','DateTime','Action'];
  dataSource = new MatTableDataSource<victimpatient>();
  //listMissing : victimpatient[] = [];
  Reports:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private onsitepatientvictimservice:onsitePatientVictimService) { }

  ngOnInit(): void {
    this.onsitepatientvictimservice.listIncidents().subscribe((data)=> {
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

    this.onsitepatientvictimservice.deleteUser(form_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
      alert("Deleted Successfully");
    })

  }

}
