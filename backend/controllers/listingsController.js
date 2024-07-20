import client from "../database.js";

// Fetch ALL Generic TinyAway Listings
export async function tinyAwayAll() {
  const listings = await client.db("ta_listings").collection("listings").find({}).toArray();
  return listings; 
}

// Fetch 12 Generic TinyAway Listings
export async function tinyAway12() {
  const listings = await client.db("ta_listings").collection("listings").find({}).limit(12).toArray(); 
  return listings; 
}

// Fetch 1 TinyAway Listing Summary
export async function tinyAwayListingSummary(listingId) {
  const listingSummary = await client.db("ta_listings").collection("listings").findOne({ id: parseInt(listingId) }); 
  return listingSummary; 
}

// Fetch ONE TinyAway Listing Details 
export async function getListingDetails(listingId) {
  const listingDetails = await client.db("ta_listings").collection("listingDetails").findOne({ listing_id: parseInt(listingId) }); 
  return listingDetails; 
}

// Fetch Image URLs of TinyAway Listing
export async function getHousePictures(listingId) {
  const imageUrlArray = await client.db("ta_listings").collection("images").find({ listing_id: parseInt(listingId) }).toArray();
  return imageUrlArray; 
}

// Fetch Amenity Name
export async function getAmenity(amenityId) {
  const amenity = await client.db("ta_listings").collection("amenities").findOne({ id: parseInt(amenityId) });
  return amenity.name; 
}

// -------------------------------------------------------------------------------------------- // 
// -------------------------------------------------------------------------------------------- // 
// -------------------------------------------------------------------------------------------- // 
// -------------------------------------------------------------------------------------------- // 

// LISTINGS SEARCH DEMO FILTER - ONLY ABLE TO FILTER BY COUNTRY + ACCOMMODATES FOR NOW // 
export async function findSearchResults(query) {
  let filterResults = []; 

  if (query.country) {
  filterResults = await client.db("ta_listings").collection("listingDetails")
      .find({ country: parseInt(query.country), 
          accommodates: { $gte: parseInt(query.accommodates)}
      })
      .toArray(); 
  } else {
    filterResults = await client.db("ta_listings").collection("listingDetails")
        .find({ accommodates: { $gte: parseInt(query.accommodates) }})
        .toArray(); 
  }

  return filterResults; 
}
