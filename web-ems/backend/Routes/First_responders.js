const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  responder= require('../DataModels/First_responders.model')
const firstresponderController= require ('../controller/first_responder')

//Get first responder listing
router.get('/list',firstresponderController.firstresponder_get_list );

//Creating new first responder users
router.post('/create',firstresponderController.firstresponder_create);


//Get a specific first  Information
router.get("/:id",firstresponderController.firstresponder_get_one);

//Get delete a document 
router.delete('/:userId',firstresponderController.firstresponder_delete_one);

module.exports = router