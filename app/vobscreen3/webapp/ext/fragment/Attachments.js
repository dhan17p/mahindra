sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/Item",
	"sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
	var that = this;
	var extractedNumber;
	var dialogOpen;
	var type;
	var foldername;
	var baseuri;

    return {
        onPress: function(oEvent) {
            debugger
            MessageToast.show("Custom handler invoked.");
        },
		onAfterItemAdded: function(oEvent) {
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
		
			// Open dialog only if it's not already open
			if (!dialogOpen) {
				dialogOpen = true; 
		
				// Create the dialog
				var cdialog = new sap.m.Dialog({
					// title: "Attachments",
					contentWidth : "40%",
					endButton: new sap.m.Button({
						text: "Cancel",
						press: function(oEvent) {
							debugger
							cdialog.close();
							// var incomplete_items = sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSubSection::Attachments--11").destroyIncompleteItems();
							sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSubSection::Attachments--11").mAggregations.items[1].destroyIncompleteItems();
							cdialog.destroyContent();
							dialogOpen = false; // Reset the flag when dialog is closed
						},

					
					}),
					beginButton : new sap.m.Button({
						text : "Ok",
						press : function(oEvent)
						{
							foldername = oEvent.getSource().getParent().mAggregations.content[1].mAggregations.items[0].mProperties.footerText;
							if(foldername == "Click on the folder to select path")
							{
								var oMessageBox = sap.m.MessageBox.warning("No folder selected.", {
									title: "Warning",
									onClose: function() {
										oMessageBox.close();
										debugger;
									}
								});
							}
							else {
							debugger
							var _createEntity = function(item) {
								debugger
								var data = {
									mediaType: item.getMediaType(),
									fileName: item.getFileName(),
									// size: item.getFileObject().size,
									Folder : foldername,
									
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
				contentVBox.addItem(pdfHBox) ;
		
				// Add "Uploaded on" text below the PDF name
				// var uploadedOnText = new sap.m.Text({
				// 	text: "Uploaded on: 2024-03-06" // Replace this with the actual upload date
				// });

				// uploadedOnText.addStyleClass("uptime")
				// contentVBox.addItem(uploadedOnText);
		
				var vb1 = new sap.m.VBox("vb1");
				vb1.addItem(
					new sap.ui.webc.main.Tree("treee", {
						itemClick: async function (params) {
							let selectedItem = params.mParameters.item;
							let path = '';
							let currentFolder = selectedItem;

							// Traverse up the hierarchy and construct the path
							while (currentFolder && currentFolder.getId() !== 'treee') {
								// Get the icon and name of the current folder
								// let icon = currentFolder.getIcon();
								let name = currentFolder.getText();

								// Construct the path by adding the icon and name
								path = `${name} / ${path}`;

								// Move to the parent folder
								currentFolder = currentFolder.getParent();
							}

							// Set the footer text with the constructed path
							sap.ui.getCore().byId("treee").setFooterText(path);
						},
						footerText: "Click on the folder to select path",
						headerText: "Folders",
						//=======================Folder1========================
						items: [
							new sap.ui.webc.main.TreeItem("folder_1", {
								icon: "sap-icon://folder-full",
								text: "Part No",
				
								//=======================Vendor 1========================
								items: [
									new sap.ui.webc.main.TreeItem("folder_2", {
										icon: "sap-icon://folder-full",
										text: "Vendor 1",
				
										// Nested folders under Vendor 1
										items: [
											new sap.ui.webc.main.TreeItem("folder_2.1", {
												icon: "sap-icon://folder-full",
												text: "NDA",
											}),
											new sap.ui.webc.main.TreeItem("folder_2.2", {
												icon: "sap-icon://folder-full",
												text: "RFQ",
											}),

											new sap.ui.webc.main.TreeItem("folder_2.3", {
												icon: "sap-icon://folder-full",
												text: "Quote and Quote Synthesis",
											}),

											new sap.ui.webc.main.TreeItem("folder_2.4", {
												icon: "sap-icon://folder-full",
												text: "Quote Backup",
											}),
											
											new sap.ui.webc.main.TreeItem("folder_2.5", {
                                                icon: "sap-icon://folder-full",
                                                text: "Supplier Details",
											}),
											new sap.ui.webc.main.TreeItem("folder_2.6", {
												icon: "sap-icon://folder-full",
												text: "Offer price Approval from Bazzar Sales Team",
											}),
											new sap.ui.webc.main.TreeItem("folder_2.7", {
												icon: "sap-icon://folder-full",
												text: "SBU VOB FORUM",

												items: [
													new sap.ui.webc.main.TreeItem("folder_2.7.1", {
														icon: "sap-icon://folder-2",
														text: "PPT",
													}),
													new sap.ui.webc.main.TreeItem("folder_9.2", {
														icon: "sap-icon://folder-2",
														text: "Backup data",
													}),
													new sap.ui.webc.main.TreeItem("folder_9.3", {
														icon: "sap-icon://folder-2",
														text: "Approval",
													})
												]
											}),
											new sap.ui.webc.main.TreeItem("folder_2.8", {
												icon: "sap-icon://folder-full",
												text: "Vendor Code Creation",
											}),
											new sap.ui.webc.main.TreeItem("folder_2.9", {
												icon: "sap-icon://folder-full",
												text: "NDA sign-off with Packagign Supplier",
											}),
											new sap.ui.webc.main.TreeItem("folder_3.0", {
												icon: "sap-icon://folder-full",
												text: "Packaging Sign-offr",
											}),
											new sap.ui.webc.main.TreeItem("folder_3.1", {
												icon: "sap-icon://folder-full",
												text: "Proposed and Approved Drawings",
											}),
											new sap.ui.webc.main.TreeItem("folder_3.2", {
												icon: "sap-icon://folder-full",
												text: "Validation Reports",
											}),
											new sap.ui.webc.main.TreeItem("folder_3.3", {
												icon: "sap-icon://folder-full",
												text: "Final Drawing Approval for Production",
											}),
											new sap.ui.webc.main.TreeItem("folder_3.4", {
												icon: "sap-icon://folder-full",
												text: "VPPAP",
											})
										]
									})
								]
							})
						]
					})
				);
				
			
				
									

				// Create the tree table
				// Create the tree table
				
var treeTable = new sap.ui.table.TreeTable({
    width: "100%",
    visibleRowCount: 5, // Adjust the number of visible rows as needed
    columns: [
        new sap.ui.table.Column({
            label: new sap.m.Label({ text: "Folder Name" }),
            template: new sap.m.HBox({
                alignItems: sap.m.FlexAlignItems.Center, // Align items vertically center
                items: [
                    new sap.m.Button({
                        icon: "sap-icon://navigation-right-arrow",
                        press: function(oEvent) {
							deb
							var obindingcontext = oEvent.getSource().getBindingContext()
							var spath = obindingcontext.getPath();
						var omodel = obindingcontext.getModel();
						var oNode = omodel.getProperty(spath);
							debugger
                            // Handle button press event here
                            console.log("Arrow button clicked");
                        }
                    }),
                    new sap.m.Text({ text: "{name}" })
                ]
            })
        })
    ]
});

		
				// Create a JSON model with sample data for the tree table
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData({
					root: {
						name: "Root Folder",
						children: [
							{ name: "Child Folder 1" },
							{ name: "Child Folder 2" }
						]
					}
				});
				treeTable.setModel(oModel);
				treeTable.bindRows({
					path: "/root",
					parameters: {
						arrayNames: ["children"]
					}
				});
		
				contentVBox.addItem(treeTable);
				
				vb1.addItem(
					new sap.ui.webc.main.Tree("tree",{
						itemClick: async function (params) {
							debugger;
							let selectedItem = params.mParameters.item;
							let path = '';
							let currentFolder = selectedItem;

							// Traverse up the hierarchy and construct the path
							while (currentFolder && currentFolder.getId() !== 'tree') {
								// Get the icon and name of the current folder
								// let icon = currentFolder.getIcon();
								let name = currentFolder.getText();

								// Construct the path by adding the icon and name
								path = `${name} / ${path}`;

								// Move to the parent folder
								currentFolder = currentFolder.getParent();
							}

							// Set the footer text with the constructed path
							sap.ui.getCore().byId("tree").setFooterText(path);
						},
						footerText: "Click on the folder to select path",
						headerText: "Folders",
						items: [
							new sap.ui.webc.main.TreeItem("folder_1", {
								icon: "sap-icon://folder-full",
								text: "Part No",
							})]
					})
				)
				for(let a=0;a<result.length;a++)
				{
				
				}
				cdialog.addContent(contentVBox);
				cdialog.addContent(vb1);
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


			onOpenPressed: function(oEvent) {
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
				var _download = function(item) {
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
