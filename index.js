// run `node index.js` in the terminal
//'mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority';
//const { MongoClient } = require('mongodb');
//const uri ='mongodb://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority';
//var MongoClient = require('mongodb').MongoClient;
//const uri ='mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority';



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Data").collection("users");
  setInterval(() =>{
    collection.insertOne({glo:"hello !"})
  },10000)
  //client.close();
});


