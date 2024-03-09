sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        submitmethod: function(oEvent) {
            var dialogId = sap.ui.core.Fragment.createId("dialogid");
            var labelId = sap.ui.core.Fragment.createId("labelid");
            var label = new sap.m.Label(labelId,{
                text:"Are you sure you want to submit?",
              
            })
            label.addStyleClass("labeldialogsave")
            this.oDialog = new sap.m.Dialog(dialogId, {
                title: "Submit",
                content:[label],
        	beginButton: new sap.m.Button({
                text: "OK",
                press: function () {
                    this.oDialog.close();
                }.bind(this)
            }),
            endButton: new sap.m.Button({
                text: "Close",
                press: function () {
                    this.oDialog.close();
                }.bind(this)
            })
           
        });
        this.oDialog.open();
        }
    };
});
