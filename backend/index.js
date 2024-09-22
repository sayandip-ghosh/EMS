const express = require("express");
const app = express();
require("dotenv").config();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// middleware cors
const cors = require("cors");
app.use(cors());

// middleware body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/ping",(req,res)=>{
    res.send("pong");
})

app.get("/",(req,res)=>{
    res.send("Hello This is the Backend of hackerspace Employee Management System");
})


app.listen(PORT , ()=>{
    console.log('Server is running on port ', PORT);
    
})