const express=require('express');

const router=express.Router();

router.get('/' , function(req, res){

console.log(req.url);


return res.render("home");

})

module.exports=router;