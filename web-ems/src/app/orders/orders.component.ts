import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from './orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  form = new FormGroup({

    UserID:new FormControl(''),
    Firstname:new FormControl('',Validators.required),
    Surname: new FormControl('',Validators.required),
    //Status: new FormControl(''),
    Item_Quantity: new FormControl('',Validators.required),
    PhoneNo:new FormControl('',Validators.required),
    ItemName:new FormControl('',Validators.required),
    ItemDescription:new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),

    });
  userId: any;

  constructor(private orderservice:OrderService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  SaveData() {

    if (this.form.invalid) return;

    this.userId =localStorage.getItem('_id')
    this.form.value.UserID=this.userId
   let user = this.userId

    this.orderservice.addorderForm( this.form.value,user)
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
