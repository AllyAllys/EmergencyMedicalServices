import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  userId:string = '';
  userDetails:any;

  constructor(private viewService: ViewService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

     this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.viewService.viewForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log
    })
  }

}
