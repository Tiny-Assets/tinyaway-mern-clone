import './database.js'; 
import express from 'express'; 
import cors from 'cors'; 
import { call12, findListing, findSearchResults } from './controllers/sampleController.js';

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

// Find ONE specific listing
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

// Return filtered listing results
app.get('/api/search', async (req, res) => {
  try {
    const country = req.query.country;
    const bedrooms = req.query.bedrooms;
    const accommodates = req.query.accommodates;

    // Construct the query based on provided parameters
    const query = {};
      if (country) {
        query['address.country'] = country;
      }
      if (bedrooms) {
        query.bedrooms = parseInt(bedrooms); // Assuming bedrooms is stored as a number in MongoDB
      }
      if (accommodates) {
        query.accommodates = parseInt(accommodates); // Assuming accommodates is stored as a number in MongoDB
      }
    
    const results = await findSearchResults(query); 
    res.json(results); 
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
}
});