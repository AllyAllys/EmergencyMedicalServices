const mongoose = require ('mongoose')
const order_model= require('../DataModels/Medicalsupplies_order.model')

exports.medicalsupplies_order_list = function(req, res, next) {
    order_model.find(function(err, orderresponse){
        if(err)
        res.send(err);
        else
        res.send({status: 500, Count: orderresponse.length, orders: orderresponse});
      })
}

exports.medicalsupplies_order_create = (req,res,next)=>
{
    const order = order_model({
        _id: mongoose.Types.ObjectId(),
        FirstID: req.body.FirstID,
        Orderstatus: req.body.Orderstatus
    });
    order
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
        message:"The order was created successfully.",
        
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    

}

exports.medicalsuppliesOrder_get_one = function(req,res,next){

    order_model.findOne({_id:req.params.id})
    
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Order not found');
    });
}

exports.medicalsuppliesOrder_update = function(req,res,next){
    const id = req.params.updateUser;
    order_model.updateOne({_id: id},{$set:{Orderstatus:req.body.Orderstatus}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Order is Updated"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
}

exports.medicalsuppliesOrder_delete_one = function(req,res,next){
    order_model.deleteOne({_id:req.params.orderId})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Order Deleted!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}
