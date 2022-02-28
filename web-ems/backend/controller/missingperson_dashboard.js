const mongoose = require ('mongoose');
const Missingperson_dashModel = require('../DataModels/Missingperson_dash.model');
const   missingperson= require('../DataModels/Missingperson_dash.model')

exports.missingperson_get_list = function(req, res, next)
{
missingperson.find(function(err, missingpersonresponse){
     if(err)
     res.send(err);
     else
     res.send( missingpersonresponse);
   })
}

exports.missingperson_get_one = function(req,res,next)
{
    missingperson.findOne({_id:req.params.id})

    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot find missing person form');
    });
}

/*exports.missingperson_post_create = (req,res,next)=>
{
    const tracking =  missingperson ({
        _id: mongoose.Types.ObjectId(),
        PublicID:req.body.PublicID,
        LawID:req.body.LawID,
        Firstname:req.body.Firstname,
        Surname:req.body.Surname,
        Gender:req.body.Gender,
        Age:req.body.Age,
        Height:req.body.Height,
        Street:req.body.Street,
        City:req.body.City,
        ZipCode:req.body.ZipCode,
        Person_Descript:req.body.Person_Descript,
        PersonPicture: req.file.path,


    });
    tracking
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
        message:"Missing Person form is successfully uploaded.",


        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });


}
*/
/*exports.missingperson_post_create = async (req,res)=>{

  const{Firstname}=req.body;
  const{Surname}=req.body;
  const{Age}= req.body;
  const{Gender}=req.body;
  const{Height}= req.body;
  const{Street}= req.body;
  const{City}=req.body;
  const{ZipCode}=req.body;
  const{Person_Descript}=req.body;
  const productImage = 'http://localhost:3000/images/' + req.file.filename;


  const missingperson = new Missingperson_dashModel({
    Firstname,
    Surname,
    Age,
    Gender,
    Height,
    Street,
    City,
    ZipCode,
    Person_Descript,
    productImage,
  });
  const createdProfile = await missingperson.save();
  res.status(201).json({
    missingperson:{
      ...createdProfile._doc,
    },
  });

};
*/

exports.missingperson_post_create = (req,res,next)=>{
  console.log(req.file);

  const tracking =  missingperson ({
    _id: mongoose.Types.ObjectId(),
    PublicID:req.body.PublicID,
    LawID:req.body.LawID,
    UserID:req.body.UserID,
    Firstname:req.body.Firstname,
    Surname:req.body.Surname,
    Gender:req.body.Gender,
    Age:req.body.Age,
    Height:req.body.Height,
    Street:req.body.Street,
    City:req.body.City,
    ZipCode:req.body.ZipCode,
    Person_Descript:req.body.Person_Descript,
   productImage:req.files.map(productImage=>productImage.path)



});
tracking
.save()
.then(result =>{
    console.log(result);
    res.status(201).json({
    message:"Missing Person form is successfully uploaded.",


    })
})
.catch(err =>{
    console.log(err);
    res.status(500).json({
        error:err
    });
});


}

exports.missingperson_put_update = function(req,res,next){
    const id = req.params.updateUser;
    missingperson.updateOne({_id: id},{$set:{Firstname:req.body.Firstname,Surname:req.body.Surname,Gender:req.body.Gender,Age:req.body.Age,Height:req.body.Height,Street:req.body.Street,City:req.body.City,ZipCode:req.body.ZipCode,Person_Descript:req.body.Person_Descript}})
    .exec()
    .then(result=>{
        console.log(result);
      res.status(200).json({
          message:"Missing Person Form updated!"
      })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });

}

exports.missingperson_delete_one = function(req,res,next){
    missingperson.deleteOne({_id:req.params.id})
       .exec()
       .then(result=>{
           console.log(result);
         res.status(200).json({
             message:"Missing person form deleted!"
         })
       })
       .catch(err=>{
           console.log(err);
           res.status(500).json({
               error:err
           });
       });
   }
