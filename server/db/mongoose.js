var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp");
//mongoose.connect("mongodb://hernandezramiro:654ramiro321@ds149603.mlab.com:49603/rshtodosapp");

module.exports = {mongoose};
