// mongod.exe --dbpath "\Users\kunal\Documents\mongo-data"

// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj); 

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//     var db = client.db('TodoApp');
//     if(err) {
//         return console.log("Unable to connect to MongoDB Server");
//     }
//     console.log("Connected to MongoDB Server");

//     db.collection("Todos").insertOne({
//         text: "Something to do",
//         completed: false

//     }, (err, res) => {
//         if(err) {
//             return console.log("Unable to insert data");
//         }
//         console.log(JSON.stringify(res.ops, undefined, 2)); 
//     });


//     client.close();

// });

// var user = {name: "Andrew", age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    var db = client.db('TodoApp');
    if (err) {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB Server");

    db.collection("Users").insertOne({
        name: "kunal",
        age: 25,
        location: "Thane"
    }, (err, res) => {
        if (err) {
            return console.log("Unable to insert data");
        }
        console.log(res.ops[0]._id.getTimestamp());
        console.log(JSON.stringify(res.ops, undefined, 2));
    });
    client.close();
});