import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-scheduletable',
  templateUrl: './scheduletable.component.html',
  styleUrls: ['./scheduletable.component.css']
})
export class ScheduletableComponent implements OnInit {

  userId:string = '';
  userDetails:any;

  constructor(private activatedrouter:ActivatedRoute, private healthservice:ScheduleService) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.healthservice.viewForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log
    })
  }


}
