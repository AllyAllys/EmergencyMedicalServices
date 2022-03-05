const mongoose = require ('mongoose')
const incidentDash= require('../DataModels/Incident_dashboard.model')

exports.incidentdashboard_list = function(req, res, next)
{
 incidentDash.find(function(err, incidentDashresponse){
      if(err)
      res.send(err);
      else
      res.status(200).json,

      res.send(incidentDashresponse);
    })
}
exports.incidentchart=(req, res, next)=>
{
incidentDash.find({})
     .then(docs =>{
       console.log(docs);
       res.status(200).json(docs);

     })
     .catch((error)=> console.log(error))
}

exports.incidentdashboard_get_one = function(req,res,next)
{
    incidentDash.findOne({_id:req.params.id})

    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot find incident information.');
    });
}

exports.incidentdashboard_create = (req,res,next)=>
{
    const tracking =  new incidentDash ({
        _id: mongoose.Types.ObjectId(),
        PublicID:req.body.PublicID,
        LawID:req.body.LawID,
        UserID:req.body.UserID,
        EventID:req.body.EventID,
        Subject:req.body.Subject,
        Other:req.body.Other,
        Street:req.body.Street,
        City:req.body.City,
        ZipCode:req.body.ZipCode,
        PhoneNo:req.body.PhoneNo,
        Incident_Des:req.body.Incident_Des,
        Incident_Date:req.body.Incident_Date,
        productImage:req.files.map(productImage=>productImage.path)

    });
    tracking
    .save()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>console.log(err));
   res.status(200).json({
        message:"Incident report is uploaded successfully.",
        tracking: tracking
    })

}

exports.incidentUPDATE=function(req,res,next){
  const id = req.params.updateUser;
  incidentDash.updateOne({_id: id},{$set:{
    Subject:req.body.Subject,
    Street:req.body.Street,
    City:req.body.City,
    ZipCode:req.body.ZipCode,
    PhoneNo:req.body.PhoneNo,
    Incident_Des:req.body.Incident_Des,
    Incident_Date:req.body.Incident_Date

  }})
  .exec()
  .then(function(dbuser)
      {

          res.send(dbuser);
      })
      .catch(function(err){
          res.send('Cannot update form');
      });

}

exports.incidentdashboard_delete_one = function(req,res,next)
{
 incidentDash.deleteOne({_id:req.params.incidentID})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Incident report deleted!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}
