
const mongoose= require('mongoose')
const Msg= require('./backend/DataModels/messages.model')
const express = require('express');
const cors = require('cors');
const app = express();

const http = require('http').createServer(app);

mongoose.connect("mongodb://localhost/EMS",()=>{
    console.log("Database Connected")
},
e=> console.error(e))
const io = require('socket.io')(http, {
  cors: {
      origin: '*'
  }
});
/*

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
*/
 io.on('connection',(socket)=>{

     console.log('new connection made.');


     socket.on('join', function(data){
      var date= new Date().toLocaleTimeString();

       //joining
       socket.join(data.room);

       console.log(data.user + 'joined the room : ' + data.room);

       socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:' has joined this room.',date:date});
     });


     socket.on('leave', function(data){
      var date= new Date().toLocaleTimeString();

       console.log(data.user + 'left the room : ' + data.room);

       socket.broadcast.to(data.room).emit('left room', {user:data.user, message:' has left this room.',date:date});

       socket.leave(data.room);
     });

     socket.on('message',function(data){
      var date= new Date().toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric',hour:'numeric',minute:'numeric'});
       const message = new Msg({user:data.user,message:data.message,date:date})
       message.save().then(()=>{
      io.in(data.room).emit('new message', {user:data.user, message:data.message,date:date});

       })


     })
 });



http.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running ${process.env.PORT || 4000}`);
});
