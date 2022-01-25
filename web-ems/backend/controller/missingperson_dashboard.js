const mongoose = require ('mongoose')
const   missingperson= require('../DataModels/Missingperson_dash.model')

exports.missingperson_get_list = function(req, res, next)
{
missingperson.find(function(err, missingpersonresponse){
     if(err)
     res.send(err);
     else
     res.send( missingpersonresponse);
   })
}

exports.missingperson_get_one = function(req,res,next)
{
    missingperson.findOne({_id:req.params.id})

    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot find missing person form');
    });
}

exports.missingperson_post_create = (req,res,next)=>
{
    const tracking =  missingperson ({
        _id: mongoose.Types.ObjectId(),
        PublicID:req.body.PublicID,
        LawID:req.body.LawID,
        Firstname:req.body.Firstname,
        Surname:req.body.Surname,
        Gender:req.body.Gender,
        Age:req.body.Age,
        Height:req.body.Height,
        Street:req.body.Street,
        City:req.body.City,
        ZipCode:req.body.ZipCode,
        Person_Descript:req.body.Person_Descript,
        PersonPicture:req.body.PersonPicture

    });
    tracking
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
        message:"Missing Person form is successfully uploaded.",


        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });


}

exports.missingperson_put_update = function(req,res,next){
    const id = req.params.updateUser;
    missingperson.updateOne({_id: id},{$set:{Firstname:req.body.Firstname,Surname:req.body.Surname,Gender:req.body.Gender,Age:req.body.Age,Height:req.body.Height,Person_Descript:req.body.Person_Descript}})
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

exports.missingperson_delete_one = function(req,res,next){
    missingperson.deleteOne({_id:req.params.id})
       .exec()
       .then(result=>{
           console.log(result);
         res.status(200).json({
             message:"Missing person form deleted!"
         })
       })
       .catch(err=>{
           console.log(err);
           res.status(500).json({
               error:err
           });
       });
   }
