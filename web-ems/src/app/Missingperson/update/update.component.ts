import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PutService } from './update.service';
import { ViewService } from '../view/view.service';
import {missingperson} from '../missingpersondashboard/missingpersondashboard.model'




@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  constructor(private activatedroute:ActivatedRoute, private putService:PutService, private viewService:ViewService) {}

 editform = new FormGroup({
   Firstname: new FormControl('')
 });
 message:boolean = false;

  ngOnInit():void{
   // console.log(this.activatedroute.params.id)

   this.viewService.viewForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
     console.log(result);

     this.editform = new FormGroup({
       Firstname: new FormControl(result ['Firstname'])
     });

   });

  }

  UpdateData() {
    console.log(this.editform.value);
    this.putService.updateform(this.activatedroute.snapshot.params['id'],this.editform.value).subscribe((result)=>{
      console.log(result);
    })




  }
  removeMessage() {

  }
}
