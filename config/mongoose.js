// require('dotenv').config();

const dotenv = require('dotenv').config();

const mongoose=require('mongoose');

mongoose.set('strictQuery', false);

console.log(process.env.DB_CONNECT);

mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log("Atlas DB connected")
}).catch(err=>{
    console.log("mongod db failed to connect", err );
})

const db=mongoose.connection;

db.on('error' ,function(){ console.log("Couldnt connet mongoose to db ")});

db.once('open' , function(){console.log("Mongoose connected to the db")});
    