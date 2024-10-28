import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AuthRouter from './Routes/AuthRoutes.js';


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


app.get('/auth',AuthRouter)


app.listen(PORT , ()=>{
    console.log('Server is running on port ', PORT);
    
})