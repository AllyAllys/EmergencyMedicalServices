import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../orders.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  userId:string = '';
  userDetails:any;

  constructor(private activatedroute:ActivatedRoute,private service: OrderService) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.service.ordersForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log
    })
  }

}

