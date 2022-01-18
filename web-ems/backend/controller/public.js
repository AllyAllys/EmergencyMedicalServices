const mongoose = require ('mongoose')
const  public= require('../DataModels/Public.model')

exports.public_get_list = function(req, res, next) 
{
  public.find(function(err,  publicresponse){
      if(err)
      res.send(err);
      else
      res.status(200).json,
      res.send({ Count:  publicresponse.length,  publicUser: publicresponse});
    })
}

exports.public_get_one = function(req,res)
{
  public.findOne({_id:req.params.id})
    .populate("UserID")

    .then(function(dbAdmin){

        res.send(dbAdmin);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.public_post_create = function(req,res,next)
{
    let newpublic = new  public({
        _id: mongoose.Types.ObjectId(),
        UserID: mongoose.Types.ObjectId(req.user_id)
    })

    newpublic.save(function(err,newpublic){
    if(err)
       res.send(err);
       else
       res.send({
           status:500, message:'EMS public created',publicdetail:newpublic 

       })
    
    })

}

exports.public_delete_one = function(req,res,next){
    public.deleteOne({_id:req.params.userId})
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