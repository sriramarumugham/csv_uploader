require('dotenv').config();

const mongoose=require('mongoose');

mongoose.set('strictQuery', true);

console.log(process.env.DB_CONNECT);

// mongoose.connect(process.env.DB_CONNECT).then(()=>{
    
mongoose.connect("mongodb+srv://sriram_arumugham:%21ifeisBeauti5ul@cluster0.6z5scin.mongodb.net/test?retryWrites=true&w=majority").then(()=>{

    
    console.log("Atlas DB connected")
}).catch(err=>{
    console.log("mongod db failed to connect", err );
})

const db=mongoose.connection;

db.on('error' ,function(){ console.log("Couldnt connet mongoose to db ")});

db.once('open' , function(){console.log("Mongoose connected to the db")});
    