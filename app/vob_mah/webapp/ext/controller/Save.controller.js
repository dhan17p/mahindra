sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/m/MessageToast', 'sap/m/Dialog', 'sap/m/Button'], function (ControllerExtension, MessageToast, Dialog, Button) {
    'use strict';

    return ControllerExtension.extend('practise.ext.controller.Save', {
        // this section allows to extend lifecycle hooks or hooks provided by Fiori elements
        override: {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf practise.ext.controller.Save
             */
            onInit: function () {
                // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
                var oModel = this.base.getExtensionAPI().getModel();
            },
            editFlow: {
                onBeforeSave: function (oEvent) {
                    var oLabel = new sap.m.Label({
                        text: "Are you sure you want to save?",
                        // class: "customText" // Add your custom class here
                    });
                    oLabel.addStyleClass("customText");
                    return new Promise(function (resolve, reject) {
                        
                        
                        var oDialog = new Dialog({
                            title: "Submit",
                            resizable: true,
                            draggable: true,
                            content: [oLabel], // Use the Label with the custom class as content
                            buttons: [
                                new Button({
                                    text: "Yes",
                                    press: function () {
                                        oDialog.close();
                                        oDialog.destroy();
                                        MessageToast.show("Saving...");
                                        resolve(); // Resolve the promise when "Yes" is clicked
                                    }
                                }),
                                new Button({
                                    text: "No",
                                    press: function () {
                                        oDialog.close();
                                        oDialog.destroy();
                                        MessageToast.show("Cancelled");
                                        reject(new Error("Save cancelled")); // Reject the promise when "No" is clicked
                                    }
                                })
                            ]
                        });
                        
                        oDialog.open();
                        
                    });
                }
            }
        }
    });
});