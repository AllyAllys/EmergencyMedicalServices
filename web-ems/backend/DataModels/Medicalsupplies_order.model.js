const mongoose = require("mongoose")

const MedicalSuppliesOrderSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    Orderstatus:{
        type:String,
        required:true
    },

    ItemDescrptionID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"medicalsupplies_itemrequests"
    },
    EmerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"emergency_responders"
    },
    UserID:{
      type: mongoose.SchemaTypes.ObjectId,

    },
    DateOrdered:{
        type:Date,
        default: () => Date.now(),
    },


})

module.exports= mongoose.model("medicalsupplies_order",MedicalSuppliesOrderSchema)
