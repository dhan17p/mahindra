
sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        submitmethod: function (oEvent) {
            var dialogId = sap.ui.core.Fragment.createId("dialogid");
            var labelId = sap.ui.core.Fragment.createId("labelid");
            var label = new sap.m.Label(labelId, {
                text: "Are you sure you want to submit?",
            })
            label.addStyleClass("labeldialogsave")
            this.oDialog = new sap.m.Dialog(dialogId, {
                title: "Submit",
                content: [label],
                beginButton: new sap.m.Button({
                    text: "OK",
                    press: async function (oBindingContext, oEvent) {
                        function generateUID() {
                            // Generate a random number and convert it to base 36
                            var randomPart = Math.random().toString(36).substr(2, 9);

                            // Get the current timestamp and convert it to base 36
                            var timestampPart = Date.now().toString(36);

                            // Concatenate the timestamp and random parts to form the UID
                            var uid = timestampPart + randomPart;

                            return uid;
                        }
                        debugger
                        this.oDialog.close();
                        var currentUrl = window.location.href;
                        // Extract the id from the URL
                        var uuidPattern = /\(([0-9a-fA-F-]+)\)/;
                        // Extract UUID using match() function
                        var match = currentUrl.match(uuidPattern);
                        // Check if a match is found and extract the UUID

                        var currentUrl = window.location.href;
                        var uuidRegex = /id=([0-9a-fA-F-]+),/;
                        var id = currentUrl.match(uuidRegex)[1];

                        // if (match && match.length > 1) {
                        //     var id = match[1];
                        // }
                        var supplierVBox = sap.ui.getCore().byId("vobscreen2::VOB_Screen2ObjectPage--fe::CustomSubSection::Vandorboard--mainHBox").getItems()[1]
                        var allsupplier = [];
                        if (supplierVBox) {
                            // Get the items of the VBox
                            var items = supplierVBox.getItems();

                            // Loop through each item
                            items.forEach(function (item) {
                                // Get the text property of the item
                                if (item && item.oModels && item.oModels.venorname) {
                                    var text = item.mAggregations.items[0].mAggregations.items[0].getText();
                                    // Push the text value to the array
                                    allsupplier.push(text);
                                }
                            });
                        }
                        var tableData = [];
                        var table = sap.ui.getCore().byId("vobscreen2::VOB_Screen2ObjectPage--fe::CustomSubSection::Vandorboard--parentTable");
                        if (table) {
                            // Get the binding context for the table
                            var bindingContext = table.getBindingContext();

                            // Get the model associated with the table
                            var model = bindingContext.getModel();

                            // Get the table items
                            var items = table.getItems();

                            // Iterate over each item in the table
                            items.forEach(function (item) {
                                var cells = item.getCells();
                                cells[1].setEditable(false);
                                cells[2].setEditable(false);
                                var context = item.getBindingContext();
                                // Use the context to get the data for the item
                                var entry = context.getObject();
                                // Extract the values from each entry and push them to the array
                                tableData.push({
                                    id: entry.id,
                                    MGSP_Part_No: entry.MGSP_Part_Nos,
                                    Existing_MGSP_PO_Price: item.getCells()[1].getValue(),
                                    Target_Price: item.getCells()[2].getValue()
                                });
                            });
                        }

                        var supplier_item = this._view.mAggregations.content[0].mAggregations.sections[0].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[1].mAggregations.items
                        var array_supplier_item_old = []
                        var array_supplier_item_new = []
                        supplier_item.forEach(function (entry) {
                            var table_item_array = []
                            var table_length = table.getItems().length
                            var items_table = table.getItems();

                            items_table.forEach(function (item, index) {
                                debugger


                                var entry_table = item.getBindingContext().getObject();
                                var json_val = [
                                    {
                                        value_key: entry_table.id,
                                        value: entry.getItems()[1].getItems()[index].getValue(),
                                        supplier_name: entry.getItems()[0].getItems()[0].getText()
                                    }
                                ]
                                table_item_array = table_item_array.concat(json_val)
                            })
                            var contvalue = entry.getItems()[1].getItems().length - 18
                            var json_val1 = [
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue()
                                },
                                {
                                    value_key: "Total Landed Investment Settled",
                                    value: entry.getItems()[1].getItems()[contvalue++].getValue(),
                                    supplier_name: entry.getItems()[0].getItems()[0].getText(),
                                    supplier_id : entry?.oModels?.venorid?.oData?.vendorid?? null

                                },
                            ]
                            table_item_array = table_item_array.concat(json_val1);
                           
                            debugger
                            if (entry && entry.oModels && entry.oModels.venorname) {
                                array_supplier_item_new.push(table_item_array);
                            }
                            else{
                                array_supplier_item_old.push(table_item_array);
                            }


                            // var suplier_line_items = entry.getItems()[1].getItems();
                            // suplier_line_items.forEach(function (sup_line_item) {
                            //     debugger

                            // })
                        })
                        let oFunction1 = this.getModel().bindContext("/vanddetails(...)");
                        var statusval1 = JSON.stringify({ id: id, status: "submitsecondscreen", tableData1: tableData, suppliers: allsupplier, array_supplier_item_old:array_supplier_item_old,array_supplier_item_new:array_supplier_item_new})
                        oFunction1.setParameter("status", statusval1)
                        await oFunction1.execute()
                        debugger
                        // var result1 = oFunction1.getBoundContext().getValue()?.value;
                        // var finalsupp = JSON.parse(result1);
                        var comment_value = sap.ui.getCore().byId("vobscreen2::VOB_Screen2ObjectPage--fe::CustomSubSection::Comments-innerGrid").mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[0].mProperties.value
                        let oFunction2 =  this.getModel().bindContext("/commentfun(...)");
                        var statusval2 = JSON.stringify({ id: id, status: "screen1comment", comment: comment_value })
                        oFunction2.setParameter("status", statusval2)
                        await oFunction2.execute()
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
