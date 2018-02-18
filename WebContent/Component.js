
sap.ui.core.UIComponent.extend("smax.batch28.A1.Component", {
	
	metadata : {
	   manifest : "json"
	},
	init : function(){
		// Router for smax.batch28.A1 Component		
		// will create a Router for smax.batch27.A1
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
});
