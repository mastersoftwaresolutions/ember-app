var Vendor = require('../models/vendor');
var Billing = require('../models/billing');

exports.index = function(req,res) {
	Billing.find().sort({Created_At: -1}).populate('vendor_id').exec(function(err,bills) {
									
		res.send({bills: bills});
	});
};

//code to fetch the vendors from the system
exports.vendors = function(req,res) {
	Vendor.find(function(err,vendor) {
									
		res.send({vendors: vendor});
	});
};

//load the category in the application
exports.category = function(req,res) {
        res.send({
                  "categories": [
                             {"_id":1, "Name":'Legal & Professional'},
                             {"_id":2, "Name":'Internet Exp.'}, 
                             {"_id":3, "Name":'Telephone & Mobile Exp.'}, 
                             {"_id":4, "Name":'Repair & Maint.'}, 
                             {"_id":5, "Name":'Staff Welfare'}, 
                             {"_id":6, "Name":'Printing & Stationery'}, 
                             {"_id":7, "Name":'Office Exp.'}, 
                             {"_id":8, "Name":'Travelling & Conveyance'}, 
                             {"_id":9, "Name":'Electricity Exp.'}, 
                             {"_id":10, "Name":'Office Maintenance'}, 
                             {"_id":11, "Name":'Entertainment'}
                  ]
                });
};

exports.uploadimage = function(req,res) {
	var fs=		require("fs");
	fs.writeFile('uploads/abc.png', req.body.image, function (err) {
    if (err) throw err;
      console.log("It's saved");
    });								
};

