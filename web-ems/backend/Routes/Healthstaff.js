const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  Healthstaff= require('../DataModels/Healthstaff.model')
const HealthstaffController = require('../controller/healthstaff')

//Get  Healthstaff listing
router.get('/list', HealthstaffController.healthstaff_get_list);

//Creating new  Healthstaff users
router.post('/create',HealthstaffController.healthstaff_create);

//Get a specific health staff Information
router.get("/:id",HealthstaffController.healthstaff_get_one);

router.delete('/:userId',HealthstaffController.healthstaff_delete_one);

module.exports = router