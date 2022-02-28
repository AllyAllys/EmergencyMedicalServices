const mongoose = require("mongoose")



const healthstafftrackingSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    Street:{
    type:String,
  required:true
  },

    City:{
     type:String,
    required:true },

     ZipCode:{
     type: Number},

    Firstname:{
        type: String,
        required: true
    },
    Surname:{
        type: String,
        required: true

    },
    PhoneNo:{
        type:String,
        required: true
    },

    Entered_Date:{
        type:Date,
        default: () => Date.now(),
    },
    FirstID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"first_responders",


    },
    EmerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"emergency_responders",

    },
    UserID:{
      type: mongoose.SchemaTypes.ObjectId,

    }

})

module.exports= mongoose.model("health_staff_trackingdash",healthstafftrackingSchema)
