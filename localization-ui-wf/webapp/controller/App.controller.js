sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.mnea.localizationuiwf.controller.App", {
        onInit() {
          this.getOwnerComponent().getRouter().navTo(
            "Routeapproval"
            );
        }
      });
    }
  );
  