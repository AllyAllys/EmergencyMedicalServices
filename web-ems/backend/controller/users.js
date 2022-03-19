const mongoose = require ('mongoose')
const User_model= require('../DataModels/Users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.users_get_list = function(req, res, next)// Get all users to display on table.
{
    User_model.find(function(err, usersresponse){
      if(err)
      res.send(err);
      else
      res.send(usersresponse);
    })
}
exports.getuserschart=function(req, res, next)   //Chart Route to get all users
{
    User_model.find({})
    .then(docs =>{
      console.log(docs);
      res.status(200).json(docs);

    })
    .catch((error)=> console.log(error))
}

exports.users_get_one = function(req,res,next) //Find each user by their ID
{
    User_model.findOne({_id:req.params.id})

    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.users_signup = function(req,res,next)   //Sign up
{
    User_model.find({Email: req.body.Email})
    .exec()
    .then(users => {
        if(users.length >=1)
        {
            return res.status(409).json({
                message: "Email Address is already taken"
            });
        }
        User_model.find({Username: req.body.Username})
    .exec()
    .then(users => {
        if(users.length >=1)
        {
            return res.status(409).json({
                message: "Username is taken."
            });
        }

        else
        {
            bcrypt.hash(req.body.Password,10,(err,hash)=>
            {
                if(err)
                {
                    return res.status(500).json
                    ({
                        error:err
                    });
                } else{

            const newUsers = new User_model({
                 _id: mongoose.Types.ObjectId(),
                Username:req.body.Username,
                Userclass:req.body.Userclass,
                Firstname:req.body.Firstname,
                Lastname:req.body.Lastname,
                Requestedrole:req.body.Requestedrole,
                Password:hash,
                Email:req.body.Email,
                DateJoined:req.body.DateJoined

            });

           newUsers
           .save()
           .then(function(dbuser)
           {

               res.send(dbuser);
           })
           .catch(function(err){
               res.send('Cannot create form');
           });
        }
    });
}
    });
  });
}

exports.users_login = (req,res,next)=>{
    User_model.find({Username: req.body.Username,Userclass:req.body.Userclass})

    .exec()
    .then(user=>{

        if (user.length<1){
            return res.status(401).json({
                message:'Authorization failed'
            });
        }

        bcrypt.compare(req.body.Password, user[0].Password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    message:'Authorization Failed'
                });
            }
            if (result){
                const token = jwt.sign(
               {
                    Username: user[0].Username,
                    _id:user[0]._id,
                    Userclass:user[0].Userclass,
                    Firstname:user[0].Firstname,
                    Lastname:user[0].Lastname
                },
                "secret",
                {
                    expiresIn: "8h"
                }
                );

                return res.status(200).json({
                    message:"Authorization sucessful",
                    token: token
                });
            }
            res.status(401).json({
                message:"Authorization Failed"
            });
        });

    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.users_put_update = function(req,res,next)
{
    const id = req.params.updateUser;
    User_model.updateOne({_id: id},{$set:{Username:req.body.Username,Userclass:req.body.Userclass,Firstname:req.body.Firstname,Lastname:req.body.Lastname,Email:req.body.Email,Password:req.body.Password,Requestedrole:req.body.Requestedrole}})
    .exec()
    .then(function(dbuser)
      {

          res.send(dbuser);
      })
      .catch(function(err){
          res.send('Cannot update form');
      });

}



exports.users_delete_one = function(req,res,next)
{
    User_model.deleteOne({_id:req.params.userId})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"The User is deleted"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}
