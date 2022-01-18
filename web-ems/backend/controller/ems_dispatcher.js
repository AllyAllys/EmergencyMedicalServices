const mongoose = require ('mongoose')
const  dispatcher= require('../DataModels/Ems_dispatcher.model')

exports.emsdispatcher_get_list= function(req, res, next) {
    emer_model.find(function(err, emer_modelresponse){
      if(err)
      res.send(err);
      else
      res.status(200).json,
      res.send({ Count: emer_modelresponse.length, emergencyusers: emer_modelresponse});
    })
}


exports.emsdispatcher_create =function(req,res,next){
    let newdispatcher = new  dispatcher({
        _id: mongoose.Types.ObjectId(),
        UserID: mongoose.Types.ObjectId(req.user_id)
    })

    newdispatcher.save(function(err,newdispatcher){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS dispatcher created',dispatcherdetail:newdispatcher 

       })
    
    })

}

exports.emsdispatcher_get_one = function(req,res)
{
  dispatcher.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.emsdispatcher_delete_one = function(req,res,next){
    dispatcher.deleteOne({_id:req.params.userId})
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
