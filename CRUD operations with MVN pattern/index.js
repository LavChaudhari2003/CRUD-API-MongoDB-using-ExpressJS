const express = require("express");
const connectDB = require('./config/db')
const dotenv = require('dotenv');
const productRoutes = require("./routes/productRoutes")
const app = express();


// load env
dotenv.config();

const port = process.env.PORT;


app.use(express.json());

// connect to tha database
connectDB();

 

app.get('/',(req,res)=>{
    console.log("In the get API");
    res.send("From GET API");
});

app.use('/api',productRoutes);  

app.listen(port,()=>{
    console.log("EXample app listing on port:",port);
});