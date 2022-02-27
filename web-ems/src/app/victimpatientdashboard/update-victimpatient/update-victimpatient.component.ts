import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewPatientService } from '../view-patientvictim/view-patient.servicevictim';
import { UpdateformService } from './update-victimpatient.service';

@Component({
  selector: 'app-update-victimpatient',
  templateUrl: './update-victimpatient.component.html',
  styleUrls: ['./update-victimpatient.component.css']
})
export class UpdateVictimpatientComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute, private updateservice:UpdateformService, private viewpatientservice:ViewPatientService  , private _snackBar: MatSnackBar) { }
  form = new FormGroup({
    Firstname: new FormControl('',Validators.required),
    Surname: new FormControl('',Validators.required),
    DOb:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
    Gender: new FormControl('',Validators.required),
    IDNumber: new FormControl('',Validators.required),
    PhoneNo: new FormControl('',Validators.required),
    InjuryDescription: new FormControl('',Validators.required),
    InjuryTreatment:new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode: new FormControl('',Validators.required),
    MedicalProviders: new FormControl('',Validators.required),
    Ambulance:new FormControl('',Validators.required)

  });
  message:boolean = false;
  ngOnInit(): void {

    this.viewpatientservice.viewpatientForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.form = new FormGroup({
        Firstname: new FormControl(result ['Firstname'],Validators.required),
        Surname:new FormControl(result['Surname'],Validators.required),
        DOb:new FormControl(result['DOb'],Validators.required),
        Email:new FormControl(result['Email'],Validators.required),
        Gender: new FormControl(result['Gender'],Validators.required),
        IDNumber:new FormControl(result['IDNumber'],Validators.required),
        PhoneNo: new FormControl(result['PhoneNo'],Validators.required),
        InjuryDescription: new FormControl(result['InjuryDescription'],Validators.required),
        InjuryTreatment:new FormControl(result['InjuryTreatment'],Validators.required),
        Street:new FormControl(result['Street'],Validators.required),
        City:new FormControl(result['City'],Validators.required),
        ZipCode: new FormControl(result['ZipCode']),
        MedicalProviders: new FormControl(result['MedicalProviders'],Validators.required),
        Ambulance:new FormControl(result['Ambulance'],Validators.required)

      });

    });
  }

  UpdateData() {

    console.log(this.form.value);
    this.updateservice.updateform(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
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
