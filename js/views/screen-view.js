(function($){

        app.screenView = Backbone.View.extend({
                el: "#mainScreen",

		tagName: "table",

		className: "table table-striped",

                render: function(){
                        $(this.el).html("<tr><th>Product</th><th>QTY</th><th>Price</th></tr>");
                }
        });

})(jQuery);
