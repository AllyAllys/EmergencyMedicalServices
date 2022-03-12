import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { orders } from '../orders.model';
import {OrderService} from '../orders.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.css']
})
export class OrdertableComponent implements OnInit {
  displayedColumns: string[] = [ '_id','FirstID' ,'UploadDate','Status','Action'];
  dataSource = new MatTableDataSource<orders>();
  searchKey:string;
  remove=false;
  currentrole:any;




  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private orderservice:OrderService, private _snackBar:MatSnackBar,private loginservice:LoginService) {}


  delete(form_id:any){

    if(confirm("Are you sure you want to permanently delete this form?")==true){

    this.orderservice.deleteUser(form_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
      this._snackBar.open('Deleted Successfully','',{
        verticalPosition:'top',
       // horizontalPosition:'center',
        panelClass:'edit'
      })
    })


  }

  }



  ngOnInit(): void {
    this.orderservice.listIncidents().subscribe((data)=> {
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

  MenuDisplay(){
    if(this.loginservice.getToken()!='')
    this.currentrole=this.loginservice.GetRolebyToken(this.loginservice.getToken());
    this.remove = this.currentrole=='Adminstrator' || this.currentrole=='Disaster Manager'; // allows only admin to access the delete button

  }




}
