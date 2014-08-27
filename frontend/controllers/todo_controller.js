Billing.TodoController = Ember.ObjectController.extend({
	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		},
		acceptChanges: function() {
			this.set('isEditing', false);

			if(Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {
				this.get('model').save();
			}
		},
		removeTodo: function() {
			var todo = this.get('model');
			console.log(todo);
//			todo.deleteRecord();
//			todo.save();
		}
	},

	isEditing: false,
});