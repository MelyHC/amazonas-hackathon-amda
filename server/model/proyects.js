const MongoClient = require('mongodb').MongoClient;
const { DB_CONNECTION } = process.env;

const uri = DB_CONNECTION;

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});