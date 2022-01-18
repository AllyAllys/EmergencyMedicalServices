const express = require('express')
const router = express.Router()
const HealthtrackingController= require('../controller/health_staff_tracking')

//Get health tracking list
router.get('/list',HealthtrackingController.health_get_list);
//Creating  a new document within the collection
router.post('/create',HealthtrackingController.health_create);
//Get  specific information
router.get("/:id",HealthtrackingController.health_get_one);
//Updating and existing document in the collection
router.put('/:updateUser',HealthtrackingController.healthtracking_update);
//Deleting an existing document in the collection
router.delete('/:ambulanceID',HealthtrackingController.healthtracking_delete_one);

module.exports = router
