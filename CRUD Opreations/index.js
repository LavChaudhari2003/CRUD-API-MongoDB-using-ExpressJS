const express = require("express");
const mongoose = require('mongoose');
const connectDB = require('./db');
const users = require("./router/user")
const app = express();
const port = 3000;


//body parser
app.use(express.json());

// connect with MongoDB
connectDB();

// load routers
app.use('/api',users);

app.get('/',(req,res)=>{
    console.log("Inside the get request");
    res.send("Response from get API");
})

app.listen(port, () => {
  console.log(`Lav app listing on port ${port}`);
});
