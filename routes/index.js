const express=require('express');

const router=express.Router();

router.get('/' , function(req, res){

console.log(req.url);

res.end("HI FROM BACKEND");

})

module.exports=router;