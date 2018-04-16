// mongod.exe --dbpath "\Users\kunal\Documents\mongo-data"
// cd "Program Files\MongoDB\Server\3.6\bin"

// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    var db = client.db('TodoApp');
    if (err) {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5ad43fb5f8dce7826ba8212e")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5ad0addc4e262f1e009885a4")
    }, {
            $set: {
                name: "kunal"
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    // client.close();
});
