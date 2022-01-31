import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PutService } from './update.service';
import { ViewService } from '../view/view.service';
import {missingperson} from '../missingpersondashboard/missingpersondashboard.model'
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  constructor(private activatedroute:ActivatedRoute, private putService:PutService, private viewService:ViewService, private _snackBar: MatSnackBar) {}

 editform = new FormGroup({
   Firstname: new FormControl(''),
   Surname: new FormControl(''),
   Gender: new FormControl(''),
   Age: new FormControl(''),
   Height:new FormControl(''),
   Street:new FormControl(''),
   City:new FormControl(''),
   ZipCode: new FormControl(''),
   Person_Descript: new FormControl(''),

 });
 message:boolean = false;

  ngOnInit():void{
   // console.log(this.activatedroute.params.id)

   this.viewService.viewForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
     console.log(result);

     this.editform = new FormGroup({
       Firstname: new FormControl(result ['Firstname']),
       Surname:new FormControl(result['Surname']),
       Gender: new FormControl(result['Gender']),
       Age: new FormControl(result['Age']),
       Height:new FormControl(result['Height']),
       Street:new FormControl(result['Street']),
       City:new FormControl(result['City']),
       ZipCode: new FormControl(result['ZipCode']),
       Person_Descript: new FormControl(result['Person_Descript']),
     });

   });

  }

  UpdateData() {
    console.log(this.editform.value);
    this.putService.updateform(this.activatedroute.snapshot.params['id'],this.editform.value).subscribe((result)=>{
      console.log(result);
      this._snackBar.open('Missing person Form is successfully Updated');

    })




  }
  removeMessage() {

  }
}
