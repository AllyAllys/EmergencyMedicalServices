const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  volunteer= require('../DataModels/Volunteer.model')
const VolunteerController = require('../controller/volunteer')

//Get Disaster  volunteer listing
router.get('/list',VolunteerController.volunteer_get_list );

//Creating new  volunteer users
router.post('/create',VolunteerController.volunteer_post_create);

//Get a specific Admin Information
router.get("/:id",VolunteerController.volunteer_get_one);

router.delete('/:userId',VolunteerController.volunteer_delete_one);
module.exports = router