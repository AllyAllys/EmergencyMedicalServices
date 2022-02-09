const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const Chatroom = require('../DataModels/chatroom.model')


router.post("/chatroom",async (req,res)=>{
    const {name} = req.body;

    const nameRegax = /^[A-Za-z\s]+$/;
    if(!nameRegax.test(name))throw "Chatroom name can only be alaphets";

    const chatroomExists = await Chatroom.findOne({name});
    if (chatroomExists) throw "Chatroom name already exists";

    const chatroom = new Chatroom({
        _id: mongoose.Types.ObjectId(),
        name:req.body.name,
    });
    await chatroom.save();
    res.json({
        message:"Chatroom created!",
});
});

module.exports = router

