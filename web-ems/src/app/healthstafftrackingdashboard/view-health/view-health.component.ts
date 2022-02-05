import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HealthService } from '../healthstafftracking.service';

@Component({
  selector: 'app-view-health',
  templateUrl: './view-health.component.html',
  styleUrls: ['./view-health.component.css']
})
export class ViewHealthComponent implements OnInit {
  userId:string = '';
  userDetails:any;

  constructor(private activatedrouter:ActivatedRoute, private healthservice:HealthService) { }

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
