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

    this.healthservice.addhealthForm( this.form.value)
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
