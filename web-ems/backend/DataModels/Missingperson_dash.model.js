const mongoose = require("mongoose")



const MissingPersonSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    LawID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"lawenforcement"
    },
    PublicID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"publics"
    },
    Firstname:{
        type:String,
        required: true
    },
    Surname:{
        type:String,
       required: true

    },
    Gender:{
        type:String,
        required: true,
    },
    Age:String,
    Height:String,

    Street:{
      type:String,
      required:true
    },

    City:{
      type:String,
      required: true
    },

    ZipCode:String,

    Person_Descript:{
        type:String,
       required:true


    },
    DateTime:{
        type:Date,
        default: () => Date.now(),
    },

    productImage:{
     type:[String]

    }


});

module.exports=mongoose.model("missingperson_dash",MissingPersonSchema)
