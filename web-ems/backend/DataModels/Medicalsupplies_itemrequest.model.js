const mongoose = require("mongoose")

const MedicalSuppliesItemRequestSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    OrderID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"medicalsupplies_order",

    },
    UserID:{
      type:mongoose.SchemaTypes.ObjectId
    },

    Item_Quantity:{
        type:Number,
        required:true
    },
    PhoneNo:{
        type:String,
        required: true
    },
    ItemName:{
      type:String,
      required:true,
    },
    ItemDescription:{
      type:String,
      required:true
    },
    Street:{
      type:String,
      required:true
    },
    City:{
      type:String,
      required:true
    },
    ZipCode:{
      type:Number
    },

    UploadDate:{
      type:Date,
      default: () => Date.now(),
  },

})
module.exports= mongoose.model("medicalsupplies_itemrequests",MedicalSuppliesItemRequestSchema)
