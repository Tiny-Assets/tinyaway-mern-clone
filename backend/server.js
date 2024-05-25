// import all packages as required 
import { config } from 'dotenv'; 
import express from 'express'; 
import listings from './routes/listings.js'; 
import mongoose from 'mongoose'; 

// load environment variables from .env file + declaring port 
config(); 
const port = process.env.PORT; 
const mongoURI = process.env.MONGO_URI; 

// express app 
const app = express(); 

// middleware
app.use(express.json()); 

// routes 
app.use('/api/listings', listings); 

//connect to MongoDB Atlas 
mongoose.connect(mongoURI)
    .then(() => {
        //listen for requests
        app.listen( port, () => {
            console.log('Connected to Atlas + Listening for Requests'); 
        }); 
    })
    .catch((error) => {
        console.log(error); 
    }); 



