import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewPatientService } from '../view-patientvictim/view-patient.servicevictim';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.css']
})
export class ViewformComponent implements OnInit {
  userId:string = '';
  userDetails:any;

  constructor(private activatedroute:ActivatedRoute,private viewpatientservice: ViewPatientService) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.viewpatientservice.onsiteviewpatientForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log
    })
  }

}
