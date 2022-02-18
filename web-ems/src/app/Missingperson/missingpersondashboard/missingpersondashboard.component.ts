
import { Component, OnInit, ViewChild } from '@angular/core';
import {missingperson} from './missingpersondashboard.model';
import {MatTableDataSource} from '@angular/material/table';
import { MissingpersonService } from './missingpersondashboard.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

const ELEMENT_DATA: missingperson[] = [];

@Component({
  selector: 'app-missingpersondashboard',
  templateUrl: './missingpersondashboard.component.html',
  styleUrls: ['./missingpersondashboard.component.css'],
  providers: [MissingpersonService],
})

export class MissingpersondashboardComponent implements OnInit {

  displayedColumns: string[] = ['PublicID' ,'Firstname','Gender','Address','DateTime','Action'];
  dataSource = new MatTableDataSource<missingperson>();
  listMissing : missingperson[] = [];
  Reports:any;

  constructor(private missingpersonService: MissingpersonService ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    this.missingpersonService.listIncidents().subscribe((data)=> {
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


