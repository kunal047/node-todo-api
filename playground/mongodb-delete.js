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

    // deleteMany

    // db.collection("Todos").deleteMany({text: "Eat Lunch"}).then( (result)=> {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Unable to delete", err);
    // });

    // deleteOne

    // db.collection("Todos").deleteOne({ text: "Eat Lunch" }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Unable to delete", err);
    // });


    // findOneAndDelete

    // db.collection("Todos").findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Unable to delete", err);
    // });

    // db.collection("Users").deleteMany({name: "kunal"}).then( (result)=> {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Unable to delete", err);
    // });

    db.collection("Users").findOneAndDelete({ _id: new ObjectID("5ad0adce1eb76a2e0c3741d5") }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log("Unable to delete", err);
    });


    // client.close();

});
