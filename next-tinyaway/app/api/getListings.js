import { main } from '../../lib/database.js'; 


(async () => {
  try {
    const client = await main(); 
    console.log('connected'); 

    await listDatabases(client); 
  } catch (e) {
    console.error(e); 
  }
})

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// listDatabases(client); 