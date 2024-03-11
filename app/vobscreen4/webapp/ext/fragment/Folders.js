sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';
    var dialogOpen;

    return {
        folder: function (oEvent) {
            debugger;
            function generateUniqueId() {
                // Generate a random number and convert it to base 36 (0-9a-z)
                const randomPart = Math.random().toString(36).substr(2, 9);

                // Get the current timestamp and convert it to base 36
                const timestampPart = Date.now().toString(36);

                // Concatenate the random part and timestamp part
                const uniqueId = randomPart + timestampPart;

                return uniqueId;
            }

            // if (!dialogOpen) {
            //     dialogOpen = true;

                // Create the dialog
                var cdialog = new sap.m.Dialog(`Dialog${generateUniqueId()}`, {
                    // title: "Attachments",
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
                            // dialogOpen = false;
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

                // Add PDF icon and name to an HBox for alignment
                var pdfHBox = new sap.m.HBox();
                contentVBox.addItem(pdfHBox);
                var vb1 = new sap.m.VBox(("vb1" + generateUniqueId()));
                let customTreeHbox = new sap.m.HBox(`custtreehbox${generateUniqueId()}`, {

                    justifyContent: "SpaceBetween",
                    items: [


                        new sap.m.Text({ text: "Part No" }),
                        // new sap.ui.core.Icon({
                        //     src: "sap-icon://show",
                        //     activeColor: "black",
                        //     press: async function (oEvent) {
                        //         var pdfLink = 'pdf_link.pdf';

                        //         // Open a new window with the PDF link
                        //         window.open(pdfLink, '_blank');
                        //         MessageToast.show("Icon pressed")
                        //     }
                        // }),
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
                           new sap.ui.webc.main.TreeItemCustom(`fold1.1${generateUniqueId()}`,{
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
                                                            // new sap.ui.core.Icon({
                                                            //     src : "sap-icon://decline",
                                                            //     color : "red",
                                                            // }),
														]
													}).addStyleClass("child")
												]
											})
										],




								items: [ 
									new sap.ui.webc.main.TreeItemCustom(`fold1.1${generateUniqueId()}`,{
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
                                                            new sap.ui.core.Icon({
                                                                src : "sap-icon://decline",
                                                                color : "red",
                                                            }),
														]
													}).addStyleClass("child")
												]
											})
										],


                                        
								items: [ 
									new sap.ui.webc.main.TreeItemCustom(`fold1.1${generateUniqueId()}`,{
										content: [
											new sap.m.HBox({
												items: [
													new sap.ui.core.Icon({
														src: "sap-icon://folder-full"
													}),
													new sap.m.HBox(`custtreehbox2${generateUniqueId()}`,{
														justifyContent: "SpaceBetween",
														items: [ // Customize child folder appearance as needed
															new sap.m.Text({ text: "NDA" }),
                                                            new sap.ui.core.Icon({
                                                                src : "sap-icon://message-success",
                                                                color : "green",
                                                            }),
														]
													}).addStyleClass("child")
                                                    
												]
											})
										],
                                        
									}),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.2${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox(`custtreehbox3${generateUniqueId()}`,{
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "RFQ" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.3${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox(`custtreehbox4${generateUniqueId()}`,{
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Quote and Quote Synthesis" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.4${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox(`custtreehbox4${generateUniqueId()}`,{
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Quote Backup" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),


                                    new sap.ui.webc.main.TreeItemCustom(`fold1.5${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox(`custtreehbox5${generateUniqueId()}`,{
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Supplier Details" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.4${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox(`custtreehbox6${generateUniqueId()}`,{
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Quote Backup" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.5${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox(`custtreehbox7${generateUniqueId()}`,{
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Supplier Details" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.6${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox(`custtreehbox8${generateUniqueId()}`,{
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Offer price Approval from Bazzar Sales Team" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.7${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox(`custtreehbox9${generateUniqueId()}`,{
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "SBU VOB FORUM" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ],

                                        items : [
                                            new sap.ui.webc.main.TreeItemCustom(`fold1.7.1${generateUniqueId()}`, {
                                                content: [
                                                    new sap.m.HBox({
                                                        items: [
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://folder-2"
                                                            }),
                                                            new sap.m.HBox(`custtreehbox10${generateUniqueId()}`,{
                                                                justifyContent: "SpaceBetween",
                                                                items: [
                                                                    new sap.m.Text({ text: "PPT" }),
                                                                    new sap.ui.core.Icon({
                                                                        src: "sap-icon://decline",
                                                                        color: "red",
                                                                    }),
                                                                ]
                                                            }).addStyleClass("child")
                                
                                                        ]
                                                    })
                                                ]
                                            }),

                                            new sap.ui.webc.main.TreeItemCustom(`fold1.7.2${generateUniqueId()}`, {
                                                content: [
                                                    new sap.m.HBox({
                                                        items: [
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://folder-2"
                                                            }),
                                                            new sap.m.HBox(`custtreehbox11${generateUniqueId()}`,{
                                                                justifyContent: "SpaceBetween",
                                                                items: [
                                                                    new sap.m.Text({ text: "Backup data" }),
                                                                    new sap.ui.core.Icon({
                                                                        src: "sap-icon://decline",
                                                                        color: "red",
                                                                    }),
                                                                ]
                                                            }).addStyleClass("child")
                                
                                                        ]
                                                    })
                                                ]
                                            }),

                                            new sap.ui.webc.main.TreeItemCustom(`fold1.7.3${generateUniqueId()}`, {
                                                content: [
                                                    new sap.m.HBox({
                                                        items: [
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://folder-2"
                                                            }),
                                                            new sap.m.HBox(`custtreehbox12${generateUniqueId()}`,{
                                                                justifyContent: "SpaceBetween",
                                                                items: [
                                                                    new sap.m.Text({ text: "Approval" }),
                                                                    new sap.ui.core.Icon({
                                                                        src: "sap-icon://decline",
                                                                        color: "red",
                                                                    }),
                                                                ]
                                                            }).addStyleClass("child")
                                
                                                        ]
                                                    })
                                                ]
                                            }),
        
        
        
                                        ],

                                        
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.8${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox({
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Vendor Code Creation" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.4${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox({
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "NDA sign-off with Packagign Supplier" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.4${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox({
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Packaging Sign-off" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),


                                    new sap.ui.webc.main.TreeItemCustom(`fold1.4${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox({
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Proposed and Approved Drawings" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.4${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox({
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Validation Reports" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.4${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox({
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "Final Drawing Approval for Production" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),

                                    new sap.ui.webc.main.TreeItemCustom(`fold1.4${generateUniqueId()}`, {
                                        content: [
                                            new sap.m.HBox({
                                                items: [
                                                    new sap.ui.core.Icon({
                                                        src: "sap-icon://folder-full"
                                                    }),
                                                    new sap.m.HBox({
                                                        justifyContent: "SpaceBetween",
                                                        items: [
                                                            new sap.m.Text({ text: "VPPAP" }),
                                                            new sap.ui.core.Icon({
                                                                src: "sap-icon://decline",
                                                                color: "red",
                                                            }),
                                                        ]
                                                    }).addStyleClass("child")
                        
                                                ]
                                            })
                                        ]
                                    }),


								],

                                

                                

                                

                                        
								// items: [ 
								// 	new sap.ui.webc.main.TreeItemCustom({
								// 		content: [
								// 			new sap.m.HBox({
								// 				items: [
								// 					new sap.ui.core.Icon({
								// 						src: "sap-icon://folder-full"
								// 					}),
								// 					new sap.m.HBox({
								// 						justifyContent: "SpaceBetween",
								// 						items: [ // Customize child folder appearance as needed
								// 							new sap.m.Text({ text: "NDA" }),
                                //                             new sap.ui.core.Icon({
                                //                                 src : "sap-icon://decline",
                                //                                 color : "red",
                                //                             }),
								// 						]
								// 					}).addStyleClass("child")
								// 				]
								// 			})
								// 		],
                                        
                                        
								// 	})
								// ]
                                        
									})
								]

                            }),
                            // Add new parent folder below the existing folders
                            // new sap.ui.webc.main.TreeItemCustom({
                            //     content: [
                            //         new sap.m.HBox({
                            //             items: [
                            //                 new sap.ui.core.Icon({
                            //                     src: "sap-icon://folder-full"
                            //                 }),
                            //                 new sap.m.HBox({
                            //                     justifyContent: "SpaceBetween",
                            //                     items: [
                            //                         new sap.m.Text({ text: "NDA" }),
                            //                         // new sap.m.Text({ text: " not Uploaded" }),
                            //                         new sap.ui.core.Icon({
                            //                             src : "sap-icon://message-success",
                            //                             color : "green",
                            //                         }),
                            //                         // new sap.ui.core.Icon({
                            //                         //     src: "sap-icon://show",
                            //                         //     activeColor: "black",
                            //                         //     press: async function (oEvent) {
                            //                         //         // Handle icon press
                            //                         //     }
                            //                         // })
                            //                     ]
                            //                 }).addStyleClass("customtreeInnerHbox")
                            //             ]
                            //         })
                            //     ]
                            // })
                        ]
                    })
                );



                cdialog.addContent(contentVBox);
                cdialog.addContent(vb1);
                
                cdialog.open();

            // }
        }
    };
});
