import client from "../database.js";

export async function testFxn() {
    const testFind = await client.db("sample_airbnb").collection("listingsAndReviews").find({}).limit(5).toArray();

    console.log(testFind); 
    return testFind; 
  }
