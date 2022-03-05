const { exec } = require('child_process');
const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const item_model= require('../DataModels/Medicalsupplies_itemrequest.model')
const order_model = require('../DataModels/Medicalsupplies_order.model')
const itemrequestController = require ('../controller/medicalsupplies_itemrequests')

//Get Item Requests
router.get('/list', itemrequestController.itemrequest_get_list);

router.get('/itemchart',itemrequestController.itemchart_list);



//Create Item request and if Order ID is not found from medicalsupplies_order an error is prompted.
router.post('/create',itemrequestController.itemrequest_post_create);


//Get Information on one item request
router.get("/:id",itemrequestController.itemrequest_get_one);

//Update Item Request
router.put('/:updateUser',itemrequestController.itemrequest_put_update);

//Delete Item request
router.delete('/:ItemId',itemrequestController.itemrequest_delete_one);


module.exports = router
