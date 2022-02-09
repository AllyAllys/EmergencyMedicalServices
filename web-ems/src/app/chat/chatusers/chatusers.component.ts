import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chatusers',
  templateUrl: './chatusers.component.html',
  styleUrls: ['./chatusers.component.css']
})
export class ChatusersComponent
{

  @Output() userNameEvent = new EventEmitter<string>();

  userName = '';

  setUserName(): void {
    this.userNameEvent.emit(this.userName);
  }


}
