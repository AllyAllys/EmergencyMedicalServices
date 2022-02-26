const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const onsitePatientController = require ('../controller/onsitepatientvictim')
const   onsitepatient= require('../DataModels/Onsitevictimpatient.model')

//Get List of patient information forms
router.get('/list',onsitePatientController.onsitepatientvictim_get_list);

router.get('/onsitechart',(req, res, next)=>
{
  onsitepatient.find({})
     .then(docs =>{
       console.log(docs);
       res.status(200).json(docs);

     })
     .catch((error)=> console.log(error))
});


router.get("/:id",onsitePatientController.onsitepatientvictim_get_one);

//Creating  a new document within the collection

router.post('/create',onsitePatientController.onsitepatientvictim_post_create);

router.put('/:updateUser',onsitePatientController.onsitepatientvictim_update);


router.delete('/:patientID',onsitePatientController.onsitepatientvictim_delete_one);


module.exports = router