exports.create = function(req,res) {
	//code to upload base64							
	var Image1 = req.body.Image1?req.body.Image1:req.body.bill.Image1;
	var Image2 = req.body.Image2?req.body.Image2:req.body.bill.Image2;
	var Image3 = req.body.Image3?req.body.Image3:req.body.bill.Image3;
	
	//code to upload first image
	var uploadPath1='';
	if(Image1){
	  	base64Data = Image1;
	   
		var matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
	     response = {};
	
	    if (matches.length !== 3) {
	     return new Error('Invalid input string');
	    }
	
	    response.type = matches[1];
	    response.data = new Buffer(matches[2], 'base64');
	    
	    var imageName='';
	    var hrTime = process.hrtime()
		imageName=hrTime[0] * 1000000 + hrTime[1] / 1000;	
	    if(response.type=='image/jpeg'){
			imageName=imageName+'.jpeg';					
		}
	    if(response.type=='image/jpg'){
			imageName=imageName+'.jpg';					
		}
	    if(response.type=='image/png'){
			imageName=imageName+'.png';					
		}
	    if(response.type=='image/gif'){
			imageName=imageName+'.gif';					
		}
	    uploadPath1="uploads/"+imageName;
	   var  binaryData = new Buffer(response.data, 'base64').toString('binary');
		require("fs").writeFile("frontend/uploads/"+imageName, binaryData, "binary", function(err) {
		  console.log(err); // writes out file without error, but it's not a valid image
		});
	}
	
	//code to upload second image
	var uploadPath2='';
	if(Image2){
	  	var base64Data = Image2;
	   
		var matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
	     response1 = {};
	
	    if (matches.length !== 3) {
	     return new Error('Invalid input string');
	    }
	
	    response1.type = matches[1];
	    response1.data = new Buffer(matches[2], 'base64');
	    
	    var imageName='';
	    var hrTime = process.hrtime()
		imageName=hrTime[0] * 1000000 + hrTime[1] / 1000;	
	    if(response1.type=='image/jpeg'){
			imageName=imageName+'.jpeg';					
		}
	    if(response1.type=='image/jpg'){
			imageName=imageName+'.jpg';					
		}
	    if(response1.type=='image/png'){
			imageName=imageName+'.png';					
		}
	    if(response1.type=='image/gif'){
			imageName=imageName+'.gif';					
		}
	    uploadPath2="uploads/"+imageName;
	    var binaryData = new Buffer(response1.data, 'base64').toString('binary');
		require("fs").writeFile("frontend/uploads/"+imageName, binaryData, "binary", function(err) {
		  console.log(err); // writes out file without error, but it's not a valid image
		});
	}
	
	//code to upload third image
	var uploadPath3='';
	if(Image3){
	  	var base64Data = Image3;
	   
		var matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
	    response3 = {};
	
	    if (matches.length !== 3) {
	     return new Error('Invalid input string');
	    }
	
	    response3.type = matches[1];
	    response3.data = new Buffer(matches[2], 'base64');
	    
	    var imageName='';
	    var hrTime = process.hrtime()
		imageName=hrTime[0] * 1000000 + hrTime[1] / 1000;	
	    if(response3.type=='image/jpeg'){
			imageName=imageName+'.jpeg';					
		}
	    if(response3.type=='image/jpg'){
			imageName=imageName+'.jpg';					
		}
	    if(response3.type=='image/png'){
			imageName=imageName+'.png';					
		}
	    if(response3.type=='image/gif'){
			imageName=imageName+'.gif';					
		}
	    uploadPath3="uploads/"+imageName;
	    var binaryData = new Buffer(response3.data, 'base64').toString('binary');
		require("fs").writeFile("frontend/uploads/"+imageName, binaryData, "binary", function(err) {
		  console.log(err); // writes out file without error, but it's not a valid image
		});
	}
    var datetime = new Date();
	console.log(datetime);
	var InvoiceNumber=req.body.InvoiceNumber?req.body.InvoiceNumber:req.body.bill.InvoiceNumber;
	var VendorName=req.body.VendorName?req.body.VendorName:req.body.bill.VendorName;
	var Date1=req.body.Date?req.body.Date:req.body.bill.Date;
	var Amount=req.body.Amount?req.body.Amount:req.body.bill.Amount;
	var Category=req.body.Category?req.body.Category:req.body.bill.Category;
	var Description=req.body.Description?req.body.Description:req.body.bill.Description;
	

	if(InvoiceNumber){	
                      
        Billing.findOne({ 'InvoiceNumber': InvoiceNumber }, function (err, doc){
                    if(doc){
                         res.send({error: [{_id: 1,"ErrorMsg":'Invoice numnber already exists in the system!!'}]});    
                    }                                               
            });
         //code to save the vendor before saving the billings.
          var _newVendor = new Vendor({ Name: VendorName});
         _newVendor.save(function(err,result) {
            if(!err && result){                        
                  _newVendor=Vendor.findOne({ 'Name': VendorName }, function (err, doc){
                            var _newBilling = new Billing({ InvoiceNumber: InvoiceNumber,
                                        vendor_id: doc,
                                        Date: Date1,
                                        Amount: Amount,
                                        Category: Category,
                                        Description: Description,
                                        Created_At: datetime,
                                        Image1: uploadPath1,
                                        Image2: uploadPath2,
                                        Image3: uploadPath3
                                       });
                        _newBilling.save(function(err,result) {
                            if(!err && result){                        
                            res.send({bill: _newBilling});
                            }else{
                                console.log(err);
                            }
                        });                                                                      
                   });
            }else{
                _newVendor=Vendor.findOne({ 'Name': VendorName }, function (err, doc){
                            var _newBilling = new Billing({ InvoiceNumber: InvoiceNumber,
                                        vendor_id: doc,
                                        Date: Date1,
                                        Amount: Amount,
                                        Category: Category,
                                        Description: Description,
                                        Created_At: datetime,
                                        Image1: uploadPath1,
                                        Image2: uploadPath2,
                                        Image3: uploadPath3
                                       });
                        _newBilling.save(function(err,result) {
                            if(!err && result){                        
                            res.send({bill: _newBilling});
                            }else{
                                console.log(err);
                            }
                        });                                                                      
                   });
               
            }                        
         });
        
	}else{
		res.send({billinginfo: 'Record Not Saved!!'});
	}
	
}

