import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import {IncidentService} from './incidentdashboard.service'
import {incident} from './incidentdashboard.model'
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-incidentdashboard',
  templateUrl: './incidentdashboard.component.html',
  styleUrls: ['./incidentdashboard.component.css'],
  providers: [IncidentService],

})

export class IncidentdashboardComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['PublicID' ,'Subject', 'UploadDate','Actions'];
  dataSource = new MatTableDataSource<incident>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit() {
  }
  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.incidentService.listIncidents().subscribe((data)=> {
     this.dataSource=new MatTableDataSource(data);
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
