const mongoose = require('mongoose');

const msgSchema= new mongoose.Schema({
  user:{
    type:String,

  },
  message:{
    type:String,

  },



})


const Msg = mongoose.model('msg',msgSchema);
module.exports= Msg;
