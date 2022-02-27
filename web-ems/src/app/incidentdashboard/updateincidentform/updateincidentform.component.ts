import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ViewincidentService } from '../viewincidentform/viewincidentform.service';
import { UpdateincidentService } from './updateincident.service';

@Component({
  selector: 'app-updateincidentform',
  templateUrl: './updateincidentform.component.html',
  styleUrls: ['./updateincidentform.component.css']
})
export class UpdateincidentformComponent implements OnInit {


  constructor(private activatedroute:ActivatedRoute, private updateservice:UpdateincidentService, private viewservice:ViewincidentService , private _snackBar: MatSnackBar) { }

  form = new FormGroup({
    Subject: new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),
    PhoneNo:new FormControl('',Validators.required),
    Incident_Des:new FormControl('',Validators.required),
    Incident_Date:new FormControl('',Validators.required),


  });
  message:boolean = false;



  ngOnInit(): void {

    this.viewservice.viewincidentForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);

      this.form = new FormGroup({
        Subject: new FormControl(result ['Subject'],Validators.required),
        Street:new FormControl(result['Street'],Validators.required),
        City:new FormControl(result['City'],Validators.required),
        ZipCode: new FormControl(result['ZipCode']),
        PhoneNo: new FormControl(result['PhoneNo'],Validators.required),
        Incident_Des:new FormControl(result['Incident_Des'],Validators.required),
        Incident_Date:new FormControl(result['Incident_Date'],Validators.required)

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
