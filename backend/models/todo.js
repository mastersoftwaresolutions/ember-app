mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	title: {type: String, required: true},
	isCompleted: Boolean
});


module.exports = mongoose.model('Todo', todoSchema);
