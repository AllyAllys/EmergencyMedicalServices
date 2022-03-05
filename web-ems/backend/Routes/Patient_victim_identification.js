const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const   patient= require('../DataModels/Patient_victim_identification.model')
const PatientController = require ('../controller/patient_victim_identification')

//Get List of patient information forms
router.get('/list',PatientController.patientvictim_get_list );

router.get('/victimchart',PatientController.patientChart_list);

router.get("/:id",PatientController.patientvictim_get_one);

//Creating  a new document within the collection

router.post('/create',PatientController.patientvictim_post_create);

router.put('/:updateUser',PatientController.patientvictim_update);


router.delete('/:patientID',PatientController.patientvictim_delete_one);


module.exports = router
