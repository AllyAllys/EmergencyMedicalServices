const mongoose = require("mongoose")



const ambulanceSchema= new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    DispatcherID:
    { type: mongoose.SchemaTypes.ObjectId,
      ref:"ems_dispatcher",

    },
    Name:{
      type:String

    },

    coordinates:[{
      type:String

    }],

    Driver: {
        type:String,

    },
    DateTime:{
        type:Date,
        default: () => Date.now(),
    }

});

module.exports=mongoose.model("ambulance_information",ambulanceSchema)
