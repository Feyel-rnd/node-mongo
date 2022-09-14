// run `node index.js` in the terminal
const { MongoClient } = require('mongodb');

// Connection URI
const uri =
  'mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    console.log('On essaie');
    // Connect the client to the server (optional starting in v4.7)
    client.connect().then({
      console.log('Connected successfully to server !!');
    });

    // Establish and verify connection
    await client.db('Data').command({ ping: 1 });
    console.log('Connected successfully to server');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//real uri : mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority
