import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MissingService} from './add-form.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute} from '@angular/router';
import {missingperson} from '../missingpersondashboard/missingpersondashboard.model'

@Component({
  selector: "app-add-form",
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})


export class AddFormComponent implements OnInit {

  images:any;
  productImage=[];



  constructor(private missingService: MissingService,
              private _snackBar: MatSnackBar,
              public route: ActivatedRoute,
              private http:HttpClient ) {}

 form = new FormGroup({
 Firstname: new FormControl('',Validators.required),
 Surname: new FormControl('',Validators.required),
 Age: new FormControl('',Validators.required),
 Gender : new FormControl('',Validators.required),
 Height: new FormControl('',Validators.required),
 Street: new FormControl('',Validators.required),
 City: new FormControl('',Validators.required),
 ZipCode: new FormControl('',Validators.required),
 Person_Descript: new FormControl('',Validators.required),
 productImage: new FormControl(null,Validators.required)
  });



 ngOnInit(): void {
 }



select(event:any){
  if(event.target.files.length >0){
    const productImage = event.target.files;

  }
}



SaveData() {
  const formData = new FormData();

  for(let img of this.productImage){
    formData.append('productImage', img);
  }

    this.http.post<any>('http://localhost:3000/api/Missingpersondashboard/create', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

  //if (this.form.invalid) return;

  //this.missingService.createForm( this.form.value)
  //.subscribe( ( result ) => {
  //  this.form.reset( {} );
  //  console.log(result);
  //});
}
}

