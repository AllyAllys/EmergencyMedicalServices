import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from './../dialog/dialog.component';
import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import {IncidentService} from './incidentdashboard.service'
import {incident} from './incidentdashboard.model'
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { LoginService } from '../login/login.service';
import { MatDialog } from '@angular/material/dialog';


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
  constructor(private incidentService: IncidentService,private loginservice:LoginService,private dialog:MatDialog, private _snackBar:MatSnackBar) {}
  remove=false;
  currentrole:any;

  ngOnInit(): void {
    this.incidentService.listIncidents().subscribe((data)=> {
     this.dataSource=new MatTableDataSource(data);
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

      this.incidentService.deleteUser(form_id).subscribe((result)=>{
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

  /*
  openDialog(){
    this.dialog.open(DialogComponent,{
      disableClose:true
    })
    const form_id={

    }


  }

  */

  MenuDisplay(){
    if(this.loginservice.getToken()!='')
    this.currentrole=this.loginservice.GetRolebyToken(this.loginservice.getToken());
    this.remove = this.currentrole=='Adminstrator'; // allows only admin to access the delete button

  }



}
