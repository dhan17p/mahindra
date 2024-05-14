sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';
    var dialogOpen;

    return {
        folder: function (oEvent) {
            debugger;
            function generateUniqueId() {
                const randomPart = Math.random().toString(36).substr(2, 9);
                const timestampPart = Date.now().toString(36);
                const uniqueId = randomPart + timestampPart;
                return uniqueId;
            }
            // Create the dialog
            var cdialog = new sap.m.Dialog(`Dialog${generateUniqueId()}`, {
                title: "Folders",
                contentWidth: "40%",
                endButton: new sap.m.Button(`button2${generateUniqueId()}`, {
                    text: "Cancel",
                    press: function (oEvent) {
                        debugger
                        cdialog.close();
                        // dialogOpen = false; // Reset the flag when dialog is closed
                        cdialog.destroy();
                    },


                }),
                beginButton: new sap.m.Button(`button1${generateUniqueId()}`, {
                    text: "Ok",
                    press: function (oEvent) {
                        debugger
                        cdialog.close();
                        cdialog.destroy();
                    }
                })
            });
            // Add VBox for content
            var contentVBox = new sap.m.VBox(`vbox${generateUniqueId()}`, {
                width: "100%",
                height: "100%"
            });

            contentVBox.addStyleClass("vboxclass");
            var pdfHBox = new sap.m.HBox();
            contentVBox.addItem(pdfHBox);
            var vb1 = new sap.m.VBox(("vb1" + generateUniqueId()));
            var data = ["Vendor 1", 
             "NDA", 
             "RFQ",
             "Quote and Quote Synthesis", 
             "Quote Backup", 
             "Supplier Details", 
             "Offer price Approval from Bazzar Sales Team", 
             "SBU VOB FORUM", 
             "Vendor Code Creation", 
             "NDA sign-off with Packagign Supplier", 
             "Packaging Sign-off", 
             "Proposed and Approved Drawings", 
             "Validation Reports", 
             "Final Drawing Approval for Production", 
             "VPPAP",
            ]
            var data1 = [
                "PPT",
                "Backup Data",
                "Approval"
            ]
            debugger;
            vb1.addItem(
                new sap.ui.webc.main.Tree(`tree${generateUniqueId()}`, {
                    itemClick: async function (params) {
                        // Handle item click event
                    },
                    items: [
                        new sap.ui.webc.main.TreeItemCustom(`fold1.1${generateUniqueId()}`, {
                            content: [
                                new sap.m.HBox({
                                    items: [
                                        new sap.ui.core.Icon({
                                            src: "sap-icon://folder-full"
                                        }),
                                        new sap.m.HBox({
                                            justifyContent: "SpaceBetween",
                                            items: [ // Customize child folder appearance as needed
                                                new sap.m.Text({ text: "Part No" }),
                                            ]
                                        }).addStyleClass("child")
                                    ]
                                })
                            ]
                        })
                    ]
                })
            )
            debugger

            for (let a = 0; a < data.length; a++) {
                var check = data[a];
                let sub_F = vb1.getItems()[0].getItems()[0];
                sub_F.addItem(
                            new sap.ui.webc.main.TreeItemCustom(`fold1.2${generateUniqueId()}`, {
                                content: [
                                    new sap.m.HBox({
                                        items: [
                                            new sap.ui.core.Icon({
                                                src: "sap-icon://folder-full"
                                            }),
                                            new sap.m.HBox({
                                                justifyContent: "SpaceBetween",
                                                items: [ // Customize child folder appearance as needed
                                                    new sap.m.Text({ text: data[a] }),
                                                ]
                                            }).addStyleClass("child")
                                        ]
                                    })
                                ]
                            })

                )
                if(check == "SBU VOB FORUM")
                {
                    debugger;
                    let child = vb1.getItems()[0].getItems()[0].getItems()[7]
                    for(let b = 0;b<data1.length;b++)
                    {
                        child.addItem(
                                    new sap.ui.webc.main.TreeItemCustom(`childfold1.2${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://open-folder"
                                                    }),
                                                    new sap.m.HBox({
                                                        justifyContent: "SpaceBetween",
                                                        items: [ // Customize child folder appearance as needed
                                                            new sap.m.Text({ text: data1[b] }),
                                                        ]
                                                    }).addStyleClass("child")
                                                ]
                                            })
                                        ]
                                    })
                        )
                    }

                }
            }
            debugger;
            var folder_data = [];
            let folders = vb1.getItems()[0].getItems()[0].getItems();
            var folders_assgn = ['Final Drawing Approval for Production', 'Quote and Quote Synthesis'];


        for (let a = 0; a < folders.length; a++) {
            let folderName = folders[a].mAggregations.content[0].mAggregations.items[1].mAggregations.items[0].getText();
            let iconSrc = folders_assgn.includes(folderName) ? "sap-icon://message-success" : "sap-icon://decline";
            let iconColor = folders_assgn.includes(folderName) ? "green" : "red";

            // Create and add the icon to the folder
            let icon = new sap.ui.core.Icon({
                src: iconSrc,
                color: iconColor
            });
            folders[a].mAggregations.content[0].mAggregations.items[1].addItem(icon);
        }

            console.log(folder_data);
            cdialog.addContent(contentVBox);
            cdialog.addContent(vb1);

            cdialog.open();

            // }
        }
    };
});
