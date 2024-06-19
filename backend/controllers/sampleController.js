import client from "../database.js";

export async function testFxn() {
    const testFind = await client.db("sample_airbnb").collection("listingsAndReviews").find({}).limit(5).toArray();
    console.log(testFind); 
    return testFind; 
}

export async function call12() {
  const find12 = await client.db("sample_airbnb").collection("listingsAndReviews").find({}).limit(12).toArray(); 
  console.log(find12); 
  return find12; 
}