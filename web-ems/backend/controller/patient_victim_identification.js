const mongoose = require ('mongoose')
const   patient= require('../DataModels/Patient_victim_identification.model')

exports.patientvictim_get_list = function(req, res, next)
{
 patient.find(function(err, patientresponse){
      if(err)
      res.send(err);
      else
      res.send( patientresponse);
    })
}

exports.patientvictim_get_one = function(req,res,next)
{
    patient.findOne({_id:req.params.id})

    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot patient form');
    });
}

exports.patientvictim_post_create = (req,res,next)=>{
    const tracking =  new patient ({
        _id: mongoose.Types.ObjectId(),
        VolunteerID:req.body.VolunteerID,
        Firstname:req.body.Firstname,
        Surname:req.body.Surname,
        DOb:req.body.DOb,
        Email:req.body.Email,
        Gender:req.body.Gender,
        IDNumber:req.body.IDNumber,
        PhoneNo:req.body.PhoneNo,
        InjuryDescription:req.body.InjuryDescription,
        InjuryTreatment:req.body.InjuryTreatment,
        Street:req.body.Street,
        City:req.body.City,
        ZipCode:req.body.ZipCode,
        MedicalProviders:req.body.MedicalProviders,
        Ambulance:req.body.Ambulance,
        Contactfirstname:req.body.Contactfirstname,
        Contactsurname:req.body.Contactsurname,
        Relationship:req.body.Relationship,
        Contact:req.body.Contact

    });
    tracking
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
        message:"Patient/Victim Form is Successfully Uploaded",

        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });


}

exports.patientvictim_update = function(req,res,next)
{
    const id = req.params.updateUser;
    patient.updateOne({_id: id},{$set:{Firstname:req.body.Firstname,
      Surname:req.body.Surname,Gender:req.body.Gender,
      DOb:req.body.DOb,
      Email:req.body.Email,
      IDNumber:req.body.IDNumber,
      PhoneNo:req.body.PhoneNo,
      InjuryDescription:req.body.InjuryDescription,
      InjuryTreatment:req.body.InjuryTreatment,
      Street:req.body.Street,City:req.body.City,
      ZipCode:req.body.ZipCode,
      MedicalProviders:req.body.MedicalProviders,
      Ambulance:req.body.Ambulance
    }})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Missing Person Form updated!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });

}

exports.patientvictim_delete_one = function(req,res,next)
{
 patient.deleteOne({_id:req.params.patientID})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Patient form deleted!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}
