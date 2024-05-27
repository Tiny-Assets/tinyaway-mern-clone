import listings from "../models/listingModel";

// GET all listings 
    const allTinyHouses = async (req, res) => {
        const tinyhouses = await listings.find({}); 
    
        // set ok status for successful response
        res.status(200).json(allTinyHouses);
    }
// GET a single listing 

// GET some listings 

// CREATE a single listing (for mock data only)