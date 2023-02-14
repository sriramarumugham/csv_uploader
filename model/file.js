const mongoose=require('mongoose');

const multer=require('multer');

// const path=require('path');

// const FILE_PATH=path.join('/uploads/users/files');

const FileSchema= new mongoose.Schema({
    file:{
        type:String
    }
},{
    timestamps:true
})

const File=mongoose.model('File' , FileSchema);

module.exports=File;