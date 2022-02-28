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

  constructor(private healthservice:HealthService,private _snackBar: MatSnackBar) { }

  form = new FormGroup({
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

    this.healthservice.addhealthForm( this.form.value,user)
    .subscribe( ( result ) => {
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
