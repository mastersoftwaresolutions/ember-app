var Todo = require('../models/todo');
var Artists = require('../models/artists');

exports.index = function(req,res) {
	Todo.find(function(err,todos) {
		res.send({todos: todos});
	});
};

exports.create = function(req,res) {
	var todo = new Todo(req.body.todo);
	todo.save(function() {
		res.send({todo: todo});
	});
}

exports.update = function(req,res) {
	Todo.findByIdAndUpdate(req.params.id, req.body.todo, function(err, todo) {
		res.send({todo: todo});
	});
};

exports.destroy = function(req,res) {
	Todo.findByIdAndRemove(req.params.id, function(err, todo) {
		res.send({todo: todo});
	});
};

exports.createArtists = function(req,res) {
//	var todo = new Todo(req.body.name);
//	console.log(todo)
//	todo.save(function() {
//		res.send({todo: todo});
//	});
	var art = new Artists({ name: req.body.name  });
	art.save(function(err ,artt) {
		if(err){
 		  console.log(err);
		}else{
			console.log('Saved');
			res.send({artist: artt});
		
		}

	});
}
exports.getart = function(req,res) {
	console.log('CALLED')
	Artists.find({},function(err,todos) {
	if(err){
 		  console.log(err);
	}
console.log(todos)
		res.send({artists: todos});
	});
};



