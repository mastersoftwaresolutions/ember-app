Billing.Router.map(function() {
	
	this.resource('addbilling', { path: '/' }, function() {
	});

    this.route("list",  { path: '/list/:success' });
});

Billing.ListRoute = Ember.Route.extend({
	model: function(params) {
		this.set('success', params.success);
		return this.store.find('bill');
		
	},
	setupController: function(controller, model){
		
		var person = new Array()										
		model.forEach(function(item,index) {
			var category=[
                             'Legal & Professional',
                             'Internet Exp.', 
                             'Telephone & Mobile Exp.', 
                             'Repair & Maint.', 
                             'Staff Welfare', 
                             'Printing & Stationery', 
                             'Office Exp.', 
                             'Travelling & Conveyance', 
                             'Electricity Exp.', 
                             'Office Maintenance', 
                             'Entertainment'
                  ];
			var cat_index=item._data.Category;					
			person[index]={"invoiceNumber":item._data.InvoiceNumber,
								"date":item._data.Date,
								"amount":item._data.Amount,
								"category":category[item._data.Category],
								"description":item._data.Description,
								"image1":item._data.Image1,
								"image2":item._data.Image2,
								"image3":item._data.Image3,
								"vendorName":item._data.vendor_id.Name};
			
		});		
																								
        controller.set('billings', person);
        if(this.get('success'))									
	    controller.set('error','Record Successfully saved');
    }
});





//extending the root for add billing
Billing.AddbillingRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('category');
	},
	setupController: function(controller, model){
        controller.set('categories', model);
        controller.set('vendors', this.store.find('vendor'));
        controller.set('error', model);
        
    }
});

Billing.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "My App");
  }
});

function encodeImageFileAsURL(hiddenfield,inputFileToLoad){

    var filesSelected = document.getElementById(inputFileToLoad).files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;
            newImage.height=150;
            newImage.width=150;
            document.getElementById(hiddenfield).value=srcData;
            //document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            
            
        }
        fileReader.readAsDataURL(fileToLoad);
    }
}
//add  a calendar in the application

Billing.newDate = Ember.TextField.extend({
  _picker: null,
 
  modelChangedValue: function(){
    var picker = this.get("_picker");
    if (picker){
      picker.setDate(this.get("value"));
    }
  }.observes("value"),
 
  didInsertElement: function(){
    currentYear = (new Date()).getFullYear();
    formElement = this.$()[0];
    picker = new Pikaday({
      field: formElement,
      yearRange: [1900,currentYear+2]
    });
    this.set("_picker", picker);
  },
 
  willDestroyElement: function(){
    picker = this.get("_picker");
    if (picker) {
      picker.destroy();
    }
    this.set("_picker", null);
  }
});

//code for calendars ends here
Billing.UploadFile = Ember.TextField.extend({
    tagName: 'input',
    attributeBindings: ['name'],
    type: 'file',
    file: null,
    change: function (e) {
        var reader = new FileReader(), 
        that = this;        
        reader.onload = function (e) {
				alert('');
            var fileToUpload = e.target.result;
            Ember.run(function() {
                that.set('file', fileToUpload);
            });            
        };
        return reader.readAsDataURL(e.target.files[0]);
    }
});


