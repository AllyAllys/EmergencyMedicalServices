import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddincidentService } from './addincident.service';

@Component({
  selector: 'app-addincidentform',
  templateUrl: './addincidentform.component.html',
  styleUrls: ['./addincidentform.component.css']
})
export class AddincidentformComponent implements OnInit {

  constructor(private addincidentservice:AddincidentService) { }

  form = new FormGroup({
    Subject: new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),
    PhoneNo:new FormControl('',Validators.required),
    Incident_Des:new FormControl('',Validators.required),
    Incident_Date:new FormControl('',Validators.required),


    });

  ngOnInit(): void {
  }

  SaveData() {

    if (this.form.invalid) return;

    this.addincidentservice.addincidentForm( this.form.value)
    .subscribe( ( result ) => {
      this.form.reset( {} );
     console.log(result);
     });
  }

}
