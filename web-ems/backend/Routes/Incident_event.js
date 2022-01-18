const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  event= require('../DataModels/Incidentevent.model')
const IncidenteventController= require('../controller/incident_event')

//Get List of event reports
router.get('/list', IncidenteventController.incidentevent_get_list);

//Creating  a new document within the collection
router.post('/create',IncidenteventController.incidentevent_create);

//Get event file
router.get("/:id",IncidenteventController.incidentevent_get_one);

router.delete('/:eventID',IncidenteventController.incidentevent_delete_one);

module.exports = router
