const mongoose = require ('mongoose')
const item_model= require('../DataModels/Medicalsupplies_itemrequest.model')
const order_model = require('../DataModels/Medicalsupplies_order.model')

exports.itemrequest_get_list = function(req, res, next)
{
    item_model.find(function(err, itemresponse){
        if(err)
        res.send(err);
        else
        res.send( itemresponse);
      })
}
exports.itemrequest_get_one = function(req,res,next){
  item_model.findOne({_id:req.params.id})

  .then(function(dbuser)
  {

      res.send(dbuser);
  })
  .catch(function(err){
      res.send('Item request not found!');
  });
}


exports.itemchart_list =(req, res, next)=>
{
  item_model.find({})
     .then(docs =>{
       console.log(docs);
       res.status(200).json(docs);

     })
     .catch((error)=> console.log(error))
}

/*
exports.itemrequest_post_create = function(req,res,next)
{
    order_model.findById(req.body.OrderID)
    .then(order =>{
       if(!order) {
           return res.status (404).json({
              message:"Order not found!"
           });
        }
        const items= new item_model
        ({
            _id: mongoose.Types.ObjectId(),
            OrderID: req.body.OrderID,
            Item_Quantity: req.body.Item_Quantity,
            PhoneNo:req.body.PhoneNo,
            ItemName:req.body.ItemName,
            ItemDescription:req.body.ItemDescription,
            Street:req.body.Street,
            City:req.body.City,
            ZipCode:req.body.ZipCode
        });
        return items.save();

    })
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message:"Item request stored."
        })

    })
    .catch(err=>
        {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });


}
*/
exports.itemrequest_post_create = function(req,res,next)
{
  const items= new item_model
        ({
            _id: mongoose.Types.ObjectId(),
            OrderID: req.body.OrderID,
            UserID:req.body.UserID,
            Status:req.body.Status,
            Firstname:req.body.Firstname,
            Surname:req.body.Surname,
            Item_Quantity: req.body.Item_Quantity,
            PhoneNo:req.body.PhoneNo,
            ItemName:req.body.ItemName,
            ItemDescription:req.body.ItemDescription,
            Street:req.body.Street,
            City:req.body.City,
            ZipCode:req.body.ZipCode
        });
  items
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



exports.itemrequest_put_update= function(req,res,next)
{
    const id = req.params.updateUser;
    item_model.updateOne({_id: id},{$set:{
      Item_Quantity:req.body.Item_Quantity,
      ItemDescription:req.body.ItemDescription,
      Status:req.body.Status,
      Street:req.body.Street,
      City:req.body.City,
      ZipCode:req.body.ZipCode,
      PhoneNo:req.body.PhoneNo}})
    .exec()
    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot update  form');
    });

}

exports.itemrequest_delete_one = function(req,res,next){
    item_model.deleteOne({_id:req.params.ItemId})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Item request Deleted!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}
