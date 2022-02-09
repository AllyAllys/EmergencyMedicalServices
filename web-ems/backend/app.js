
const mongoose = require('mongoose');
const express = require('express');
const cors = require ('cors');
const path = require ('path');
const app = express()
const bodyParser = require('body-parser');
var morgan = require('morgan');






//const io = socketio(server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Cors middleware
app.use(cors())

//Body Parser
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());



//Connecting to MongoDB
mongoose.connect("mongodb://localhost/EMS",()=>{
    console.log("Database Connected")
},
e=> console.error(e))
app.use('/images', express.static('images'));
app.use('/uploads',express.static('uploads'));

//Mongoose Schema Models
const chatroom = require("./DataModels/chatroom.model")
const Users = require("./DataModels/Users.model")
const Admin = require("./DataModels/Admins.model")
const Ambulance_Information = require("./DataModels/Ambulance_Information.model")
const Chatbox = require("./DataModels/Chatboxs.model")
const Disaster_manager= require("./DataModels/Disaster_managers.model")
const emergency_responder= require("./DataModels/Emergency_responders.model")
const ems_dispatcher= require("./DataModels/Ems_dispatcher.model")
const First_responders = require("./DataModels/First_responders.model")
const health_staff_tracking = require("./DataModels/Health_staff_tracking.model")
const Healthstaff= require("./DataModels/Healthstaff.model")
const incident_dashboard= require("./DataModels/Incident_dashboard.model")
const incidentevent= require("./DataModels/Incidentevent.model")
const itemdescription= require("./DataModels/Itemdescription.model")
const lawenforcement= require("./DataModels/Lawenforcement.model")
const medicalsupplies_itemrequest = require("./DataModels/Medicalsupplies_itemrequest.model")
const medicalsupplies_order=require("./DataModels/Medicalsupplies_order.model")
const missingperson_dash=require("./DataModels/Missingperson_dash.model")
const patient_victim_identifications= require("./DataModels/Patient_victim_identification.model")
const publics= require("./DataModels/Public.model")
const volunteers= require("./DataModels/Volunteer.model")
const onsitepatient_victim_identifications = require("./DataModels/Onsitevictimpatient.model")
const Msg= require('./DataModels/messages.model')
//Routes
const Chatrooms = require('./Routes/chatroom')
const Admins= require('./Routes/Admins')
const Ambulance= require('./Routes/Ambulance_Information')
const Manager = require('./Routes/Disaster_managers')
const Emergencyresponder= require('./Routes/Emergency_responders')
const Dispatcher = require('./Routes/Ems_dispatcher')
const Firstresponder= require('./Routes/First_responders')
const Healthstafftracking= require('./Routes/Health_staff_tracking')
const staff= require('./Routes/Healthstaff')
const incidentdash= require('./Routes/Incident_dashboard')
const event = require('./Routes/Incident_event')
const Missingperson= require('./Routes/Missingperson_dash')
const patient = require('./Routes/Patient_victim_identification')
const public = require('./Routes/Public')
const volunteer= require('./Routes/Volunteer')
const User = require('./Routes/Users')
const Order = require('./Routes/Medicalsupplies_order')
const Items = require('./Routes/Medicalsupplies_itemrequest')
const Itemdescription= require('./Routes/Itemdescription')
const law = require('./Routes/Lawenforcement')
const Onsitevictictimpatient = require('./Routes/onsitepatientvictim')

//Http
app.use ('/Chat',Chatrooms)
app.use('/Admins',Admins)
app.use('/Ambulancetracking',Ambulance)
app.use('/Disastermanager',Manager)
app.use('/Emergencyresponders',Emergencyresponder)
app.use('/EMSdispatcher',Dispatcher)
app.use('/Firstresponder',Firstresponder)
app.use('/Healthstafftracking',Healthstafftracking)
app.use('/Healthstaff',staff)
app.use('/api/incidentdashboard',incidentdash)
app.use('/Event',event)
app.use('/api/Missingpersondashboard',Missingperson)
app.use('/api/Patientvictiminformation',patient)
app.use('/PublicUser',public)
app.use('/Lawenforcement',law)
app.use('/VolunteerUser',volunteer)
app.use('/api/users',User)
app.use('/Orders',Order)
app.use('/Itemrequests',Items)
app.use('/Itemdescriptions',Itemdescription)
app.use('/api/onsitepatientvictiminformation',Onsitevictictimpatient)


//app.use('/images', express.static(path.join('images')));



// setup of the view engine
app.set('view engine','ejs')
app.set('views',__dirname + '/views')


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use(morgan('dev'));
/* Chat code
 io.on('connection',socket=>{
    console.log('New connection...')
    socket.emit('message','Welcome to Chatbox');
    socket.broadcast.emit('message','A user has joined the conversation!');

    socket.on('disconnect',()=>{
        io.emit('message', 'User has left the conversation')
    });
});

*/

//Server
 //app.listen(3000)




app.use (express.static('public'))
/*
run()
async function run(){
 const file = await incident_dashboard.find()
 .populate("PublicID")
  console.log(file)
}
*/
//ERRORS

app.use((req,res,next)=>{
    const error = new Error ('Not found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });


});
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
