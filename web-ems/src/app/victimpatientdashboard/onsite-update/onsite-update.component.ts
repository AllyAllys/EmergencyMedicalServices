import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UpdateformService } from '../update-victimpatient/update-victimpatient.service';
import { ViewPatientService } from '../view-patientvictim/view-patient.servicevictim';

@Component({
  selector: 'app-onsite-update',
  templateUrl: './onsite-update.component.html',
  styleUrls: ['./onsite-update.component.css']
})
export class OnsiteUPDATEComponent implements OnInit {
  form = new FormGroup({
    Firstname: new FormControl('',Validators.required),
    Surname: new FormControl('',Validators.required),
    DOb:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
    Gender: new FormControl('',Validators.required),
    IDNumber: new FormControl('',Validators.required),
    PhoneNo: new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode: new FormControl('',Validators.required),
    Contactfirstname: new FormControl('',Validators.required),
    Contactsurname: new FormControl('',Validators.required),
    Relationship: new FormControl('',Validators.required),
    Contact: new FormControl('',Validators.required),

  });
  message:boolean = false;
  constructor(private activatedroute:ActivatedRoute, private updateservice:UpdateformService, private viewpatientservice:ViewPatientService  , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.viewpatientservice. onsiteviewpatientForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.form = new FormGroup({
        Firstname: new FormControl(result ['Firstname'],Validators.required),
        Surname:new FormControl(result['Surname'],Validators.required),
        DOb:new FormControl(result['DOb'],Validators.required),
        Email:new FormControl(result['Email'],Validators.required),
        Gender: new FormControl(result['Gender'],Validators.required),
        IDNumber:new FormControl(result['IDNumber'],Validators.required),
        PhoneNo: new FormControl(result['PhoneNo'],Validators.required),
        Street:new FormControl(result['Street'],Validators.required),
        City:new FormControl(result['City'],Validators.required),
        ZipCode: new FormControl(result['ZipCode']),
        Contactfirstname: new FormControl(result['Contactfirstname'],Validators.required),
        Contactsurname: new FormControl(result['Contactsurname'],Validators.required),
        Relationship: new FormControl(result['Relationship'],Validators.required),
        Contact: new FormControl(result['Contact'],Validators.required),



      });

    });
  }

  OnsiteUpdateData() {

    console.log(this.form.value);
    this.updateservice.onsiteupdateform(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
      console.log(result);
      this._snackBar.open('Patient Form is successfully Updated');

    })




  }
  removeMessage() {

  }



}
