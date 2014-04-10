(function($){

app.productView = Backbone.View.extend({
	tagName: "tr",

	events: {
		"click a": "sayHello"
	},
	
	sayHello: function(){
		alert("Hello");
	},
	render: function(){
		//var template = $("list-view-template").html();
		//var compiled = _.template(template, {name: "Template Name" });
		$(this.el).html("<td><a href='#'>DB Name</a></td>");
		return this;
	}
});

app.productListView = Backbone.View.extend({
	tagName: "table",
	
	className: "table table-striped",

	render: function(){
		var els = [];
		for(var i=1;i<5;i++){
			var itemView  = new app.productView();
			els.push(itemView.render().el);
		}
		//return this;
		$(this.el).html(els);	
		$("#list-view").html(this.el);
	}
});

})(jQuery);
