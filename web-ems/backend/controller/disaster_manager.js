const mongoose = require ('mongoose')
const manager= require('../DataModels/Disaster_managers.model')

exports.disastermanager_get_list= function(req, res, next) {
    manager.find(function(err, managerresponse){
      if(err)
      res.send(err);
      else
      res.status(200).json,
      res.send({Count: managerresponse.length, managerUsers: managerresponse});
    })
}

exports.disastermanager_create =function(req,res,next){
    let newManager = new manager({
        _id: mongoose.Types.ObjectId(),
        UserID: mongoose.Types.ObjectId(req.user_id)
    })

    newManager.save(function(err,newManager){
    if(err)
       res.send(err);
       else
       res.status(200).json,
       res.send({
            message:'Disaster Manager created',Managerdetail:newManager

       })
    
    })
}

exports.disastermanager_get_one = function(req,res){
    manager.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.disastermanager_delete_one = function(req,res,next){
    manager.deleteOne({_id:req.params.userId})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"The Disaster Manager is deleted"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}