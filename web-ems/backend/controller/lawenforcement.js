const mongoose = require ('mongoose')
const  law = require('../DataModels/Lawenforcement.model')

exports.lawenforcement_get_list = function(req, res, next) 
{
  law.find(function(err,  lawresponse){
      if(err)
      res.send(err);
      else
      res.status(200).json,
      res.send({ Count:  lawresponse.length,  lawUser: lawresponse});
    })
}

exports.lawenforcement_create = function(req,res,next){

    let newlaw = new  law({
        _id: mongoose.Types.ObjectId(),
        UserID: mongoose.Types.ObjectId(req.user_id)

    })

    newlaw.save(function(err,newlaw){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS law created',lawdetail:newlaw 

       })
    
    })

}

exports.lawenforcement_get_one = function(req,res)
{
  law.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.lawenforcement_delete_one = function(req,res,next)
{
    law.deleteOne({_id:req.params.userId})
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
