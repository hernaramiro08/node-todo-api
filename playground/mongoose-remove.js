const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
var {User} = require("./../server/models/user");

/*
Todo.remove({})
.then((result) => {
    console.log(result);
});
*/

/*
Todo.findOneAndRemove({text: "Second test todo"})
.then((todo) => {
    console.log(todo);
});
*/

Todo.findByIdAndRemove("59986f5aa3e4a5406c43caa3")
.then((todo) => {
    console.log(todo);
});
