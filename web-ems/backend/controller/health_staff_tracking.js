const mongoose = require ('mongoose')
const  healthtracking= require('../DataModels/Health_staff_tracking.model')

exports.health_get_list =  function(req, res, next)
{
 healthtracking.find(function(err,   healthtrackingresponse){
     if(err)
     res.send(err);
     else
     res.send(  healthtrackingresponse);
   })
}

exports.health_create = (req,res,next)=>
{
    const tracking =  new healthtracking ({
        _id: mongoose.Types.ObjectId(),
        FirstID:req.body.FirstID,
        EmerID:req.body.EmerID,
        UserID:req.body.UserID,
        Street:req.body.Street,
        City:req.body.City,
        ZipCode:req.body.ZipCode,
        Firstname:req.body.Firstname,
        Surname:req.body.Surname,
        PhoneNo:req.body.PhoneNo
    });
    tracking
    .save()
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot create form');
    });

}

exports.health_get_one= function(req,res,next)
{
    healthtracking.findOne({_id:req.params.id})

    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot health tracking information');
    });
}

exports.healthtracking_update =function(req,res,next)
{
    const id = req.params.updateUser;
    healthtracking.updateOne({_id: id},{$set:{Street:req.body.Street,City:req.body.City,ZipCode:req.body.ZipCode,PhoneNo:req.body.PhoneNo,Firstname:req.body.Firstname,Surname:req.body.Surname}})
    .exec()
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot update form');
    });

}

exports.healthtracking_delete_one = function(req,res,next)
{
  healthtracking.deleteOne({_id:req.params.ambulanceID})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Health staff tracking information deleted!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}
