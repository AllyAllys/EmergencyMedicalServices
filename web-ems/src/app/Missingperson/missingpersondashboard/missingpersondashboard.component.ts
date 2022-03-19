import { MatSnackBar } from '@angular/material/snack-bar';

import { Component, OnInit, ViewChild } from '@angular/core';
import {missingperson} from './missingpersondashboard.model';
import {MatTableDataSource} from '@angular/material/table';
import { MissingpersonService } from './missingpersondashboard.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { LoginService } from 'src/app/login/login.service';

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
  remove=false;


  currentrole:any;

  constructor(private missingpersonService: MissingpersonService , private loginservice:LoginService, private _snackBar:MatSnackBar) {}
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

  MenuDisplay(){
    if(this.loginservice.getToken()!='')
    this.currentrole=this.loginservice.GetRolebyToken(this.loginservice.getToken());

    this.remove = this.currentrole=='Adminstrator'; // allows only admin to access the delete button

  }

  delete(form_id:any){
    if(confirm("Are you sure you want to permanently delete this form?")==true){
    this.missingpersonService.deleteUser(form_id).subscribe((result)=>{
      console.log(result);
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


