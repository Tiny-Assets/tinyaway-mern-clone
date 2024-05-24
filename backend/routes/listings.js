import express from 'express'; 

const listings = express.Router(); 

// GET all listings
listings.get('/', (req, res) => {
    res.json({msg: 'GET all listings'}); 
}); 

// GET single listing 
listings.get('/:id', (req, res) => {
    res.json({msg: 'GET single listing'}); 
}); 

export default listings; 