//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    /*
    db.collection("Todos").findOneAndUpdate({
        _id : new ObjectID("598de6f207567d67b3c88270")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Unable to update Todos' document", err);
    });
    */

    db.collection("Users").findOneAndUpdate({
        _id : new ObjectID("598cb67716256b454439cde5")
    }, {
        $set: {
            name: "Zoé Romina"
        },
        $inc: { 
            age: 1
        }
    }, {
        returnOriginal: false
    })
    .then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })
    .catch((err) => {
        console.log("Unable to update Users' document", err);
    });

    db.close();
});