Billing.AddbillingController = Ember.ArrayController.extend({
	actions: {
		createBilling: function() {
			//code to trigger the validations.
			
			var InvoiceNumber = this.get('newInvoiceNumber');
			var VendorName = this.get('newVendorName');
			var DateOfBilling = this.get('newDate');
			var Amount = this.get('newAmount');
			var Category = this.get('newCategory');
			var Description = this.get('newDescription');
			var Image1 = document.getElementById("Image1").value;
			var Image2 = document.getElementById("Image2").value;
			var Image3 = document.getElementById("Image3").value;
		    if(InvoiceNumber!='' 
			   && VendorName!='' 
			   && DateOfBilling!='' 
			   && Amount!='' 
			   && Category!='' 
			   && Description!='' 
			   && (Image1!='' ||Image2!=''||Image3!='')){

			//Create the new Billing model
			var bill = this.store.createRecord('bill', {
				InvoiceNumber: InvoiceNumber,
				VendorName: VendorName,
				Amount: Amount,
				Date:DateOfBilling,
				Category:Category,
				Description: Description,
				Image1: Image1,
				Image2: Image2,
				Image3: Image3
			});	

			//Clear the form field
			this.set('InvoiceNumber', '');
			this.set('VendorName', '');
			this.set('DateOfBilling', '');
			this.set('Amount', '');
			this.set('Category', '');
			this.set('Description', '');

			//Save the new model
			var res=bill.save();
			
			this.transitionToRoute('list', 1);
			}else{
				this.set('errors','All fields are required!!');
				return false
			}
		}.observes("success")
	}
});