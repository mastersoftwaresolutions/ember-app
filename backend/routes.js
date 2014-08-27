var todos = require('./controllers/todos');
var billing = require('./controllers/billing');
module.exports = function(app) {
	app.get('/api/1/todos', todos.index);
	app.post('/api/1/todos', todos.create);
	app.put('/api/1/todos/:id', todos.update);
	app.del('/api/1/todos/:id', todos.destroy);
	
	app.post('/api/1.0/bills', billing.create);
	app.get('/api/1.0/bills', billing.index);
	app.get('/api/1.0/categories', billing.category);
	app.post('/api/1.0/newbilling', billing.create);
	app.post('/uploadimage', billing.uploadimage);
	
	
    app.get('/api/1.0/vendors', billing.vendors);
	
};
