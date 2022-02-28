const mongoose = require("mongoose")


const onsitePatientVictimIdentificationSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    VolunteerID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"volunteers"
    },
    HealthStaffID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"healthstaffs"
    },
    UserID:{
      type: mongoose.SchemaTypes.ObjectId,

    },
    Firstname:{
        type:String,
        required:true,

    },
    Surname:{
        type:String,
        required:true

    },
    DOb:{
        type:String,
        required:true

    },
    Email:String,
    Gender:{
        type:String,
        required:true

    },
    IDNumber:{
        type:Number,
        required:true

    },
    PhoneNo:{
        type:String,
        required:true,


    },
    InjuryDescription:String,
    InjuryTreatment:String,

    ModifiedDate:{
        type:Date,
        default: () => Date.now(),
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

    MedicalProviders:{
    type:String,
    //required:true
    },

    Ambulance:{
      type:String,
      //required:true
    },

    Contactfirstname:{
      type:String,
      //required:true
    },
    Contactsurname:{
      type:String,
      //required:true
    },
    Relationship:{
      type:String,
     // required:true
    },
    Contact:{
      type:String,
      //required:true
    }

});

module.exports=mongoose.model("onsitepatient_victim_identifications",onsitePatientVictimIdentificationSchema)
