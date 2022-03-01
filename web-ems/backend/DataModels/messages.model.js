const mongoose = require('mongoose');

const msgSchema= new mongoose.Schema({
  user:{
    type:String,

  },
  message:{
    type:String,

  },
  ModifiedDate:{
    type:Date,
    default: () => Date.now(),
},



})


const Msg = mongoose.model('msg',msgSchema);
module.exports= Msg;
