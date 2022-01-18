const mongoose = require ("mongoose")

const chatroomSchema = new mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
    
    name:{
        type:String,
        required:true
    },
    
})

module.exports= mongoose.model("chatroom",chatroomSchema)