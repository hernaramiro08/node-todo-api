var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost:27017/TodoApp");
mongoose.connect("mongodb://hernandezramiro:123ramirin546**@ds149603.mlab.com:49603/rshtodosapp");

module.exports = {mongoose};
