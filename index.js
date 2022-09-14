// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri =
  'mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority';
const mongo = new MongoClient(uri); //, {  useUnifiedTopology: true, connectTimeoutMS: 20000, useNewUrlParser: true});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await mongo.connect();
    // Establish and verify connection
    await mongo.db('Data').command({ ping: 1 });
    console.log('Connected successfully to server');
  } finally {
    console.log("closed")
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// mongo.connect().then(err => {
//   const users = mongo.db("Data").collection("users");
//   users.insertOne({username: "my test"})
// console.log("done")

// })
//uri : mongodb+srv://Owner:MyDbPassword@dbcoc-2ottt.gcp.mongodb.net/test?retryWrites=true&w=majority
//real uri : mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority
