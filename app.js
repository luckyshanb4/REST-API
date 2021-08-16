const express=require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/orders",function(req,res){
    res.send("<h1> Test </h1>");
})

app.post("/orders",function(req,res){
    console.log(req.body);
})


app.listen(process.env.PORT || 3000,function(){
    console.log("Server started on port 3000 successfully")
})