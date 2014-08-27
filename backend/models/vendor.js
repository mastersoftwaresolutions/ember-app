var mongoose= require('mongoose');

var vendorSchema = new mongoose.Schema({
	Name: {type: String, required: true, index: { unique: true}},
	
});


module.exports = mongoose.model('Vendor', vendorSchema);

