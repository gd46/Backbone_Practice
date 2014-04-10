
	app ={

		init: function(){
			var header = new app.HeaderView();
			header.render();

			var products = new app.productListView();
			products.render();

			var screen = new app.screenView();
			screen.render();
		}	
	
	}
