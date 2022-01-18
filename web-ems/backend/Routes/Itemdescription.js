const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const items= require('../DataModels/Itemdescription.model')
const requests= require('../DataModels/Medicalsupplies_itemrequest.model')
const ItemDescriptionController = require ('../controller/item_description')

//List of Item descriptions
router.get('/list', ItemDescriptionController.itemdescription_get_list);

//Create an Item Description with an existing OrderedItemID from MedicalSupplies_ItemRequest
router.post('/create',ItemDescriptionController.itemdescription_post_create);

router.get("/:id",ItemDescriptionController.itemdescription_get_one);

router.put('/:update',ItemDescriptionController.itemdescription_put_update);

//Delete an Order
router.delete('/:itemId',ItemDescriptionController.itemdescription_delete_one);



module.exports = router