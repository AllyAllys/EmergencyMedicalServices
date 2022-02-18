import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { orders } from '../orders.model';
import {OrderService} from '../orders.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.css']
})
export class OrdertableComponent implements OnInit {
  displayedColumns: string[] = [ '_id','FirstID' ,'DateOrdered','Orderstatus','Action'];
  dataSource = new MatTableDataSource<orders>();
  searchKey:string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private orderservice:OrderService) {}



  ngOnInit(): void {
    this.orderservice.listIncidents().subscribe((data)=> {
    this.dataSource=new MatTableDataSource(data);
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
