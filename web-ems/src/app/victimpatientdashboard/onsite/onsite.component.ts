import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {victimpatient} from '../victimpatientdashboard.model';
import { onsitePatientVictimService } from './onsite.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-onsite',
  templateUrl: './onsite.component.html',
  styleUrls: ['./onsite.component.css']
})
export class OnsiteComponent implements OnInit {

  displayedColumns: string[] = ['VolunteerID' ,'Firstname','Gender','Address','DateTime','Action'];
  dataSource = new MatTableDataSource<victimpatient>();
  //listMissing : victimpatient[] = [];
  Reports:any;
  remove=false;
  currentrole:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private onsitepatientvictimservice:onsitePatientVictimService,private loginservice:LoginService) { }

  ngOnInit(): void {
    this.onsitepatientvictimservice.listIncidents().subscribe((data)=> {
      //this.listMissing = data;
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

    this.onsitepatientvictimservice.deleteUser(form_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
      alert("Deleted Successfully");
    })

  }



}
