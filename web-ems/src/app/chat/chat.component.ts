import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as io from 'socket.io-client';
import {ChatService} from './chat.service'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[ChatService]

})
export class ChatComponent {
  @Output() userNameEvent = new EventEmitter<string>();

  ngOnInit(): void {

  }
 date=Date.now();
  user:any;
  room:any;
  messageText:any;
  messageArray:Array<{user:String,message:String,date:String}> = [];

  constructor(private _chatService:ChatService, private _snackbar:MatSnackBar){
    this._chatService.newUserJoined().subscribe(data=> this.messageArray.push(data));

    this._chatService.userLeftRoom().subscribe(data=>this.messageArray.push(data));

    this._chatService.newMessageReceived().subscribe(data=>this.messageArray.push(data));
  }




  join(){
    this._chatService.joinRoom({user:this.user, room:this.room,date:this.date});
    this._snackbar.open('You Joined the Conversation','',{
      verticalPosition:'top',
     // horizontalPosition:'center',
      panelClass:'edit'
    })
  }

  leave(){
    this._chatService.leaveRoom({user:this.user, room:this.room,date:this.date});
    this._snackbar.open('You have left the room','',{
      verticalPosition:'top',
     // horizontalPosition:'center',
      panelClass:'edit'
    })
  }

  sendMessage(){
    this._chatService.sendMessage({user:this.user, room:this.room, message:this.messageText,date:this.date});
    console.log(this.date)

  }





}
