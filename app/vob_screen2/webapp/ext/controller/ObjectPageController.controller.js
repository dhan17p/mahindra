sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('vobscreen2.ext.controller.ObjectPageController', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf vobscreen2.ext.controller.ObjectPageController
			 */
			// onInit: function () {
			// 	function generateUniqueId() {
			// 		// Generate a random number
			// 		var randomNumber = Math.floor(Math.random() * 1000000);

			// 		// Get the current timestamp
			// 		var timestamp = new Date().getTime();

			// 		// Combine timestamp and random number to create a unique ID
			// 		var uniqueId = timestamp + '-' + randomNumber;

			// 		return uniqueId;
			// 	}
			// 	// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			// 	var oModel = this.base.getExtensionAPI().getModel();
			// 	debugger
			// 	let header_anchor = this.base.getView().mAggregations.content[0].mAggregations.headerTitle;
			// 	header_anchor.destroyActions();
			// 	debugger


			// 	let oHbox = sap.ui.getCore().byId("vobscreen2::VOB_Screen2ObjectPage--fe::CustomSubSection::Vandorboard--mainHBox").getItems()[1];

			// 	header_anchor.addAction(new sap.m.Button({
			// 		text: "Add Vendor",
			// 		press: function async(oEvent) {
			// 			debugger

			// 			let vendordetails = ["Vendor  1", "vendor2", "vendor3", "vendor4", "vendor5"]


			// 			let comboBox = new sap.m.ComboBox();

			// 			for (let i = 0; i < vendordetails.length; i++) {
			// 				comboBox.addItem(new sap.ui.core.Item({
			// 					text: vendordetails[i]
			// 				}))

			// 			}
			// 			var oDialog = new sap.m.Dialog({
			// 				title: "Add Vendor",
			// 				type: sap.m.DialogType.Message,
			// 				content: [
			// 					new sap.m.Label({ text: `Vendor Name: ⠀`, design: "Bold" }),
			// 					comboBox
			// 				],
			// 				beginButton: new sap.m.Button({

			// 					text: "OK",
			// 					press: async function (oEvent) {
			// 						debugger
			// 						let vendor_name = oEvent.getSource().getParent().getContent()[1].getValue();

			// 						let oTable = oHbox.getParent().getItems()[0].getItems()[0];
			// 						let oTableVbox = oHbox.getParent().getItems()[0].getItems()[1];
			// 						let list_inp_field = [];
			// 						let input_field;



			// 						for (let i = 0; i < oTable.getItems().length + oTableVbox.getItems().length; i++) {
			// 							input_field = new sap.m.TextArea({
			// 								height: "32px",
			// 								wrapping: 'None'
			// 								// rows:1
			// 							});
			// 							input_field.addStyleClass("inpFieldClass ResetClass")
			// 							list_inp_field.push(input_field)
			// 						}

			// 						let inp_vbox = new sap.m.VBox({
			// 							items: list_inp_field
			// 						});
			// 						inp_vbox.addStyleClass("ResetClass inpVboxClass")

			// 						let vendor = new sap.m.VBox({
			// 							items: [
			// 								new sap.m.Label({ text: vendor_name, design: "Bold" }),
			// 								inp_vbox
			// 							]
			// 						});


			// 						vendor.addStyleClass("vendorClass");



			// 						oHbox.addItem(vendor);
			// 						oDialog.close();
			// 					}
			// 				}),
			// 				endButton: new sap.m.Button({
			// 					text: "Close",
			// 					press: async function (oEvent) {
			// 						oDialog.close()
			// 					}
			// 				})
			// 			})

			// 			oDialog.open()
			// 		}
			// 	}))
			// },
			// routing: {
			// 	onAfterBinding: async function (oBindingContext) {
			// 		debugger
			// 		let objectPage = this.base.getView().getContent()[0];
			// 		// objectPage.getSections()[0].getSubSections()[0].setShowTitle(false);
			// 		// let subsection = objectPage.getSections()[0].getSubSections()[0];
			// 		// subsection.addStyleClass("sectionClass");
			// 		// subsection.setShowTitle(false);

			// 		let tableData = [
			// 			{
			// 				"mgsp_part_no": "12345",
			// 				"existing_mgsp_po_price": 1500,
			// 				"target_price": 1200
			// 			},
			// 			{
			// 				"mgsp_part_no": "67890",
			// 				"existing_mgsp_po_price": 2000,
			// 				"target_price": 1800
			// 			},
			// 			{
			// 				"mgsp_part_no": "13579",
			// 				"existing_mgsp_po_price": 3000,
			// 				"target_price": 2800
			// 			},
			// 			{
			// 				"mgsp_part_no": "24680",
			// 				"existing_mgsp_po_price": 2500,
			// 				"target_price": 2000
			// 			},
			// 			{
			// 				"mgsp_part_no": "54321",
			// 				"existing_mgsp_po_price": 1800,
			// 				"target_price": 1500
			// 			}
			// 		]


			// 		var oMainHbox = objectPage.getSections()[0].getSubSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations.content;

			// 		let oTable = oMainHbox.getItems()[0].getItems()[0];

			// 		for (let i = 0; i < tableData.length; i++) {
			// 			debugger
			// 			oTable.addItem(new sap.m.ColumnListItem(`row${i}`))
			// 			let row = oTable.getItems()[i];

			// 			let mgsp_part_no = new sap.m.Text({
			// 				text: tableData[i].mgsp_part_no
			// 			})
			// 			row.addCell(mgsp_part_no);

			// 			let existing_mgsp_po_price = new sap.m.Text({
			// 				text: tableData[i].existing_mgsp_po_price
			// 			})
			// 			row.addCell(existing_mgsp_po_price);

			// 			let target_price = new sap.m.Text({
			// 				text: tableData[i].target_price
			// 			})
			// 			row.addCell(target_price);

			// 		}

			// 	}
			// }
			onInit: function () {
				function generateUniqueId() {
					// Generate a random number
					var randomNumber = Math.floor(Math.random() * 1000000);

					// Get the current timestamp
					var timestamp = new Date().getTime();

					// Combine timestamp and random number to create a unique ID
					var uniqueId = timestamp + '-' + randomNumber;

					return uniqueId;
				}
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				let header_anchor = this.base.getView().mAggregations.content[0].mAggregations.headerTitle;
				header_anchor.destroyActions();


				let oHbox = sap.ui.getCore().byId("vobscreen2::VOB_Screen2ObjectPage--fe::CustomSubSection::Vandorboard--mainHBox").getItems()[1];

				header_anchor.addAction(new sap.m.Button({
					text: "Add Vendor",
					type: "Accept",
					press: function async(oEvent) {
						debugger

						let vendordetails = ["Vendor  1", "vendor2", "vendor3", "vendor4", "vendor5"]


						let comboBox = new sap.m.ComboBox();

						for (let i = 0; i < vendordetails.length; i++) {
							comboBox.addItem(new sap.ui.core.Item({
								text: vendordetails[i]
							}))
						}
						var oDialog = new sap.m.Dialog({
							title: "Add Vendor",
							type: sap.m.DialogType.Message,
							content: [
								new sap.m.Label({ text: `Vendor Name: ⠀`, design: "Bold" }),
								comboBox
							],
							beginButton: new sap.m.Button({

								text: "OK",
								press: async function (oEvent) {
									debugger
									let vendor_name = oEvent.getSource().getParent().getContent()[1].getValue();

									let oTable = oHbox.getParent().getItems()[0].getItems()[0];
									let oTableVbox = oHbox.getParent().getItems()[0].getItems()[1];
									let list_inp_field = [];
									let input_field;



									for (let i = 0; i < oTable.getItems().length + oTableVbox.getItems().length + 15; i++) {
										input_field = new sap.m.TextArea({
											height: "42px",
											wrapping: 'None'
											// rows:1
										});
										input_field.addStyleClass("inpFieldClass ResetClass")
										list_inp_field.push(input_field)
									}

									let inp_vbox = new sap.m.VBox({
										items: list_inp_field
									});
									inp_vbox.addStyleClass("ResetClass inpVboxClass")

									let vendor = new sap.m.VBox({
										items: [
											new sap.m.HBox({
												items: [
													// new sap.m.Label({ text: vendor_name, design: "Bold" }),
													new sap.m.CheckBox({
														text: vendor_name
													})
												]
											}),
											inp_vbox
										]
									});


									vendor.addStyleClass("vendorClass");



									oHbox.addItem(vendor);
									oDialog.close();
								}
							}),
							endButton: new sap.m.Button({
								text: "Close",
								press: async function (oEvent) {
									oDialog.close()
								}
							})
						})

						oDialog.open()
					}
				}))

				header_anchor.addAction(new sap.m.Button({
					text: "Delete",
					press: function (oEvent) {
						debugger
						for (let i = 0; i < oHbox.getItems().length; i++) {
							var checkbox = oHbox.getItems()[i].getItems()[0].getItems()[0].getSelected();
							if (checkbox) {
								oHbox.removeItem(oHbox.getItems()[i])
								// .setVisible(false);
							}

						}
					}
				}))

				debugger

				// let footer = this.base.getView().getContent()[0];

				// footer.setShowFooter(true);



				// header
			},
			routing: {
				onAfterBinding: async function (oBindingContext) {
					debugger
					let objectPage = this.base.getView().getContent()[0];
					// objectPage.getSections()[0].getSubSections()[0].setShowTitle(false);
					// let subsection = objectPage.getSections()[0].getSubSections()[0];
					// subsection.addStyleClass("sectionClass");
					// subsection.setShowTitle(false);
					var spathid = oBindingContext.sPath;
					var idRegex = /\(([^)]+)\)/;
					var match = spathid.match(idRegex);

					if (match && match.length > 1) {
						var id = match[1];
					}
					if (id == "cf659f8c-3fbb-4c94-89be-1ec9d5244b72") {
						var vendorNames = ["Infinity Auto", "Balaji Parts"]
						
					var tableData = [
						{
							"mgsp_part_no": "EGRValve",
							"existing_mgsp_po_price": 1500,
							"target_price": 1200
						},
						{
							"mgsp_part_no": "DrainPlug",
							"existing_mgsp_po_price": 2000,
							"target_price": 1800
						},
						{
							"mgsp_part_no": "Sensor",
							"existing_mgsp_po_price": 3000,
							"target_price": 2800
						},
						{
							"mgsp_part_no": "HeatShield",
							"existing_mgsp_po_price": 2500,
							"target_price": 2000
						},
						{
							"mgsp_part_no": "Flywheel",
							"existing_mgsp_po_price": 1800,
							"target_price": 1500
						}
					]
					}
					else if(id == "70ac0c95-4022-4da3-b6e6-4aea987d03f7")
					{
						var vendorNames = ["Kirloskar", "New India Parts"]
				  var tableData = [
						{
							"mgsp_part_no": "RearWheel",
							"existing_mgsp_po_price": 1500,
							"target_price": 1200
						},
						{
							"mgsp_part_no": "Crankshaft",
							"existing_mgsp_po_price": 2000,
							"target_price": 1800
						},
						{
							"mgsp_part_no": "Transmission",
							"existing_mgsp_po_price": 3000,
							"target_price": 2800
						},
						{
							"mgsp_part_no": "Pilot",
							"existing_mgsp_po_price": 2500,
							"target_price": 2000
						}
					]
					}




					var oMainHbox = objectPage.getSections()[0].getSubSections()[0].mAggregations._grid.mAggregations.content[0].mAggregations.content;

					let oTable = oMainHbox.getItems()[0].getItems()[0];
					oTable.destroyItems();

					for (let i = 0; i < tableData.length; i++) {

						oTable.addItem(new sap.m.ColumnListItem(`row${i}`))
						let row = oTable.getItems()[i];

						let mgsp_part_no = new sap.m.Text({
							text: tableData[i].mgsp_part_no
						})
						row.addCell(mgsp_part_no);

						let existing_mgsp_po_price = new sap.m.Input({
							// value: tableData[i].existing_mgsp_po_price
						})
						row.addCell(existing_mgsp_po_price);

						let target_price = new sap.m.Input({
							// value: tableData[i].target_price
						})
						row.addCell(target_price);

					}
					debugger
					// let vendorNames = ["vendor1", "vendor2", "vendor3", "vendor4", "vendor5"]; // Add as many vendor names as needed
					let oHbox = sap.ui.getCore().byId("vobscreen2::VOB_Screen2ObjectPage--fe::CustomSubSection::Vandorboard--mainHBox").getItems()[1];
					oHbox.destroyItems();
					for (let j = 0; j < vendorNames.length; j++) {
						let vendor_name = vendorNames[j];
						
						let oTableVbox = oHbox.getParent().getItems()[0].getItems()[1];
						let list_inp_field = [];
						let input_field;
						for (let i = 0; i < oTable.getItems().length + oTableVbox.getItems().length + 15; i++) {
							input_field = new sap.m.TextArea({
								height: "42px",
								wrapping: 'None'
								// rows:1
							});
							input_field.addStyleClass("inpFieldClass ResetClass")
							if (vendorNames[j] == "vendor1" || vendorNames[j] == "vendor5") {
								debugger
								input_field.addStyleClass("inputcss")
								// vendor.addStyleClass("custColo1");
							}
							list_inp_field.push(input_field)

						}

						let inp_vbox = new sap.m.VBox({
							items: list_inp_field
						});

						inp_vbox.addStyleClass("ResetClass inpVboxClass")
						let vendor = new sap.m.VBox({
							items: [
								new sap.m.HBox({
									items: [
										// new sap.m.Label({ text: vendor_name, design: "Bold" }),
										new sap.m.CheckBox({
											text: vendor_name
										})
									]
								}),
								inp_vbox
							]
						});
						vendor.mAggregations.items[0].mAggregations.items[0].addStyleClass("vendorlabel");
						debugger
						if (vendorNames[j] == "vendor1" || vendorNames[j] == "vendor5") {
							// inp_vbox.addStyleClass("inputcss")
							vendor.addStyleClass("custColo1");
						}
						// vendor.addStyleClass("custColor");
						oHbox.addItem(vendor);
						// vendor.addStyleClass("")

					}

				}
			}

		}
	});
});
