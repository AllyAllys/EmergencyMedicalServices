import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {


  constructor(private activatedroute:ActivatedRoute, private usersservice:UsersService, private _snackBar: MatSnackBar) { }
  form = new FormGroup({

    Username: new FormControl('',Validators.required),
    Userclass:new FormControl('',Validators.required),
    Firstname:new FormControl('',Validators.required),
    Lastname:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required),



  });
  message:boolean = false;

  hide = true;

  ngOnInit(): void {
    this.usersservice.viewForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.form = new FormGroup({
        Username: new FormControl(result ['Username'],Validators.required),
        Userclass:new FormControl(result['Userclass'],Validators.required),
        Firstname:new FormControl(result['Firstname'],Validators.required),
        Lastname: new FormControl(result['Lastname']),
        Email: new FormControl(result['Email'],Validators.required),
        Password:new FormControl(result['Password'],Validators.required),


      });

    });
  }
  UpdateData() {

    console.log(this.form.value);
    this.usersservice.updateform(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
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
