import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {users} from './users.model';
import { UsersService } from './users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['_id','Username','Firstname','Userclass','Email','DateJoined','Action'];
  dataSource = new MatTableDataSource <users>();
  //listMissing : users[] = [];
  Reports:any;

  constructor(private usersservice:UsersService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    this.usersservice.listIncidents().subscribe((data)=> {
     // this.listMissing = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }
  ngAfterViewInit() {

  }

}
