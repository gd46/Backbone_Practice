(function($){

	app.HeaderView = Backbone.View.extend({
		el: "#header",

		render: function(){
			$(this.el).html("<a href='#'><h1>POS App</h1></a>");
		}
	});
})(jQuery);
