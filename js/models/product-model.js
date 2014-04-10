(function(){

var product  = app.productModel  = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
	
		defaults: 	{
			name: 'test',
			qty: '2',
			price: '3'
		}
	});

})();
