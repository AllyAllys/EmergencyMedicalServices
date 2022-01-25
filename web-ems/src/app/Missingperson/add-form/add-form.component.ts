import { Component, OnInit } from '@angular/core';
import {MissingService} from './add-form.service';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {missingperson} from "../missingpersondashboard/missingpersondashboard.model"

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  isLoading = false;



  constructor(private missingService: MissingService,
              private _snackBar: MatSnackBar,
              public route: ActivatedRoute ) {}


              ngOnInit(): void {



              }

  onForm (form:NgForm){
    if(form.invalid){
      this._snackBar.open('Unable to create form')
      return;
    }
    this.missingService.createForm(form.value.Firstname,form.value.Surname,form.value.Gender,form.value.Age,form.value.Height,form.value.Street,form.value.City,form.value.ZipCode,form.value.Person_Descript);
    this._snackBar.open('Missing person Form is successfully Created');

  }



}
