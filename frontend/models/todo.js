Billing.Bill = DS.Model.extend({
	InvoiceNumber: DS.attr('string'),
	VendorName: DS.attr('string'),
	Date: DS.attr('string'),
	Amount: DS.attr('string'),
	Category: DS.attr('string'),
	Description: DS.attr('string')
});

