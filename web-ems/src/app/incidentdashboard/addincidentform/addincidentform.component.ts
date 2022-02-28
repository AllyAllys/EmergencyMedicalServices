import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddincidentService } from './addincident.service';
import {PieService} from '../../statistics/piechart/piechart.service'
@Component({
  selector: 'app-addincidentform',
  templateUrl: './addincidentform.component.html',
  styleUrls: ['./addincidentform.component.css']
})
export class AddincidentformComponent implements OnInit {
  userId: string;

  constructor(private addincidentservice:AddincidentService, private _snackBar: MatSnackBar, private users:PieService) { }

  form = new FormGroup({

    UserID:new FormControl(''),
    Subject: new FormControl('',Validators.required),
    Other: new FormControl(''),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),
    PhoneNo:new FormControl('',Validators.required),
    Incident_Des:new FormControl('',Validators.required),
    Incident_Date:new FormControl('',Validators.required),


    });

  ngOnInit(): void {
   // this.users.Incidents()
   // .subscribe(res=>{
    //  console.log(res);
  //  })


  }



  SaveData() {

    if (this.form.invalid) return;

    this.userId =localStorage.getItem('_id')
    this.form.value.UserID=this.userId
   let user = this.userId

    this.addincidentservice.addincidentForm( this.form.value,user)
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
