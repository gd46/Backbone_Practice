(function($){

        var productView = Backbone.View.extend({
                el: "#productScreen",

                tagName: "table",

                className: "table table-striped",

                render: function(){
                        $(this.el).html("<tr><th>Category1</th></tr>");
                }
        });
        var products = new productView();
        products.render();

})(jQuery);
