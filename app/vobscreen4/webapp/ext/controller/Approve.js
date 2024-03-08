sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        ApproveMethod: function(oEvent,oBindingContext) {
            debugger
            var spathid = oEvent.sPath;
            var idRegex = /id=([a-fA-F0-9-]+)/;
            var match = spathid.match(idRegex);

            if (match && match.length > 1) {
                var id = match[1];
            }
            if (id == "cf659f8c-3fbb-4c94-89be-1ec9d5244b72") {
              
                MessageToast.show("New Parts Sourcing for Engine Approved");
            }
 
            
            else if (id == "70ac0c95-4022-4da3-b6e6-4aea987d03f7")
            {
                MessageToast.show("New Parts Sourcing for Bearings Approved");
        
            }
        }


           
    };
});
