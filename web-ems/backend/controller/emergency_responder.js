const emer_model= require('../DataModels/Emergency_responders.model')
const mongoose = require ('mongoose')

exports.Emergencyresponders_get_list =function(req, res, next) {
    emer_model.find(function(err, emer_modelresponse){
      if(err)
      res.send(err);
      else
      res.status(200).json,
      res.send({ Count: emer_modelresponse.length, emergencyusers: emer_modelresponse});
    })
}

exports.Emergencyresponders_create =function(req,res,next){
    let NewResponder = new emer_model({
        _id: mongoose.Types.ObjectId(),
        UserID: mongoose.Types.ObjectId(req.user_id)
    })

    NewResponder.save(function(err,NewResponder){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'Emergency Responder created',EmergencyResponderdetail:NewResponder

       })
    
    })
}

exports.Emergencyresponders_get_one=function(req,res){
    emer_model.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.Emergencyresponders_delete_one = function(req,res,next){
    emer_model.deleteOne({_id:req.params.userId})
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
