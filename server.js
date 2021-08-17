const express=require("express");
const bodyParser = require("body-parser");

const app=express();

//import routes
const postRoutes = require('./routes/orders');

app.use(bodyParser.urlencoded({extended: true}));

//route middleware
app.use(postRoutes);


app.listen(process.env.PORT || 3000,function(){
    console.log("Server started on port 3000 successfully")
})