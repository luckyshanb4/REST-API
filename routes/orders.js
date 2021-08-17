const express = require('express');
const Restursnt = require('../resturant_manager/resturant');
const { body, validationResult } = require('express-validator/check');

const router=express.Router();


router.get("/orders",function(req,res){
    res.send(Restursnt.getOrders());
})


router.post(
    '/orders',
    // ordered food item should be non empty
    body('itemName').isLength({ min: 3 }),
    // ordered person name should be non empty
    body('orderedBy').isLength({ min: 3 }),
    // ordered quantity is a number greater than 0
    // body('quantity').isLength({ min: 5 }),
        (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      //if everything of we add the order to list
      Restursnt.addOrder(req.body);
      return res.status(200);
      
    },
  );

  module.exports=router;