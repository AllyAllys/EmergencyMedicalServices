const mongoose = require("mongoose")

const ambulanceSchema= new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    DispatcherID:
    { type: mongoose.SchemaTypes.ObjectId,
      ref:"ems_dispatcher",

    },
    UserID:{
      type: mongoose.SchemaTypes.ObjectId,

    },
    name:String,

    Driver:{
      type:String

    },

    coordinates:{
      type:[Number]

    },

    DateTime:{
        type:Date,
        default: () => Date.now(),
    }

});

module.exports=mongoose.model("ambulance_information",ambulanceSchema)
