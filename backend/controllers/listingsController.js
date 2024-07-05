import client from "../database.js";

// Fetch 12 Generic TinyAway Listings
export async function tinyAwayListings() {
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

// Sample airbnb data fetching 
export async function call12() {
  const find12 = await client.db("sample_airbnb").collection("listingsAndReviews").find({}).limit(12).toArray(); 
  console.log(find12); 
  return find12; 
}

export async function findListing(listingId) {
  const findHouse = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({_id: listingId}); 
  return findHouse; 
}

export async function findSearchResults(query) {
  const searchResults = await client.db("sample_airbnb").collection("listingsAndReviews").find(query).toArray();
  return searchResults; 
}
