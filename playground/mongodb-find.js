// mongod.exe --dbpath "\Users\kunal\Documents\mongo-data"

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
    
    db.collection("Users").find({name: "kunal"}).toArray().then( (docs) => {

        console.log(JSON.stringify(docs, undefined, 2));
    });

    // client.close();

});