// import all packages as required 
import { config } from 'dotenv'; 
import express from 'express'; 
import listings from './routes/listings.js'; 

// load environment variables from .env file + declaring port 
config(); 
const port = process.env.PORT; 

// express app 
const app = express(); 

// middleware
app.use(express.json()); 

// routes 
app.use('/api/listings', listings); 

//listen for requests
app.listen( port, () => {
    console.log('Listen ok'); 
}); 


