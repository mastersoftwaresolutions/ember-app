Billing.AddbillingController = Ember.ArrayController.extend({
	actions: {
		createBilling: function() {
			var InvoiceNumber = this.get('newInvoiceNumber');
			var VendorName = this.get('newVendorName');
			var DateOfBilling = this.get('newDateOfBilling');
			var Amount = this.get('newAmount');
			var Category = this.get('newCategory');
			var Description = this.get('newDescription');
		
			

			//Create the new Billing model
			var bill = this.store.createRecord('bill', {
				InvoiceNumber: InvoiceNumber,
				VendorName: VendorName,
				Amount: Amount,
				Date:DateOfBilling,
				Category:Category,
				Description: Description
			});	

			//Clear the form field
			this.set('InvoiceNumber', '');
			this.set('VendorName', '');
			this.set('DateOfBilling', '');
			this.set('Amount', '');
			this.set('Category', '');
			this.set('Description', '');

			//Save the new model
			bill.save();
			
			this.transitionToRoute('list');
		}
	}
});