import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AddvictimpatientService} from '../add-victimpatient/add-victimpatient.service'
@Component({
  selector: 'app-add-victimpatient',
  templateUrl: './add-victimpatient.component.html',
  styleUrls: ['./add-victimpatient.component.css']
})
export class AddVictimpatientComponent implements OnInit {

  constructor(private addvictimpatientService:AddvictimpatientService) { }

    form = new FormGroup({
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


    });

  ngOnInit(): void {
  }

  SaveData() {

    if (this.form.invalid) return;

    this.addvictimpatientService.createForm( this.form.value)
    .subscribe( ( result ) => {
      this.form.reset( {} );
     console.log(result);
     });
  }
}
