const mongoose = require('mongoose');

const ScheduleSchema= new mongoose.Schema
({
  _id: mongoose.Schema.Types.ObjectId,
  UserID: {
      type: mongoose.SchemaTypes.ObjectId,
  },

  Assignedtask:{
    type:String,


  },

  Firstname:{
    type:String,


  },

  Surname:{
    type:String,


  },
  Street:{
    type:String,

  },

   City:{
      type:String,

    },

   ZipCode:{
       type: Number
    },
    Task:{
      type:String,


    },

    Dateassigned:{
      type:String,


  },
  ModifiedDate:{
    type:Date,
    default: () => Date.now(),
  },


})


module.exports= mongoose.model("schedules",ScheduleSchema)
