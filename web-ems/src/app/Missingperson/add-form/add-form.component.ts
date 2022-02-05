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

export class AddFormComponent implements OnInit
{
  images:any;
  productImage=[];
  imageData:any;
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
  {
    const file = (event.target as HTMLInputElement).files;
    this.form.patchValue({ productImage: file});
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      if(file){
      reader.readAsDataURL(file[0]);
      }
    }
    const productImage = event.target.files[0];
    this.images=productImage;
    console.log(productImage)


     }
   }

   SaveData(){

    const formData = new FormData();
    formData.append('productImage', this.images);

    this.http.post<any>('http://localhost:3000/api/Missingpersondashboard/create', formData).subscribe((d)=>{
      console.log(d);
    });

   }
}
