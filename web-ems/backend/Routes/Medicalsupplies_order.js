const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const order_model= require('../DataModels/Medicalsupplies_order.model')
const orderController = require ('../controller/medicalsupplies_order')

//Get Orders
router.get('/list', orderController.medicalsupplies_order_list);
//Create new Order
router.post('/create',orderController.medicalsupplies_order_create);
//Find Order using ObjectId
router.get("/:id",orderController.medicalsuppliesOrder_get_one);

//Update Order
router.put('/:updateUser',orderController.medicalsuppliesOrder_update);

//Delete an Order
router.delete('/:orderId',orderController.medicalsuppliesOrder_delete_one);

module.exports = router