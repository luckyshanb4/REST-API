const express = require('express');
const Restursnt = require('../resturant_manager/resturant');
const { body, validationResult } = require('express-validator/check');
const uuid = require('uuid');

const router=express.Router();


/**
 * @swagger
 * get:
 *  description: Use to request all orders 
 *  responses:
 *      description: orders array
 */
router.get("/orders",function(req,res){
    res.send(Restursnt.getOrders());
   
})


/**
 * @swagger
 * post:
 *  description: Use add an order as a post request
 *  responses:
 *  '200':
 *      description: successful operation
 * '400':
 *      description: Unsuccessful operation
 */
router.post(
    '/orders',
    // ordered food item should be non empty
    body('itemName').isLength({ min: 3 }),
    // ordered person name should be non empty
    body('orderedBy').isLength({ min: 3 }),
    // ordered quantity is a number greater than 0
    body('quantity').isInt({ min: 1}),
    // unit price is greater than 0.5 usd
    body('unitPrice').isFloat({min:.5}),

        (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          console.log(errors);
        return res.status(400).json({ errors: errors.array() });
      }

      //Add created date
      let ts = Date.now();

      let date_ob = new Date(ts);
      let date = date_ob.getDate();
      let month = date_ob.getMonth() + 1;
      let year = date_ob.getFullYear();
      

      req.body.createdDate=year + "-" + month + "-" + date;

      //generate and assign unique id to order
      req.body.orderId=uuid.v1();
  
      //if everything of we add the order to list
      Restursnt.addOrder(req.body);
      return res.status(200);
      
    },
  );

  module.exports=router;