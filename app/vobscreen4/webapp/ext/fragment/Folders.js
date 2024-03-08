sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';
    var dialogOpen;

    return {
        folder: function (oEvent) {
            function generateUniqueId() {
                // Generate a random number and convert it to base 36 (0-9a-z)
                const randomPart = Math.random().toString(36).substr(2, 9);

                // Get the current timestamp and convert it to base 36
                const timestampPart = Date.now().toString(36);

                // Concatenate the random part and timestamp part
                const uniqueId = randomPart + timestampPart;

                return uniqueId;
            }
            MessageToast.show("Custom handler invoked.");

            if (!dialogOpen) {
                dialogOpen = true;

                // Create the dialog
                var cdialog = new sap.m.Dialog(`Dialog${generateUniqueId()}`, {
                    // title: "Attachments",
                    contentWidth: "40%",
                    endButton: new sap.m.Button(`button2${generateUniqueId()}`, {
                        text: "Cancel",
                        press: function (oEvent) {
                            debugger
                            cdialog.close();
                            dialogOpen = false; // Reset the flag when dialog is closed
                        },


                    }),
                    beginButton: new sap.m.Button(`button1${generateUniqueId()}`, {
                        text: "ok",
                        press: function (oEvent) {
                            debugger
                            cdialog.close();
                        }
                    })


                });

                // Add VBox for content
                var contentVBox = new sap.m.VBox(`vbox${generateUniqueId()}`, {
                    width: "100%",
                    height: "100%"
                });

                contentVBox.addStyleClass("vboxclass");

                // Add PDF icon and name to an HBox for alignment
                var pdfHBox = new sap.m.HBox();
                contentVBox.addItem(pdfHBox);
                var vb1 = new sap.m.VBox(("vb1" + generateUniqueId()));
                let customTreeHbox = new sap.m.HBox(`custtreehbox${generateUniqueId()}`, {

                    justifyContent: "SpaceBetween",
                    items: [


                        new sap.m.Text({ text: "Part No" }),
                        new sap.m.Text({ text: "Uploaded" }),
                        new sap.ui.core.Icon({
                            src: "sap-icon://show",
                            activeColor: "black",
                            press: async function (oEvent) {
                                var pdfLink = 'pdf_link.pdf';

                                // Open a new window with the PDF link
                                window.open(pdfLink, '_blank');
                                MessageToast.show("Icon pressed")
                            }
                        }),
                    ]
                });


                customTreeHbox.addStyleClass("customtreeInnerHbox");


                vb1.addItem(
                    new sap.ui.webc.main.Tree(`tree${generateUniqueId()}`, {
                        itemClick: async function (params) {
                            // Handle item click event
                        },
                        headerText: "Folders",
						//folder 1
                        items: [
                            new sap.ui.webc.main.TreeItemCustom({
                                content: [
                                    new sap.m.HBox({
                                        items: [
                                            new sap.ui.core.Icon({
                                                src: "sap-icon://folder-full"
                                            }),
                                            new sap.m.HBox({
                                                justifyContent: "SpaceBetween",
                                                items: customTreeHbox
                                            })
                                        ]
                                    })
                                ],


								items: [ 
									new sap.ui.webc.main.TreeItemCustom({
										content: [
											new sap.m.HBox({
												items: [
													new sap.ui.core.Icon({
														src: "sap-icon://folder-full"
													}),
													new sap.m.HBox({
														justifyContent: "SpaceBetween",
														items: [ // Customize child folder appearance as needed
															new sap.m.Text({ text: "Vendor 1" }),
															new sap.m.Text({ text: "Uploaded" }),
															new sap.ui.core.Icon({
																src: "sap-icon://show",
																activeColor: "black",
																press: async function (oEvent) {
																	// Handle icon press action for child folder
																}
															}),
														]
													}).addStyleClass("child")
												]
											})
										],
									})
								]

                            }),
                            // Add new parent folder below the existing folders
                            new sap.ui.webc.main.TreeItemCustom({
                                content: [
                                    new sap.m.HBox({
                                        items: [
                                            new sap.ui.core.Icon({
                                                src: "sap-icon://folder-full"
                                            }),
                                            new sap.m.HBox({
                                                justifyContent: "SpaceBetween",
                                                items: [
                                                    new sap.m.Text({ text: "NDA" }),
                                                    new sap.m.Text({ text: " not Uploaded" }),
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://show",
                                                        activeColor: "black",
                                                        press: async function (oEvent) {
                                                            // Handle icon press
                                                        }
                                                    })
                                                ]
                                            }).addStyleClass("customtreeInnerHbox")
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                );



                cdialog.addContent(contentVBox);
                cdialog.addContent(vb1);
                cdialog.open();

            }
        }
    };
});
