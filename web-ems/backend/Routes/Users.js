const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const User_model= require('../DataModels/Users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin_model= require('../DataModels/Admins.model')
const UsersController = require ('../controller/users')

//Get Users listing
router.get('/list',UsersController.users_get_list );

//Search for User based on their Id
router.get("/:id",UsersController.users_get_one);

//Registration 
router.post('/signup',UsersController.users_signup);

//User Login
router.post('/login',UsersController.users_login)


/* router.post('/:updateAdmin',function(req,res,next){
    const id = req.params.updateAdmin;

    User_model.find({Userclass: "Admin"})
    .exec()
    .then(user=>
        {
         if (user.length<1){
            return res.status(401).json({
                message:'Authorization failed'
            });
        }
     })

     const newUsers = new Admin_model({

     // _id :req.body._id,
      UserID: req.params.updateAdmin

     });
     newUsers
     .save()
     .then(result =>
        {
         console.log(result);
         res.status(201).json({
             message:"New Admin created"
         });
     })
     
     .catch(err=>
        {
         console.log(err);
         res.status(500).json
         ({
             error:err
         });
        
        });
        
});
*/ 
//Change Password 
//LOOK into further 
    

//Update Admin users Username and Email Address
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!REVIEW!!!!!!
router.put('/:updateUser',UsersController.users_put_update);

//Delete User 
router.delete('/:userId',UsersController.users_delete_one);

//router.delete('/logout',(req,res)=> {
  //  req.logOut()
    //req.redirect('/login')
//})


module.exports = router
