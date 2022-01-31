const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const   missingperson= require('../DataModels/Missingperson_dash.model')
const checkAuth= require('../api/middleware/check-auth')
const missingpersonController = require ('../controller/missingperson_dashboard')

//Get List of incident reports
router.get('/list', missingpersonController.missingperson_get_list);

//find one document of missing person
router.get('/:id',missingpersonController.missingperson_get_one);

//Creating  a new document within the collection
router.post('/create',missingpersonController.missingperson_post_create);

//Update Missing person document
router.put('/:updateUser',missingpersonController.missingperson_put_update);

//Delete missing person document
router.delete('/:id', missingpersonController.missingperson_delete_one);


module.exports = router
