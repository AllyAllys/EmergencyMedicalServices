const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const IncidentdashboardController = require('../controller/incident_dashboard')
const incident = require ('../DataModels/Incident_dashboard.model')

//Get List of incident reports
router.get('/list',IncidentdashboardController.incidentdashboard_list);

router.get("/:id",IncidentdashboardController.incidentdashboard_get_one);

//Creating  a new document within the collection
router.post('/create',IncidentdashboardController.incidentdashboard_create);

//Get incident file

router.put('/:updateUser',function(req,res,next){
  const id = req.params.updateUser;
  incident.updateOne({_id: id},{$set:{
    Subject:req.body.Subject,
    Street:req.body.Street,
    City:req.body.City,
    ZipCode:req.body.ZipCode,
    PhoneNo:req.body.PhoneNo,
    Incident_Des:req.body.Incident_Des,
    Incident_Date:req.body.Incident_Date

  }})
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

});


router.delete('/:incidentID',IncidentdashboardController.incidentdashboard_delete_one);


module.exports = router
