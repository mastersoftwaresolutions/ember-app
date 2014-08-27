Billing.newInvoiceNumber = Ember.TextField.extend({
   focusOut: function() {
      var valid = this.get('value') ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().addClass("invalid").after("<span class='err'>This field is required</span>");
      } else {
        this.$().removeClass("invalid")
      }
   }
});