const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  dispatcher= require('../DataModels/Ems_dispatcher.model')
const EmsdispatcherController = require('../controller/ems_dispatcher')

//Get Disaster  dispatcher listing
router.get('/list',EmsdispatcherController.emsdispatcher_get_list);


//Creating new Disaster  dispatcher users
router.post('/create',EmsdispatcherController.emsdispatcher_create);



//Get a specific Admin Information
router.get("/:id",EmsdispatcherController.emsdispatcher_get_one);

router.delete('/:userId',EmsdispatcherController.emsdispatcher_delete_one);

module.exports = router