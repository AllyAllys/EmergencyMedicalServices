import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  userId:string = '';
  userDetails:any;

  constructor(private activatedroute:ActivatedRoute, private userservice:UsersService) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(data =>{
      this.userId = data['id']
      console.log(data)
    })
    this.userservice.viewForm(this.userId).subscribe(data =>{
      this.userDetails = data;
      console.log
    })
  }

}
