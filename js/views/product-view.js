(function($){

        app.productView = Backbone.View.extend({
                el: "#productScreen",

                tagName: "table",

                className: "table table-striped",

		events: {
			"click #prod1": "add",
		},

		add: function(){
			//alert("test");
			var test = new app.screenView({model: app.productModel});
			test.render();
			console.log("test");
		},

                render: function(){
                        $(this.el).html("<tr><th>Category1</th></tr><tr><td id='prod1'>Product1</td></tr>");
                }
        });

})(jQuery);
