// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);


const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority"
const mongo = new MongoClient(uri, {  useUnifiedTopology: true, connectTimeoutMS: 20000, useNewUrlParser: true});


mongo.connect().then(err => {
  const users = mongo.db("Data").collection("users");
  users.insertOne({username: "my test"})
console.log("done")

})
//uri : mongodb+srv://Owner:MyDbPassword@dbcoc-2ottt.gcp.mongodb.net/test?retryWrites=true&w=majority
//real uri : mongodb+srv://App:MyDbPassword@cluster0.fx8cutv.mongodb.net/?retryWrites=true&w=majority