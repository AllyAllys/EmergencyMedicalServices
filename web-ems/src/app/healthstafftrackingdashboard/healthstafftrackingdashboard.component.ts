import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {healthstaff} from '../healthstaff/healthstaff.model'
import { HealthService } from './healthstafftracking.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { LoginService } from '../login/login.service';


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
  remove=false;
  currentrole:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private healthservice:HealthService, private loginservice:LoginService , private _snackBar:MatSnackBar) { }


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
