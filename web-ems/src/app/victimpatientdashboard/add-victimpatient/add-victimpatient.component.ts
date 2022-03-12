import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {AddvictimpatientService} from '../add-victimpatient/add-victimpatient.service'
@Component({
  selector: 'app-add-victimpatient',
  templateUrl: './add-victimpatient.component.html',
  styleUrls: ['./add-victimpatient.component.css']
})
export class AddVictimpatientComponent implements OnInit {
  userId: any;

  constructor(private addvictimpatientService:AddvictimpatientService,private _snackBar: MatSnackBar,private router:Router) { }

    form = new FormGroup({
    UserID:new FormControl(''),
    Firstname: new FormControl('',Validators.required),
    Surname: new FormControl('',Validators.required),
    DOb: new FormControl('',Validators.required),
    Email : new FormControl('',Validators.required),
    Gender: new FormControl('',Validators.required),
    IDNumber: new FormControl('',Validators.required),
    PhoneNo: new FormControl('',Validators.required),
    InjuryDescription: new FormControl('',Validators.required),
    InjuryTreatment: new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),
    MedicalProviders:new FormControl('',Validators.required),
    Ambulance:new FormControl('',Validators.required),
    Triage: new FormControl('',Validators.required),

    });

  ngOnInit(): void {
  }

  SaveData() {
    this.userId =localStorage.getItem('_id')
    this.form.value.UserID=this.userId
    let user = this.userId
    if (this.form.invalid) return;

    this.addvictimpatientService.createForm( this.form.value,user)
    .subscribe( ( result:any ) => {
      this.form.reset( {} );
      this.router.navigateByUrl(`/viewpatientform/${result._id}`)
     console.log(result);
     this._snackBar.open('Uploaded Successfully','',{
      verticalPosition:'top',
     // horizontalPosition:'center',
      panelClass:'edit'
    })
     });
  }
}
