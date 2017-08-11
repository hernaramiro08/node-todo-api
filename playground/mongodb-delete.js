//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //deleteMany
    /*
    db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log("Unable to delete documents");
    });
    */

    //deleteOne
    /*
    db.collection("Todos").deleteOne({text: "Eat lunch"})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Unable to delete one document");
    });
    */

    //findOneAndDelete
    /*
    db.collection("Todos").findOneAndDelete({completed: false})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Unable to delete one document", err);
    });
    */

    /*
    db.collection("Users").deleteMany({name: "Ramiro"})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Unable to delete Users' documents");
    });
    */
    
    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("598dea4807567d67b3c882d3")
    })
    .then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    })
    .catch((err) => {
        console.log("Unable to delete one Users' document", err);
    });
    

    db.close();
});