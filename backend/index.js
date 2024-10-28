import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


app.get("/ping",(req,res)=>{
    res.send("pong");
})

app.get("/",(req,res)=>{
    res.send("Hello This is the Backend of hackerspace Employee Management System");
})


app.listen(PORT , ()=>{
    console.log('Server is running on port ', PORT);
    
})