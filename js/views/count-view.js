(function($){

	var countView = Backbone.View.extend({
	
		el: "#count",

		events:{
		
		"click #add" : "addOne",
		
		},

		initialize: function(){
			var count = 0;	
		},

		render: function(){
		
		},
		
		addOne: function(){
			count++;
			console.log(count);
		}
	});

	var count = new countView();
	count.render();

})(jQuery);
