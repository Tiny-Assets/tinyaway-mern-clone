import client from "../database.js";

// Fetch ALL Generic TinyAway Listings
export async function tinyStoriesAll() {
    const stories = await client.db("ta_listings").collection("stories").find({}).toArray();
    return stories; 
  }

// Fetch 8 Generic TinyAway Listings
export async function tinyStories8() {
  const stories = await client.db("ta_listings").collection("stories").find({}).limit(8).toArray();
  return stories; 
}