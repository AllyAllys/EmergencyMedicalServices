const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const   missingperson= require('../DataModels/Missingperson_dash.model')
const checkAuth= require('../api/middleware/check-auth')
const missingpersonController = require ('../controller/missingperson_dashboard')

const multer = require('multer');

const storage = multer.diskStorage({
 destination:function(req,file,cb){
  cb(null,'./uploads/');
 },
 filename:function(req,file,cb){
   cb(null,file.originalname)

 }
});
const fileFilter =(req,file,cb)=>{
  //reject a file
  if(file.mimetype === 'productImage/jpg' || file.mimetyoe === 'productImage/png'){
    cb(null,true);
  }else
  { cb(null,false);


  }

};
const upload = multer({
  storage:storage,
  limits:{
  fileSize:1024 *1024 *5
},
  fileFilter: fileFilter
});

//const storage = require('../helpers/storage');

//Get List of incident reports
router.get('/list', missingpersonController.missingperson_get_list);

//find one document of missing person
router.get('/:id',missingpersonController.missingperson_get_one);

//Creating  a new document within the collection

router.post('/create' , multer({storage:storage}).array('productImage'),missingpersonController.missingperson_post_create);

//Update Missing person document
router.put('/:updateUser',checkAuth,missingpersonController.missingperson_put_update);

//Delete missing person document
router.delete('/:id',checkAuth, missingpersonController.missingperson_delete_one);


module.exports = router
