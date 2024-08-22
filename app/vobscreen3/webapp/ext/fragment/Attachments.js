sap.ui.define([
	"sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/ui/unified/FileUploader",
    "sap/ui/model/json/JSONModel",
    "sap/m/Tree",
    "sap/m/CustomTreeItem",
    "sap/m/HBox",
    "sap/ui/core/Icon"
], function (MessageToast, Dialog, Button, Text, FileUploader, JSONModel, Tree, CustomTreeItem, HBox, Icon){
	'use strict';
	var that = this;
	var extractedNumber;
	var dialogOpen;
	var type;
	var foldername;
	var baseuri;
	var textbox;

	return {
		onPress: function (oEvent) {
			debugger
			MessageToast.show("Custom handler invoked.");
		},
		onAfterItemAdded: async function (oEvent) {
			baseuri = oEvent.oSource.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oContainer.getParent().getParent().getParent().getManifestObject()._oBaseUri._string;

			debugger
			var item = oEvent.getParameter("item");
			var filename = oEvent.getParameter("item").getFileName();
			var filetype = oEvent.getParameter("item").getFileObject().type;
			// switch (filetype) {
			// 	case "application/pdf":
			// 	type = "sap-icon://pdf-attachment";
			// 		break;
			// 	case "image/jpeg":
			// 	type = "sap-icon://picture";
			// 	break;
			// 	case "text/csv":
			// 	type = "text/csv";
			// 	break;
			// 	default:
			// 		type = "sap-icon://attachment";
			// 		break;
			// }
			function generateUniqueId() {
				// Generate a random number and convert it to base 36 (0-9a-z)
				const randomPart = Math.random().toString(36).substr(2, 9);

				// Get the current timestamp and convert it to base 36
				const timestampPart = Date.now().toString(36);

				// Concatenate the random part and timestamp part
				const uniqueId = randomPart + timestampPart;

				return uniqueId;
			}
			// Open dialog only if it's not already open
			if (!dialogOpen) {
				dialogOpen = true;

				// Create the dialog
				var cdialog = new sap.m.Dialog(`dialog${generateUniqueId()}`, {
					title: "Folders",
					contentWidth: "40%",
					endButton: new sap.m.Button({
						text: "Cancel",
						press: function (oEvent) {
							debugger
							cdialog.close();
							// var incomplete_items = sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSubSection::Attachments--11").destroyIncompleteItems();
							sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSubSection::Attachments--11").mAggregations.items[1].destroyIncompleteItems();
							cdialog.destroyContent();
							dialogOpen = false; // Reset the flag when dialog is closed
						},


					}),
					beginButton: new sap.m.Button({
						text: "Ok",
						press: function (oEvent) {
							var currentUrl = window.location.href;
							var uuidRegex = /id=([0-9a-fA-F-]+),/;
							var id = currentUrl.match(uuidRegex)[1];
							foldername = oEvent.getSource().getParent().mAggregations.content[1].mAggregations.items[0].mProperties.footerText;
							if (foldername == "Click on the folder to select path") {
								var oMessageBox = sap.m.MessageBox.warning("No folder selected.", {
									title: "Warning",
									onClose: function () {
										oMessageBox.close();
										debugger;
									}
								});
							}
							else {
								debugger
								var _createEntity = function (item) {
									debugger
									var data = {
										mediaType: item.getMediaType(),
										fileName: item.getFileName(),
										// size: item.getFileObject().size,
										Folder: foldername,
										vob_id:id
									};

									var settings = {
										url: baseuri + "odata/v4/my/Files",
										method: "POST",
										headers: {
											"Content-type": "application/json"
										},
										data: JSON.stringify(data)
									};

									return new Promise((resolve, reject) => {
										$.ajax(settings)
											.done((results, textStatus, request) => {
												resolve(results.ID);
											})
											.fail((err) => {
												reject(err);
											});
									});
								};

								_createEntity(item)
									.then((id) => {
										debugger
										var url = baseuri + `odata/v4/my/Files(${id})/content`;
										item.setUploadUrl(url);
										cdialog.close();
										cdialog.destroyContent();
										dialogOpen = false;
										// var oUploadSet = this.byId("uploadSet");
										var oUploadSet = sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSubSection::Attachments--11").mAggregations.items[1]
										oUploadSet.setHttpRequestMethod("PUT");
										oUploadSet.uploadItem(item);
									})
									.catch((err) => {
										console.log(err);
									});



								debugger
							}
						}
					})


				});

				// Add VBox for content
				var contentVBox = new sap.m.VBox({
					width: "100%",
					height: "100%"
				});

				contentVBox.addStyleClass("vboxclass");

				// Add PDF icon and name to an HBox for alignment
				var pdfHBox = new sap.m.HBox();
				var pdfIcon = new sap.ui.core.Icon({
					src: type,
					size: "2rem", // Adjust the size as needed
					marginRight: "0.5rem" // Add some space between the icon and text
				});
				debugger;
				var pdfName = new sap.m.Text({
					text: filename
				});
				pdfIcon.addStyleClass("icon")
				pdfName.addStyleClass("name");
				// pdfHBox.addItem(pdfIcon);
				// pdfHBox.addItem(pdfName);
				contentVBox.addItem(pdfHBox);

				

				var vb1 = new sap.m.VBox("vb1");
				// vb1.addItem(
				// 	new sap.ui.webc.main.Tree("tree", {
				// 		itemClick: async function (params) {
				// 			debugger;
				// 			let selectedItem = params.mParameters.item;
				// 			let path = '';
				// 			let currentFolder = selectedItem;

				// 			// Traverse up the hierarchy and construct the path
				// 			while (currentFolder && currentFolder.getId() !== 'tree') {
				// 				// Get the icon and name of the current folder
				// 				// let icon = currentFolder.getIcon();
				// 				let name = currentFolder.getText();

				// 				// Construct the path by adding the icon and name
				// 				path = `${name} / ${path}`;

				// 				// Move to the parent folder
				// 				currentFolder = currentFolder.getParent();
				// 			}

				// 			// Set the footer text with the constructed path
				// 			sap.ui.getCore().byId("tree").setFooterText(path);
				// 		},
				// 		footerText: "Click on the folder to select path",
				// 		// title: "Folders",
				// 		items: [
				// 			new sap.ui.webc.main.TreeItem(`fold1${generateUniqueId()}`, {
				// 				icon: "sap-icon://folder-full",
				// 				text: "Part No",

				// 				//=======================Vendor 1========================
				// 				items: [
				// 					new sap.ui.webc.main.TreeItem(`fold2${generateUniqueId()}`, {
				// 						icon: "sap-icon://folder-full",
				// 						text: "Vendor 1",
				// 					})]
				// 			})]
				// 	})
				// )
				var currentUrl = window.location.href;
					var uuidRegex = /id=([0-9a-fA-F-]+),/;
					var id = currentUrl.match(uuidRegex)[1];
				let oFunction1 = this.getModel().bindContext("/vanddetails(...)");
					var statusval1 = JSON.stringify({ id: id, status: "screen2get1" })
					oFunction1.setParameter("status", statusval1)
					await oFunction1.execute()
					debugger
					var result1 = oFunction1.getBoundContext().getValue().value;
					var finalsupp = JSON.parse(result1);
					var supp = finalsupp.supplier;
					var part = finalsupp.venordss;
					var yoy = [];
					var poten = [];
				var foldernode = [{
                    text: "NDA"
                },
                {
                    text: "RFQ"
                },
                {
                    text: "Quote and Quote Synthesis"
                },
                {
                    text: "Quote Backup"
                },
                {
                    text: "Supplier Details"
                },
                {
                    text: "Offer price Approval from Bazzar Sales Team"
                },
                {
                    text: "SBU VOB FORUM",
                    nodes: [
                        {
                            text: "PPT"
                        },
                        {
                            text: "Backup data"
                        },
                        {
                            text: "Approval"
                        },
                    ],
                },
                {
                    text: "Vendor Code Creation"
                },
                {
                    text: "NDA sign-off with Packagign Supplier"
                },
                {
                    text: "Packaging Sign-offer"
                },
                {
                    text: "Proposed and Approved Drawings"
                },
                {
                    text: "alidation Reports"
                },
                {
                    text: "Final Drawing Approval for Production"
                },
                {
                    text: "VPPAP"
                },
                ]
				for (let a = 0; a < part.length; a++) {
					yoy.push(part[a].MGSP_Part_Nos);
				}
				for (let b = 0; b < supp.length; b++) {
					poten.push(supp[b].suplier)
				}
				console.log(yoy);
	
				console.log(poten);
				var mainNode = [];

				for (let i = 0; i < yoy.length; i++) {
					let partText = {
						text: yoy[i],
						nodes: []
					}
					for (let j = 0; j < poten.length; j++) {
						let supplierNode = {
							text: poten[j],
							nodes: foldernode
						}
						partText.nodes.push(supplierNode);
	
					}
					mainNode.push(partText);
				}
                // var mainNode = [
                //     {
                //         text: "part1",
                //         nodes: [
                //             {
                //                 text: "Vendor1",
                //                 nodes: foldernode
                //             },
                //             {
                //                 text: "Vendor2",
                //                 nodes: foldernode
                //             }
                //         ]
                //     }
                // ]
				var treeModel = new JSONModel({ treeModel: { nodes: mainNode } });

                console.log("Mainnode", mainNode);
				var oTree = new Tree({
                    mode: "SingleSelect",
                    items: {
                        path: "/treeModel/nodes",
                        template: new CustomTreeItem({
                            content: new HBox({
                                items: [
                                    new Icon({ src: 'sap-icon://folder-full' }),
                                    new Text({ text: '{text}' }).addStyleClass("text"),
                                    // new Icon({ src: 'sap-icon://message-success' })
                                ]
                            }).addStyleClass("TreeHboxClass"),
                            items: {
                                path: "nodes",
                                template: new CustomTreeItem({
                                    content: new HBox({
                                        width: "500px",
                                        justifyContent: "SpaceBetween",
                                        items: [
                                            new Icon({ src: 'sap-icon://folder-full' }),
                                            new Text({ text: '{text}' }).addStyleClass("text"),
                                            // new Icon({ src: 'sap-icon://message-success' })
                                        ]
                                    }).addStyleClass("TreeHboxClass")
                                })
                            }
                        })
                    },
                    selectionChange: function (oEvent) {
                        debugger
                        var aSelectedItems = oTree.getSelectedItems();

                            console.log("Tree selectionChange event triggered");

                            function getPathFromItem(oItem) {
                                var aPath = [];
                                while (oItem) {
                                    var oBindingContext = oItem.getBindingContext();
                                    if (oBindingContext) {
                                        aPath.unshift(oBindingContext.getPath());
                                    } else {
                                        break; // Exit loop if there is no binding context
                                    }
                                    oItem = oItem.getParent();
                                }
                                return aPath.join("/");
                            }

                            if (aSelectedItems.length > 0) {
                                var sPath = getPathFromItem(aSelectedItems[0]);
                                console.log("Selected Path: " + sPath);
                                function getNodeTextFromPath(nodes, path) {
                                    // Split the path into its components
                                    var pathComponents = path.split('/').filter(Boolean);
                                
                                    // Initialize currentNodes with the top level nodes
                                    var currentNodes = nodes;
                                    var textAsPath = '';
                                    
                                    // Traverse the nodes according to the path components
                                    for (var i = 0; i < pathComponents.length; i++) {
                                        var index = parseInt(pathComponents[i], 10);
                                        
                                        // Check if index is valid
                                        if (isNaN(index) || index < 0 || index >= currentNodes.length) {
                                            continue; // Invalid path
                                        }
                                        
                                        // Update currentNode and textAsPath
                                        var currentNode = currentNodes[index];
                                        textAsPath += (textAsPath ? '/' : '') + currentNode.text;
                                
                                        // Move to the next level if nodes exist
                                        currentNodes = currentNode.nodes || [];
                                    }
                                
                                    // Return the accumulated path of texts
                                    return textAsPath;
                                }
                                var text = getNodeTextFromPath(mainNode, sPath);
                                debugger
								// spathtext = text;
								textbox.setText(text);
                                console.log("Text at path:", text);
                            }
                    }
                });
				oTree.setModel(treeModel);
				vb1.addItem(oTree);
				textbox= new sap.m.Text({text:"ddd"});
				vb1.addItem(
					textbox
				)



				cdialog.addContent(contentVBox);
				cdialog.addContent(vb1);


				// var keyValuePairs = [
				// 	{ NDA: 'Demo1' },
				// 	{ RFQ: 'Demo2' },
				// 	{ RFQ: 'Demo3' }
				// ];

				// var mail = new sap.ushell.services.UserInfo().getEmail();
				// debugger;

				// debugger;
				// let params = 'get'
				// let f_imp = this.getModel().bindContext("/fold_data_attach(...)");
				// f_imp.setParameter("id", params);
				// await f_imp.execute();
				// var result1 = f_imp.getBoundContext().getValue();
				// var result1 = JSON.parse(result1.value);


				// debugger
				// var folders = [];


				// for (var i = 0; i < result1.length; i++) {

				// 	for (var i = 0; i < result1.length; i++) {
				// 		if (result1[i].Data === mail) { // Check if email matches
				// 			folders.push(result1[i].id); // Push the ID to folders array
				// 		}
				// 	}
				// }
				debugger
				// var child = vb1.mAggregations.items[0].mAggregations.items[0].mAggregations.items[0];
				// for (let a = 0; a < folders.length; a++) {
				// 	child.addItem(
				// 		new sap.ui.webc.main.TreeItem(`fold1.3${generateUniqueId()}`, {
				// 			icon: "sap-icon://folder-full",
				// 			text: folders[a],
				// 		})
				// 	)
				// }

				cdialog.open();

			}
			// 	var _createEntity = function(item) {
			// 		var data = {
			// 			mediaType: item.getMediaType(),
			// 			fileName: item.getFileName(),
			// 			size: item.getFileObject().size,
			// 			id1 : extractedNumber,
			// 		};

			// 		var settings = {
			// 			url: "/odata/v4/attachments/Files",
			// 			method: "POST",
			// 			headers: {
			// 				"Content-type": "application/json"
			// 			},
			// 			data: JSON.stringify(data)
			// 		};

			// 		return new Promise((resolve, reject) => {
			// 			$.ajax(settings)
			// 				.done((results, textStatus, request) => {
			// 					resolve(results.ID);
			// 				})
			// 				.fail((err) => {
			// 					reject(err);
			// 				});
			// 		});
			// 	};

			// 	_createEntity(item)
			// 		.then((id) => {
			// 			var url = `/odata/v4/attachments/Files(ID=${id},id1='${extractedNumber}')/content`;
			// 			item.setUploadUrl(url);
			// 			var oUploadSet = this.byId("uploadSet");
			// 			oUploadSet.setHttpRequestMethod("PUT");
			// 			oUploadSet.uploadItem(item);
			// 		})
			// 		.catch((err) => {
			// 			console.log(err);
			// 		});
			// },

			// onUploadCompleted: function (oEvent) {
			// 	var oUploadSet = this.byId("uploadSet");
			// 	oUploadSet.removeAllIncompleteItems();
			// 	oUploadSet.getBinding("items").refresh();
			// },

			// onRemovePressed: function (oEvent) {
			// 	debugger;
			// 	// oEvent.preventDefault();
			// 	// oEvent.getParameter("item").getBindingContext().delete();
			// 	// MessageToast.show("Selected file has been deleted");
			// 	oEvent.getParameter("item").destroy();

			// },

			// onOpenPressed: function(oEvent) {
			// 	debugger;
			// 	oEvent.preventDefault();
			// 	var item = oEvent.getSource();
			// 	var fileUrl = item.getUrl();

			// 	// Open file in a new tab
			// 	var newTab = window.open(fileUrl, '_blank');
			// 	if (newTab) {
			// 		newTab.focus();
			// 	} else {
			// 		// If pop-up blocker prevents opening new tab, provide alternative instructions
			// 		alert('Please allow pop-ups to open the file.');			

			// 		return new Promise((resolve, reject) => {
			// 			$.ajax(settings)
			// 				.done((result) => {
			// 					resolve(result);
			// 				})
			// 				.fail((err) => {
			// 					reject(err);
			// 				});
			// 		});
			// 	};

			// 	_download(item)
			// 		.then((blob) => {
			// 			var url = window.URL.createObjectURL(blob);
			// 			var link = document.createElement('a');
			// 			link.href = url;
			// 			link.setAttribute('download', fileName);
			// 			document.body.appendChild(link);
			// 			link.click();
			// 			document.body.removeChild(link);
			// 		})
			// 		.catch((err) => {
			// 			console.log(err);
			// 		});
			// },

			// _download: function (item) {
			// 	var settings = {
			// 		url: item.getUrl(),
			// 		method: "GET",
			// 		headers: {
			// 			"Content-type": "application/octet-stream"
			// 		},
			// 		xhrFields: {
			// 			responseType: 'blob'
			// 		}
			// 	}

			// 	return new Promise((resolve, reject) => {
			// 		$.ajax(settings)
			// 			.done((result) => {
			// 				resolve(result)
			// 			})
			// 			.fail((err) => {
			// 				reject(err)
			// 			})
			// 	});
			// },

			// _createEntity: function (item) {
			// 	var data = {
			// 		mediaType: item.getMediaType(),
			// 		fileName: item.getFileName(),
			// 		size: item.getFileObject().size
			// 	};

			// 	var settings = {
			// 		url: "/attachments/Files",
			// 		method: "POST",
			// 		headers: {
			// 			"Content-type": "application/json"
			// 		},
			// 		data: JSON.stringify(data)
			// 	}

			// 	return new Promise((resolve, reject) => {
			// 		$.ajax(settings)
			// 			.done((results, textStatus, request) => {
			// 				resolve(results.ID);
			// 			})
			// 			.fail((err) => {
			// 				reject(err);
			// 			})
			// 	})
			// },

			// _uploadContent: function (item, id) {
			// 	// var url = `/attachments/Files(${id})/content`
			// 	var url = `/attachments/Files(ID='${id}',id1=)/content`
			// 	item.setUploadUrl(url);
			// 	var oUploadSet = this.byId("uploadSet");
			// 	oUploadSet.setHttpRequestMethod("PUT")
			// 	oUploadSet.uploadItem(item);
			// },

			//formatters
			// formatThumbnailUrl: function (mediaType) {
			// 	var iconUrl;
			// 	switch (mediaType) {
			// 		case "image/png":
			// 			iconUrl = "sap-icon://card";
			// 			break;
			// 		case "text/plain":
			// 			iconUrl = "sap-icon://document-text";
			// 			break;
			// 		case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
			// 			iconUrl = "sap-icon://excel-attachment";
			// 			break;
			// 		case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
			// 			iconUrl = "sap-icon://doc-attachment";
			// 			break;
			// 		case "application/pdf":
			// 			iconUrl = "sap-icon://pdf-attachment";
			// 			break;
			// 		default:
			// 			iconUrl = "sap-icon://attachment";
			// 	}
			// 	return iconUrl;
		},


		onOpenPressed: function (oEvent) {
			debugger
			;
			oEvent.preventDefault();

			var item = oEvent.getSource();
			var fileName = item.getFileName();
			var url111 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oBindingContexts.undefined.oModel.sServiceUrl;
			var newurl = item.getUrl();
			var bWithoutCommonPart = newurl.substring('/odata/v4/my/'.length);
			var new_url = url111 + bWithoutCommonPart;
			// let dynamicUrl = newurl.replace("attachments", "Files");
			// console.log(dynamicUrl);
			var _download = function (item) {
				var settings = {
					// url: url111 + item.getUrl(),
					url: new_url,
					method: "GET",
					headers: {
						"Content-type": "application/octet-stream"
					},
					xhrFields: {
						responseType: 'blob'
					}
				};

				return new Promise((resolve, reject) => {
					$.ajax(settings)
						.done((result) => {
							resolve(result);
						})
						.fail((err) => {
							reject(err);
						});
				});
			};

			_download(item)
				.then((blob) => {
					var url = window.URL.createObjectURL(blob);
					// Open the file in a new tab
					window.open(url, '_blank');
				})
				.catch((err) => {
					console.log(err);
				});
		},




		formatThumbnailUrl: function (mediaType) {
			debugger
			var iconUrl;
			switch (mediaType) {
				case "image/png":
					iconUrl = "sap-icon://card";
					break;
				case "text/plain":
					iconUrl = "sap-icon://document-text";
					break;
				case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
					iconUrl = "sap-icon://excel-attachment";
					break;
				case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
					iconUrl = "sap-icon://doc-attachment";
					break;
				case "application/pdf":
					iconUrl = "sap-icon://pdf-attachment";
					break;
				default:
					iconUrl = "sap-icon://attachment";
			}
			return iconUrl;
		},

		onUploadCompleted: function (oEvent) {
			debugger;
			var oUploadSet = this.byId("uploadSet");
			oUploadSet.removeAllIncompleteItems();
			oUploadSet.getBinding("items").refresh();
		},

	};
});
