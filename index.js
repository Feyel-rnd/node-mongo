// run `node index.js` in the terminal
//'mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority';
//const { MongoClient } = require('mongodb');
//const uri ='mongodb://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority';
//var MongoClient = require('mongodb').MongoClient;






  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
// Connection URI


// Create a new MongoClient
//const client = new MongoClient(uri);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri ='mongodb://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("data").collection("users")
  console.log("Success !")
  console.log(err)
  //setTimeout(()=>{},2000)
  collection.insertOne({name:"myname"})
  //client.close();
});

