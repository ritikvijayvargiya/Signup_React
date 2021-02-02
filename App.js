const express=require('express')
const app=express()
const mongoose =require('mongoose')
var cors = require('cors')
app.use(cors())

mongoose.connect("mongodb://localhost/SignupDB",{useNewUrlParser:true,useUnifiedTopology:true});

const db=mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log("Connected to databse"));
app.use(express.json())
const subsRoutes=require('./routes/users')
app.use('/users',subsRoutes)

app.listen(3080,()=>console.log("Server started"));