import { Injectable } from "@angular/core";
import {io} from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable()

export class ChatService{

    private socket = io('http://localhost:4000');

    joinRoom(data:any){
        this.socket.emit('join',data);
    }

    newUserJoined(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    leaveRoom(data:any){
        this.socket.emit('leave',data);
    }

    userLeftRoom(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('left room', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data:any){
        this.socket.emit('message',data);
        data=' ';

    }

    newMessageReceived(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
}
