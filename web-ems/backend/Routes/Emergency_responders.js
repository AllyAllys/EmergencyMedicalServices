const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const emer_model= require('../DataModels/Emergency_responders.model')
const EmergencyresponderController = require('../controller/emergency_responder')

//Get Disaster emer_model listing
router.get('/list',EmergencyresponderController.Emergencyresponders_get_list);


//Creating new Disaster emer_model users
router.post('/create',EmergencyresponderController.Emergencyresponders_create);



//Get a specific Admin Information
router.get("/:id",EmergencyresponderController.Emergencyresponders_get_one);

router.delete('/:userId',EmergencyresponderController.Emergencyresponders_delete_one);

module.exports = router