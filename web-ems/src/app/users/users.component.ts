import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {users} from './users.model';
import { UsersService } from './users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['_id','Username','Firstname','Requested','Userclass','Email','DateJoined','Action'];
  dataSource = new MatTableDataSource <users>();
  //listMissing : users[] = [];
  Reports:any;
  remove=false;
  currentrole:any;

  constructor(private usersservice:UsersService,private loginservice:LoginService, private _snackBar:MatSnackBar) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    this.usersservice.listIncidents().subscribe((data)=> {
     // this.listMissing = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    });
    this.loginservice.updatemenu.subscribe(res=>{
      this.MenuDisplay();
     });
     this.MenuDisplay();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }

  MenuDisplay(){
    if(this.loginservice.getToken()!='')
    this.currentrole=this.loginservice.GetRolebyToken(this.loginservice.getToken());

    this.remove = this.currentrole=='Adminstrator'; // allows only admin to access the delete button

  }
  ngAfterViewInit() {

  }
  delete(form_id:any){

    if(confirm("Are you sure you want to permanently delete this form?")==true){

    this.usersservice.deleteUser(form_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
      this._snackBar.open('Deleted!','',{
        verticalPosition:'top',
       // horizontalPosition:'center',
        panelClass:'edit'
      })
    })
  }

  }

}
