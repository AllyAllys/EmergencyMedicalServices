const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const incidentDash= require('../DataModels/Incident_dashboard.model')
const IncidentdashboardController = require('../controller/incident_dashboard')


//Get List of incident reports
router.get('/list',IncidentdashboardController.incidentdashboard_list);

router.get("/:id",IncidentdashboardController.incidentdashboard_get_one);

//Creating  a new document within the collection
router.post('/create',IncidentdashboardController.incidentdashboard_create);

//Get incident file


router.delete('/:incidentID',IncidentdashboardController.incidentdashboard_delete_one);


module.exports = router
