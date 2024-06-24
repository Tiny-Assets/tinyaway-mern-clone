import { config } from 'dotenv'; 
import { MongoClient } from 'mongodb'; 

config(); 
const URI = process.env.MONGO_URI; 

export async function main(){
    const client = new MongoClient(URI);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('connected'); 

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};