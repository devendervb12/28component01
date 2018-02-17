
sap.ui.core.UIComponent.extend("smax.batch28.A1.Component", {
	
	metadata : {
		rootView : "smax.batch28.A1.view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",
				viewType : "XML",
				controlId : "idApp",
				controlAggregation : "pages",
				viewPath : "smax.batch28.A1.view"
			},
			routes : [
				{
				  pattern : "",
				  name : "productListName",
				  viewName : "ProductList"				  
				},
				{
				  pattern : "toDetail",
				  name : "productDetailsName",
				  viewName : "ProductDetails"				  
				}
				
			]
		}
	},
	init : function(){
		// Router for smax.batch28.A1 Component
		
		// will create a Router for smax.batch27.A1
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
});