import './database.js'; 
import express from 'express'; 
import cors from 'cors'; 
import { testFxn, call12, findListing } from './controllers/sampleController.js';

const app = express(); 
const PORT = process.env.PORT || 4000; 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Port Listening 
app.listen(PORT, () => {
  console.log(`Running port: ${PORT}`); 
})

// Routes
app.get('/', (req, res) => {
  res.send('Testing Now'); 
}); 

// Get 12 listings
app.get('/api/list12', async (req, res) => {
  try {
    const result = await call12(); 
    res.json(result)
} catch (error) {
  // Handle errors appropriately
  console.error(error);
  res.status(500).send('An error occurred');
}
}); 

// Find specific listing
app.get('/api/findHouse', async (req, res) => {
  const listingId = req.query.listingId; 
  
  try {
    const result = await findListing(listingId);
    res.json(result);  
} catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
}
}); 