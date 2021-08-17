const express=require("express");
const bodyParser = require("body-parser");

const app=express();

//swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Resturantt API",
        description: "Resturantt API Information",
        contact: {
          name: "Luckyshan Bandara"
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['./routes/*.js']
    apis: ["./routes/orders.js"],
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//import routes
const postRoutes = require('./routes/orders');

app.use(bodyParser.urlencoded({extended: true}));

//route middleware
app.use(postRoutes);

//please comment below lines if you trying to test via Jest
app.listen(process.env.PORT || 3000,function(){
    console.log("Server started on port 3000 successfully")
})

//unomment below line for Jest testing
//and use npm run test:watch command to test
//module.exports = app