import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {AddvictimpatientService} from '../add-victimpatient/add-victimpatient.service'

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  userId: any;

  constructor(private addvictimpatientservice:AddvictimpatientService,private _snackBar: MatSnackBar) { }

  form = new FormGroup({
    UserID:new FormControl(''),
    Firstname: new FormControl('',Validators.required),
    Surname: new FormControl('',Validators.required),
    DOb: new FormControl('',Validators.required),
    Email : new FormControl('',Validators.required),
    Gender: new FormControl('',Validators.required),
    IDNumber: new FormControl('',Validators.required),
    InjuryDescription: new FormControl('',Validators.required),
    PhoneNo: new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),
    Contactfirstname:new FormControl('',Validators.required),
    Contactsurname:new FormControl('',Validators.required),
    Relationship:new FormControl('',Validators.required),
    Contact:new FormControl('',Validators.required),

    });

  ngOnInit(): void {
  }

  SaveData() {

    if (this.form.invalid) return;
    this.userId =localStorage.getItem('_id')
    this.form.value.UserID=this.userId
    let user = this.userId

    this.addvictimpatientservice.addForm( this.form.value,user)
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
