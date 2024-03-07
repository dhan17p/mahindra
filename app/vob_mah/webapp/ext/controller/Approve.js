sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
    var dialogbox;

    return {
        Approvemethod: function(oEvent) {
            debugger;
            
            var oDialog = new sap.m.Dialog({
                title: "Approval",
                resizable: true,
                draggable: true,
                content: [
                    new sap.m.Label({ text: "Are you sure you want to approve?" })
                ],
                buttons: [
                    new sap.m.Button({
                        text: "Yes",
                        press: function() {
                            oDialog.close();
                        }
                    }),
                    new sap.m.Button({
                        text: "No",
                        press: function() {
                            oDialog.close();
                        }
                    })
                ]
            });
            
            oDialog.open();
        }
        
    };
});
