import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor(private usersservice:UsersService, private _snackBar: MatSnackBar) { }

  form = new FormGroup({

    Username: new FormControl('',Validators.required),
    Userclass:new FormControl('',Validators.required),
    Firstname:new FormControl('',Validators.required),
    Lastname:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required),



  });


  hide = true;

  ngOnInit(): void {
  }

  SaveData() {

    if (this.form.invalid) return;

    this.usersservice.adduserForm( this.form.value)
    .subscribe( ( result ) => {
      this.form.reset( {} );
     console.log(result);
     });
  }

}
