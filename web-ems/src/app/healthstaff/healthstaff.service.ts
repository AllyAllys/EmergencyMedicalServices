
import { Injectable } from '@angular/core';
import {healthstaff} from '../healthstaff/healthstaff.model';
import { Subject } from 'rxjs';
import { throws } from 'assert';

@Injectable({providedIn:'root'})
export class PostsService{
  private posts: healthstaff[] = [];
  private postsUpdated = new Subject <healthstaff[]>()


  getPosts(){
    return [...this.posts];
  }

  getPostUpdate(){
    return this.postsUpdated.asObservable()
  }
  addPost(Street:string,City:string,ZipCode:number,Firstname:string,Surname:string,PhoneNo:string){
    const post: healthstaff ={Street:Street,City:City,ZipCode:ZipCode,Firstname:Firstname,Surname:Surname,PhoneNo:PhoneNo};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);

  }
}
