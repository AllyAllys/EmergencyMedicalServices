import { OrderService } from './../orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute, private order:OrderService, private _snackBar: MatSnackBar) { }
  form = new FormGroup({
    Status: new FormControl(''),
    Firstname:new FormControl('',Validators.required),
    Surname: new FormControl('',Validators.required),
    Item_Quantity: new FormControl('',Validators.required),
    PhoneNo:new FormControl('',Validators.required),
    ItemName:new FormControl('',Validators.required),
    ItemDescription:new FormControl('',Validators.required),
    Street:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    ZipCode:new FormControl('',Validators.required),

    });
    message:boolean = false;

  ngOnInit(): void {
    this.order.ordersForm(this.activatedroute.snapshot.params['id']) .subscribe((result:any)=>{
      console.log(result);
      this.form = new FormGroup({
        Status:new FormControl(result['Status']),
        Item_Quantity: new FormControl(result['Item_Quantity']),
        PhoneNo: new FormControl(result['PhoneNo'],Validators.required),
        ItemName:new FormControl(result['ItemName'],Validators.required),
        ItemDescription: new FormControl(result['ItemDescription'],Validators.required),
        Street:new FormControl(result['Street'],Validators.required),
        City:new FormControl(result['City'],Validators.required),
        ZipCode:new FormControl(result['ZipCode'],Validators.required)


      });

    });


  }

  UpdateData() {

    console.log(this.form.value);
    this.order.updateform(this.activatedroute.snapshot.params['id'],this.form.value).subscribe((result)=>{
      console.log(result);
      this._snackBar.open('Updated Successfully','',{
        verticalPosition:'top',
       // horizontalPosition:'center',
        panelClass:'edit'
      })

    })
  }


}
