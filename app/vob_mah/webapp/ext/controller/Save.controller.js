sap.ui.define(['sap/ui/core/mvc/ControllerExtension', 'sap/m/MessageToast', 'sap/m/Dialog', 'sap/m/Button'], function (ControllerExtension, MessageToast, Dialog, Button) {
    'use strict';
    var that;

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
                that = this;
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
                                    press: async function () {
                                        debugger
                                        var currentUrl = window.location.href;
                                        // Extract the id from the URL
                                        // Regular expression to match the UUID pattern
                                        var uuidRegex = /id=([0-9a-fA-F-]+),/;

                                        // Extracting the UUID from the URL using match function and regex
                                        var extractedUuid = currentUrl.match(uuidRegex)[1];
                                        var partsystem = sap.ui.getCore().byId("vobmah::VOBObjectPage--fe::Form::GeneratedFacet1::Content").mAggregations.formContainers[0].mAggregations.formElements[0].mAggregations.fields[0].mAggregations.content.mAggregations.contentDisplay.mProperties.text
                                        var supplier = sap.ui.getCore().byId("vobmah::VOBObjectPage--fe::Form::GeneratedFacet1::Content").mAggregations.formContainers[0].mAggregations.formElements[4].mAggregations.fields[0].mAggregations.items[0].mProperties.key
                                        var table_value = sap.ui.getCore().byId("vobmah::VOBObjectPage--fe::table::vob_yoy::LineItem::YOYAnnualProjections").mAggregations._content.mAggregations.rows[0].mAggregations.cells[0].mAggregations.content.mAggregations.contentDisplay.mProperties.text
                                        var comment_value = sap.ui.getCore().byId("vobmah::VOBObjectPage--fe::CustomSection::Comments-innerGrid").mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[0].mProperties.value
                                        let oFunction1 = that.base.getModel().bindContext("/commentfun(...)");
                                        var statusval1 = JSON.stringify({ id: extractedUuid, status: "screen1comment", comment: comment_value })
                                        oFunction1.setParameter("status", statusval1)
                                        await oFunction1.execute()
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
                },
                onAfterCreate: function (oEvent) {
                    debugger
                    var comment_section = sap.ui.getCore().byId("vobmah::VOBObjectPage--fe::CustomSection::Comments-innerGrid");
                }
            }
        }
    });
});