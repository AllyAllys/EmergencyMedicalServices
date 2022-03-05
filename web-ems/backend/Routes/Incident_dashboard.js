const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const IncidentdashboardController = require('../controller/incident_dashboard')
const incident = require ('../DataModels/Incident_dashboard.model')
const multer = require('multer');


const storage = multer.diskStorage({
  destination:function(req,file,cb){
   cb(null,'./uploads/');
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)

  }
 });
 const fileFilter =(req,file,cb)=>{
   //reject a file
   if(file.mimetype === 'productImage/jpg' || file.mimetyoe === 'productImage/png'){
     cb(null,true);
   }else
   { cb(null,false);


   }

 };
 const upload = multer({
   storage:storage,
   limits:{
   fileSize:1024 *1024 *5
 },
   fileFilter: fileFilter
 });


//Get List of incident reports
router.get('/list',IncidentdashboardController.incidentdashboard_list);

router.get('/incidentchart',IncidentdashboardController.incidentchart);

router.get("/:id",IncidentdashboardController.incidentdashboard_get_one);

//Creating  a new document within the collection
router.post('/create',multer({storage:storage}).array('productImage'),IncidentdashboardController.incidentdashboard_create);

//Get incident file

router.put('/:updateUser',IncidentdashboardController.incidentUPDATE);


router.delete('/:incidentID',IncidentdashboardController.incidentdashboard_delete_one);


module.exports = router
