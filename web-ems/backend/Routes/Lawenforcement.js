const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  law= require('../DataModels/Lawenforcement.model')
const lawenforcementController = require('../controller/lawenforcement')

//Get  law listing
router.get('/list', lawenforcementController.lawenforcement_get_list);


//Creating new Disaster  law users
router.post('/create',lawenforcementController.lawenforcement_create);

//Get a specific Admin Information
router.get("/:id",lawenforcementController.lawenforcement_get_one);

router.delete('/:userId',lawenforcementController.lawenforcement_delete_one);

module.exports = router