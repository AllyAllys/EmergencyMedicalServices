const mongoose = require ('mongoose')
const  Healthstaff= require('../DataModels/Healthstaff.model')

exports.healthstaff_get_list =function(req, res, next)
{
  Healthstaff.find(function(err,  Healthstaffresponse)
  {
      if(err)
      res.send(err);
      else
      res.status(200).json,
      res.send({ Count:  Healthstaffresponse.length,  HealthstaffUser: Healthstaffresponse});
    })
}

exports.healthstaff_create = function(req,res,next)
{
    let newHealthstaff = new  Healthstaff({
        _id: mongoose.Types.ObjectId(),
        UserID:mongoose.Types.ObjectId(req.user_id)
    })

    newHealthstaff.save(function(err,newHealthstaff){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS Healthstaff created',Healthstaffdetail:newHealthstaff

       })

    })

}
exports.healthstaff_get_one =function(req,res)
{
  Healthstaff.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.healthstaff_delete_one = function(req,res,next)
{
    Healthstaff.deleteOne({_id:req.params.userId})
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

