
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


let userList = new Map();

io.on('join', function(data){
//joining
socket.join(data.room);

console.log(data.user + 'joined the room : ' + data.room);

socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
});

io.on('connection', (socket) => {
console.log('Second server new Connection');
  let userName = socket.handshake.query.userName;
  addUser(userName, socket.id);

  socket.broadcast.emit('user-list', [...userList.keys()]);
  socket.emit('user-list', [...userList.keys()]);

  socket.on('message', (msg) => {
    const message= new Msg({msg,userName});
     message.save().then(()=>{
       io.emit('message')

     })
      socket.broadcast.emit('message-broadcast', {message: msg, userName: userName});
  })

  socket.on('disconnect', (reason) => {
      removeUser(userName, socket.id);
  })
});





function addUser(userName, id) {
  if (!userList.has(userName)) {
      userList.set(userName, new Set(id));
  } else {
      userList.get(userName).add(id);
  }
}

function removeUser(userName, id) {
  if (userList.has(userName)) {
      let userIds = userList.get(userName);
      if (userIds.size == 0) {
          userList.delete(userName);
      }
  }
}

http.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running ${process.env.PORT || 4000}`);
});
