import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewincidentService } from './viewincidentform.service';
@Component({
  selector: 'app-viewincidentform',
  templateUrl: './viewincidentform.component.html',
  styleUrls: ['./viewincidentform.component.css']
})
export class ViewincidentformComponent implements OnInit {
  userId:string = '';
  userDetails:any;

  constructor(private activatedroute:ActivatedRoute, private incidentservice:ViewincidentService ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.incidentservice.viewincidentForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log
    })
  }

}
