const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const manager= require('../DataModels/Disaster_managers.model')
const DisastermanagerController= require('../controller/disaster_manager')

//Get Disaster Manager listing
router.get('/list', DisastermanagerController.disastermanager_get_list);


//Creating new Disaster manager users
router.post('/create',DisastermanagerController.disastermanager_create);



//Get a specific Admin Information
router.get("/:id",DisastermanagerController.disastermanager_get_one);

router.delete('/:userId',DisastermanagerController.disastermanager_delete_one);

module.exports = router