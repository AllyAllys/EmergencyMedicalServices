const mongoose = require ('mongoose')
const  volunteer= require('../DataModels/Volunteer.model')

exports.volunteer_get_list = function(req, res, next) 
{
  volunteer.find(function(err,  volunteerresponse){
      if(err)
      res.send(err);
      else
      res.status(200).json,
      res.send({Count:  volunteerresponse.length,  volunteerUser: volunteerresponse});
    })
}

exports.volunteer_post_create = function(req,res,next)
{
    let newvolunteer = new  volunteer({
        _id: mongoose.Types.ObjectId(),
        UserID: mongoose.Types.ObjectId(req.user_id)
    })

    newvolunteer.save(function(err,newvolunteer){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS volunteer created',volunteerdetail:newvolunteer 

       })
    
    })

}

exports.volunteer_get_one = function(req,res)
{
  volunteer.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.volunteer_delete_one = function(req,res,next)
{
    volunteer.deleteOne({_id:req.params.userId})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"The User is deleted"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}