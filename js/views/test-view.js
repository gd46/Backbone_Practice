(function($){

	var TestView = Backbone.View.extend({
	
		render: function(){
			$(this.el).html("<a href='#'><h1>POS App</h1></a>");
		}
	});
	var header = new TestView({el: "#header"});
	header.render();

})(jQuery);
