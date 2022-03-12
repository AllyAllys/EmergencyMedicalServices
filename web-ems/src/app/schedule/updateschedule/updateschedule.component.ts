import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.component.html',
  styleUrls: ['./updateschedule.component.css']
})
export class UpdatescheduleComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute, private healthservice:ScheduleService, private _snackBar: MatSnackBar) { }

  form = new FormGroup({
    _id: new FormControl(''),
    Firstname: new FormControl('',Validators.required),
    Surname: new FormControl('',Validators.required),
    Task:new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),

    });
  message:boolean = false;

  ngOnInit(): void {
    this.healthservice. viewForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.form = new FormGroup({
        Firstname: new FormControl(result ['Firstname'],Validators.required),
        Surname:new FormControl(result['Surname'],Validators.required),
        Street:new FormControl(result['Street'],Validators.required),
        City:new FormControl(result['City'],Validators.required),
        ZipCode: new FormControl(result['ZipCode']),
        Task: new FormControl(result['Task'],Validators.required),


      });

    });
  }
  UpdateData() {

    console.log(this.form.value);
    this.healthservice.updateform(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
      console.log(result);
      this._snackBar.open('Updated Successfully','',{
        verticalPosition:'top',
       // horizontalPosition:'center',
        panelClass:'edit'
      })
    })
  }
  removeMessage() {

  }
}
