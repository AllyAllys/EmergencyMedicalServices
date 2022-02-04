import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewPatientService } from './view-patient.servicevictim'
@Component({
  selector: 'app-view-patientvictim',
  templateUrl: './view-patientvictim.component.html',
  styleUrls: ['./view-patientvictim.component.css']
})
export class ViewPatientvictimComponent implements OnInit {
  userId:string = '';
  userDetails:any;


  constructor(private activatedroute:ActivatedRoute,private viewpatientservice: ViewPatientService) { }


    ngOnInit(): void {

      this.activatedroute.params.subscribe(data =>{
       this.userId = data['id']
       console.log(data)
     })
     this.viewpatientservice.viewpatientForm(this.userId).subscribe(data =>{
       this.userDetails = data;
       console.log
     })
   }


}
