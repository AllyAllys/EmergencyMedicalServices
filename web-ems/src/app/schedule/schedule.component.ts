import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from '../login/login.service';
import {disasterschedule} from './schedule.model'
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  displayedColumns: string[] = ['FirstID' ,'Task','Firstname','Address','Date','Action'];
  dataSource = new MatTableDataSource <disasterschedule>();
  listMissing : disasterschedule[] = [];
  Reports:any;
  remove=false;
  currentrole:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private healthservice:ScheduleService, private loginservice:LoginService , private _snackBar:MatSnackBar) { }


  ngOnInit(): void {
    this.healthservice.listIncidents().subscribe((data)=> {
      //this.listMissing = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    })
    this.loginservice.updatemenu.subscribe(res=>{
      this.MenuDisplay();
     });
     this.MenuDisplay();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(form_id:any){

    if(confirm("Are you sure you want to permanently delete this form?")==true){

    this.healthservice.deleteUser(form_id).subscribe((result)=>{
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

  MenuDisplay(){
    if(this.loginservice.getToken()!='')
    this.currentrole=this.loginservice.GetRolebyToken(this.loginservice.getToken());
    this.remove = this.currentrole=='Adminstrator'; // allows only admin to access the delete button

  }

}
