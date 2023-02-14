const mongoose=require('mongoose');


const FileSchema= new mongoose.Schema({
    file:{
        type:String
    }
},{
    timestamps:true
})

const File=mongoose.model('File' , FileSchema);

module.exports=File;