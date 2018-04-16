// mongod.exe --dbpath "\Users\kunal\Documents\mongo-data"
// cd "Program Files\MongoDB\Server\3.6\bin"

// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    var db = client.db('TodoApp');
    if(err) {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");

    // db.collection("Todos").find({completed: false}).toArray().then( (docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection("Todos").find({ completed: false }).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(count, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });
    
    // db.collection("Users").find({
    //     _id: new ObjectID("5ad0addc4e262f1e009885a4")})
    //     .toArray()
    //     .then( (docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos ", err);
    // });

    // db.collection("Users").count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch todos ", err);
    // });
    db.collection("Users").find({name: "kunal"}).toArray().then( (docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });

    // client.close();

});
