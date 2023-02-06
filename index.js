const express=require('express');

const app=express();

const PORT=8000;

app.set('view engine' , 'ejs');
app.set('views', './views');

app.use('/' , require('./routes'));

app.listen(PORT, function(err){
    if(err){
        console.log("Couldnt start the express app");
        return;
    }
    console.log("Express app running on port", PORT);
})