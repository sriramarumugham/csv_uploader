require('dotenv').config();

const mongoose=require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.mongodBUrl);

const db=mongoose.connection;

db.on('error' ,function(){ console.log("Couldnt connet mongoose to db ")});

db.once('open' , function(){console.log("Mongoose connected to the db")});
    