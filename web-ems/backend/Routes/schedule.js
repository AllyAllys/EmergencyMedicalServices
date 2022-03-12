const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const ScheduleController = require ('../controller/onsitepatientvictim')
const Schedule = require('../DataModels/schedule.model')
//const   onsitepatient= require('../DataModels/Onsitevictimpatient.model')

//Get List of patient information forms
router.get('/list',function(req, res, next)
{
  Schedule.find(function(err, patientresponse){
      if(err)
      res.send(err);
      else
      res.send( patientresponse);
    })
});


router.get("/:id",function(req,res,next)
{
  Schedule.findOne({_id:req.params.id})

    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot patient form');
    });
});

//Creating  a new document within the collection

router.post('/create',(req,res,next)=>{
  const tracking =  new Schedule ({
      _id: mongoose.Types.ObjectId(),
      UserID:req.body.UserID,
      Firstname:req.body.Firstname,
      Surname:req.body.Surname,
      Dateassigned:req.body.Dateassigned,
      Task:req.body.Task,
      Assignedtask:req.body.Assignedtask,
      Street:req.body.Street,
      City:req.body.City,
      ZipCode:req.body.ZipCode,

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

});

router.put('/:updateUser',function(req,res,next)
{
    const id = req.params.updateUser;
    Schedule.updateOne({_id: id},{$set:{
   //  UserID:req.body.UserID,
      Firstname:req.body.Firstname,
      Surname:req.body.Surname,
      Dateassigned:req.body.Dateassigned,
      Assignedtask:req.body.Assignedtask,
      Task:req.body.Task,
      Street:req.body.Street,
      City:req.body.City,
      ZipCode:req.body.ZipCode,
      }})

      .then(function(dbuser)
      {

          res.send(dbuser);
      })
      .catch(function(err){
          res.send('Cannot update  form');
      });


    /*.then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Missing Person Form updated!"
      })
    })
    .catch(err=>{
       // console.log(err);
        res.status(500).json({
            error:err
        });
    });

    */

}
);


router.delete('/:patientID',function(req,res,next){

Schedule.deleteOne({_id:req.params.patientID})
.exec()
.then(result=>{
    console.log(result);
  res.status(200).json({
      message:"Patient form deleted!"
  })
})
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    });
})
})

module.exports = router
