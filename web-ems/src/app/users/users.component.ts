import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {users} from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['_id','Username','Firstname','Userclass','Email','DateJoined','Action'];
  dataSource = new MatTableDataSource <users>();
  listMissing : users[] = [];
  Reports:any;

  constructor(private usersservice:UsersService) { }

  ngOnInit(): void {

    this.usersservice.listIncidents().subscribe((data)=> {
      this.listMissing = data;
      this.dataSource = new MatTableDataSource(this.Reports);
      console.log(data)
    })
  }

}
