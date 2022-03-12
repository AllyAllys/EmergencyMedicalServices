import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddincidentService } from './addincident.service';
import {PieService} from '../../statistics/piechart/piechart.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addincidentform',
  templateUrl: './addincidentform.component.html',
  styleUrls: ['./addincidentform.component.css']
})
export class AddincidentformComponent implements OnInit {
  userId: string;
  images:any;
  productImage=[];
  imageData:any;
  picture:any;

  constructor(private addincidentservice:AddincidentService, private _snackBar: MatSnackBar, private users:PieService,private http:HttpClient,private router:Router) { }

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
    productImage: new FormControl(null)


    });

  ngOnInit(): void {
   // this.users.Incidents()
   // .subscribe(res=>{
    //  console.log(res);
  //  })

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
       this.userId =localStorage.getItem('_id')
      }



  SaveData() {

    const formData = new FormData();
    formData.append('UserID',this.userId)
    formData.append('productImage', this.images);
    formData.append('Subject',this.form.value.Subject);
    formData.append('Other',this.form.value.Other);
    formData.append('Street',this.form.value.Street);
    formData.append('City',this.form.value.City);
    formData.append('ZipCode',this.form.value.ZipCode);
    formData.append('PhoneNo',this.form.value.PhoneNo);
    formData.append('Incident_Des',this.form.value.Incident_Des);
    formData.append('Incident_Date',this.form.value.Incident_Date);

    this.http.post<any>('http://localhost:3000/api/incidentdashboard/create', formData).subscribe((d)=>{
      console.log(d);

      this.form.reset();

      this._snackBar.open('Uploaded Successfully','',{
        verticalPosition:'top',
       // horizontalPosition:'center',
        panelClass:'edit'
      })

      this.router.navigateByUrl(`/viewincidentform/${d._id}`)

    });



  }


  showAddress = true;
  showPhone = true;

  toggleVisibility(event) {
const selectedValue = event.target.value;
if(selectedValue=="Other"){
  this.showAddress = true;

}else{
   this.showAddress = false;

}
  }

}
