const mongoose = require("mongoose")

const EmergencyResponderSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users",
       
    }
})

module.exports= mongoose.model("emergency_responders",EmergencyResponderSchema)