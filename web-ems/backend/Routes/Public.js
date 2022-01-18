const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const  public= require('../DataModels/Public.model')
const PublicController = require ('../controller/public')

//Get Disaster  public listing
router.get('/list',PublicController.public_get_list);

//Creating new  public user
router.post('/create',PublicController.public_post_create);

//Get a specific public Information
router.get("/:id",PublicController.public_get_one);

router.delete('/:userId',PublicController.public_delete_one);

module.exports = router