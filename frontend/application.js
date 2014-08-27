Billing = Ember.Application.create();




Billing.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id'
});

Billing.ApplicationAdapter = DS.RESTAdapter.extend({
	
	namespace: 'api/1.0'
});
