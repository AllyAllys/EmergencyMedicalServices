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
               private updateservice:UpdateService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
      this.userId = data['id'];
      console.log(data);

    });

    if(this.userId){
      this.updateservice.deleteUser(this.userId).subscribe(data=>{
      console.log(data);
      })

    }
  }

}
