const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/csv_dev');

const db=mongoose.connection;

db.on('error' ,function(){ console.log("Couldnt connet mongoose to db ")});

db.once('open' , function(){console.log("Mongoose connected to the db")});
    