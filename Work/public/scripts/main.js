/*
async function main(){
  
    const uri = "mongodb+srv://roskata729:password@cluster0.ja6gl.mongodb.net/test";
  
  
    const client = new MongoClient(uri);
  
    try {
        // Connect to the MongoDB cluster
        await client.connect();
  
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
main();
*/