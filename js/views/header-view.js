(function($){

	var HeaderView = Backbone.View.extend({
		el: "#header",

		render: function(){
			$(this.el).html("<a href='#'><h1>POS App</h1></a>");
		}
	});
	var header = new HeaderView();
	header.render();

})(jQuery);
