var mongoose= require('mongoose');

var billingSchema = new mongoose.Schema({
	InvoiceNumber: {type: String,required: true, index: { unique: true}},
	vendor_id: { type: mongoose.Schema.ObjectId, ref: 'Vendor', required: true },
	Date: {type: String, required: true},
	Amount: {type: Number, required: true},
	Image1: {type: String},
	Image2: {type: String},
	Image3: {type: String},
	Created_At: {type: Date},
	Category: {type: String, required: true},
	Description: {type: String, required: true,trim: true}
});


module.exports = mongoose.model('Billing', billingSchema);

