import './database.js'; 
import express from 'express'; 
import cors from 'cors'; 
import { tinyAwayListings, tinyAwayListingSummary, getListingDetails, findListing, findSearchResults, getHousePictures,
         getAmenity } from './controllers/listingsController.js';

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

// GET 12 TinyAway Listings (Generic For Now)
app.get('/api/tinyaway12', async (req, res) => {
  try {
    const result = await tinyAwayListings(); 
    res.json(result)
} catch (error) {
  console.error(error);
  res.status(500).send('Tinyaway Mongo Failed');
}
}); 

// GET ONE specific TinyAway Listing Summary
app.get('/api/houseSummary', async (req, res) => {
  const listingId = req.query.listingId; 

  try {
    const details = await tinyAwayListingSummary(listingId); 
    res.json(details);
  } catch (error) {
    console.error(error); 
    res.status(500).send('Tinyaway Summary Mongo Failed'); 
  }
}); 

// GET ONE specific TinyAway Listing Full Details
app.get('/api/houseDetails', async (req, res) => {
  const listingId = req.query.listingId; 

  try {
    const details = await getListingDetails(listingId); 
    res.json(details);
  } catch (error) {
    console.error(error); 
    res.status(500).send('Tinyaway Details Mongo Failed'); 
  }
}); 

// GET IMAGES of a single TinyAway Listing
app.get('/api/housePictures', async (req, res) => {
  const listingId = req.query.listingId; 

  try {
    const images = await getHousePictures(listingId); 
    res.json(images); 
  } catch (error) {
    console.error(error); 
    res.status(500).send('Image Fetching Failed'); 
  }
});

// GET ONE specific listing
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

// GET List of amenities for one tiny house 
app.get('/api/findamenities', async (req, res) => {
  const amenityId = req.query.amenityId;

  try {
    const result = await getAmenity(amenityId);
    res.json(result);  
} catch (error) {
    console.error(error);
    res.status(500).send('No such amenity');
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