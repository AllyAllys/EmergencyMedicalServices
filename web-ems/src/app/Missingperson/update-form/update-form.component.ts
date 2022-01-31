import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {UpdateService} from './update-form.service';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  userId:string = '';
  constructor(private activatedRoute:ActivatedRoute,
               private updateservice:UpdateService,
               private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id'];
      console.log(data);

    });

    if(this.userId)
   {
      this.updateservice.deleteUser(this.userId).subscribe(data=>
     {
        this._snackBar.open('Missing Person Form Deleted Successfully')
        console.log(data);
      });
    }
    else{
      this._snackBar.open('Unable to delete missing person form')
    }
  }

}
