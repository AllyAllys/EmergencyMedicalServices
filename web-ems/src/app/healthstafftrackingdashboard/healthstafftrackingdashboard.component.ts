import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {healthstaff} from '../healthstaff/healthstaff.model'
import { HealthService } from './healthstafftracking.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-healthstafftrackingdashboard',
  templateUrl: './healthstafftrackingdashboard.component.html',
  styleUrls: ['./healthstafftrackingdashboard.component.css']
})
export class HealthstafftrackingdashboardComponent implements OnInit{



  displayedColumns: string[] = ['FirstID' ,'Firstname','Address','Date','Action'];
  dataSource = new MatTableDataSource <healthstaff>();
  listMissing : healthstaff[] = [];
  Reports:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private healthservice:HealthService ) { }


  ngOnInit(): void {
    this.healthservice.listIncidents().subscribe((data)=> {
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





}
