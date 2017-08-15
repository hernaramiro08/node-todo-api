const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
var {User} = require("./../server/models/user");

var id = "599228365308d60d805a33e2";
var userId = "5991d335a350d540f0020d23";

if(!ObjectID.isValid(id)) {
    console.log("ID not valid");
}

/*
Todo.find({
    _id:id
})
.then((todos) => {
    console.log("Todos", todos);
});

Todo.findOne({
    _id:id
})
.then((todo) => {
    console.log("Todo", todo);
});

Todo.findById(id)
.then((todo) => {
    if(!todo) {
        return console.log("Id not found");
    }  
    console.log("Todo By Id", todo);
})
.catch((e) => {
    console.log(e);
});
*/

User.find({
    _id:userId
})
.then((users) => {
    console.log("Users", users);
});

User.findOne({
    _id:userId
})
.then((user) => {
    console.log("User", user);
});

User.findById(userId)
.then((user) => {
    if(!user) {
        return console.log("Unable to find user");
    }  
    console.log(JSON.stringify(user, undefined, 2));
})
.catch((e) => {
    console.log(e);
});

