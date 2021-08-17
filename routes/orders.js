const express = require('express');
const Restursnt = require('../resturant_manager/resturant');

const router=express.Router();


router.get("/orders",function(req,res){
    res.send(JSON.stringify(Restursnt.getOrders()));
})


router.post("/orders",function(req,res){
    
    console.log(req.body);
    Restursnt.addOrder(null);
})

module.exports=router;