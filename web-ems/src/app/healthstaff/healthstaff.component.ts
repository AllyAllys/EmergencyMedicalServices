import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HealthService } from '../healthstafftrackingdashboard/healthstafftracking.service';

@Component({
  selector: 'app-healthstaff',
  templateUrl: './healthstaff.component.html',
  styleUrls: ['./healthstaff.component.css']
})
export class HealthstaffComponent implements OnInit {
  userId: any;
  view:any;

  constructor(private healthservice:HealthService,private _snackBar: MatSnackBar, private router:Router) { }

  form = new FormGroup({
    _id: new FormControl(''),
    Firstname: new FormControl('',Validators.required),
    Surname: new FormControl('',Validators.required),
    PhoneNo:new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),

    });


  ngOnInit(): void {
  }

  SaveData() {

    if (this.form.invalid) return;
    this.userId =localStorage.getItem('_id')
    this.form.value.UserID=this.userId
    let user = this.userId

    this.form.value._id = this.view
    let view = this.view

    this.healthservice.addhealthForm( this.form.value,user)
    .subscribe( ( result:any ) => {

      this.router.navigateByUrl(`/viewhealthtrackingform/${result._id}`)

     // this.router.navigateByUrl(`/viewhealthtrackingform/${result._id}`)

      this.form.reset( {} );
     console.log(result);


     this._snackBar.open('Uploaded Successfully','',{
      verticalPosition:'top',
     // horizontalPosition:'center',
      panelClass:'edit'
    })
     });
  }


}
