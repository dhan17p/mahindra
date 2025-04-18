sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('vobscreen3.ext.controller.ObjectPageController', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf vobscreen3.ext.controller.ObjectPageController
			 */
			onInit: function () {
				debugger
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


				let oHbox = sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSubSection::Vobforthirdobj--mainHBox").getItems()[1];


				// 				header_anchor.addAction(new sap.m.Button({
				// 					text: "Add Vendor",
				// 					type: "Accept",
				// 					press: function async(oEvent) {
				// 						debugger

				// 						let vendordetails = ["Vendor  1", "vendor2", "vendor3", "vendor4", "vendor5"]


				// 						let comboBox = new sap.m.ComboBox();

				// 						for (let i = 0; i < vendordetails.length; i++) {
				// 							comboBox.addItem(new sap.ui.core.Item({
				// 								text: vendordetails[i]
				// 							}))

				// 						}
				// 						var oDialog = new sap.m.Dialog({
				// 							title: "Add Vendor",
				// 							type: sap.m.DialogType.Message,
				// 							content: [
				// 								new sap.m.Label({ text: `Vendor Name: ⠀`, design: "Bold" }),
				// 								comboBox
				// 							],
				// 							beginButton: new sap.m.Button({

				// 								text: "OK",
				// 								press: async function (oEvent) {
				// 									debugger
				// 									let vendor_name = oEvent.getSource().getParent().getContent()[1].getValue();

				// 									let oTable = oHbox.getParent().getItems()[0].getItems()[0];
				// 									let oTableVbox = oHbox.getParent().getItems()[0].getItems()[1];
				// 									let list_inp_field = [];
				// 									let input_field;



				// 									for (let i = 0; i < oTable.getItems().length + oTableVbox.getItems().length; i++) {
				// 										input_field = new sap.m.TextArea({
				// 											height: "32px",
				// 											wrapping: 'None'
				// 											// rows:1
				// 										});
				// 										input_field.addStyleClass("inpFieldClass ResetClass")
				// 										list_inp_field.push(input_field)
				// 									}

				// 									let inp_vbox = new sap.m.VBox({
				// 										items: list_inp_field
				// 									});
				// 									inp_vbox.addStyleClass("ResetClass inpVboxClass")

				// 									let vendor = new sap.m.VBox({
				// 										items: [
				// 											new sap.m.HBox({
				// 												items: [
				// 													// new sap.m.Label({ text: vendor_name, design: "Bold" }),
				// 													new sap.m.CheckBox({
				// 														text: vendor_name
				// 													})
				// 												]
				// 											}),
				// 											inp_vbox
				// 										]
				// 									});


				// 									vendor.addStyleClass("vendorClass");



				// 									oHbox.addItem(vendor);
				// 									oDialog.close();
				// 								}
				// 							}),
				// 							endButton: new sap.m.Button({
				// 								text: "Close",
				// 								press: async function (oEvent) {
				// 									oDialog.close()
				// 								}
				// 							})
				// 						})

				// 						oDialog.open()
				// 					}
				// 				}))

				// 				header_anchor.addAction(new sap.m.Button({
				// 					text: "Delete",
				// 					press: function (oEvent) {
				// 						debugger
				// 						for (let i = 0; i < oHbox.getItems().length; i++) {
				// 							var checkbox = oHbox.getItems()[i].getItems()[0].getItems()[0].getSelected();
				// 							if (checkbox)
				//  {
				// 								oHbox.removeItem(oHbox.getItems()[i])
				// 								// .setVisible(false);
				// 							}

				// 						}
				// 					}
				// 				}))

				//  debugger
				// let vendor_name = "vendor1";
				// let oTable = oHbox.getParent().getItems()[0].getItems()[0];
				// let oTableVbox = oHbox.getParent().getItems()[0].getItems()[1];
				// let list_inp_field = [];
				// let input_field;
				// for (let i = 0; i < oTable.getItems().length + oTableVbox.getItems().length; i++) {
				// 	input_field = new sap.m.TextArea({
				// 		height: "32px",
				// 		wrapping: 'None'
				// 		// rows:1
				// 	});
				// 	input_field.addStyleClass("inpFieldClass ResetClass")
				// 	list_inp_field.push(input_field)
				// }
				// let inp_vbox = new sap.m.VBox({
				// 	items: list_inp_field
				// });
				// inp_vbox.addStyleClass("ResetClass inpVboxClass")
				// let vendor = new sap.m.VBox({
				// 	items: [
				// 		new sap.m.HBox({
				// 			items: [
				// 				// new sap.m.Label({ text: vendor_name, design: "Bold" }),
				// 				new sap.m.CheckBox({
				// 					text: vendor_name
				// 				})
				// 			]
				// 		}),
				// 		inp_vbox
				// 	]
				// });
				// vendor.addStyleClass("vendorClass");
				// oHbox.addItem(vendor);

				// let footer = this.base.getView().getContent()[0];

				// footer.setShowFooter(true);



				// header
			},
			routing: {
				onAfterBinding: async function (oBindingContext) {
					debugger
					var spathid = oBindingContext.sPath;
					var idRegex = /\(([^)]+)\)/;
					var match = spathid.match(idRegex);

					if (match && match.length > 1) {
						var id = match[1];
					}

					let oFunction2 = this.getView().getModel().bindContext("/vanddetails(...)");
					var statusval2 = JSON.stringify({ id: id, status: "workflowhistoryget" })
					oFunction2.setParameter("status", statusval2)
					await oFunction2.execute()
					var result = oFunction2.getBoundContext().getValue().value;
					var result1 = JSON.parse(result);

					var workflowhistoryarray = result1.workflowhistory;
					var vBox = sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSubSection::Worflow_History").mAggregations._grid.mAggregations.content[0].mAggregations.content
					vBox.destroyItems();
					vBox.addStyleClass("scrollvbox")
					var groupedData = {};
					// workflowhistoryarray.sort(function(a, b) {
					// 	var levelA = parseFloat(a.level);
					// 	var levelB = parseFloat(b.level);
						
					// 	if (levelA < levelB) {
					// 	  return -1;
					// 	} else if (levelA > levelB) {
					// 	  return 1;
					// 	} else {
					// 	  return 0;
					// 	}
					//   });
					workflowhistoryarray.forEach(function (item) {
						if (!groupedData[item.level]) {
							groupedData[item.level] = [];
						}
						groupedData[item.level].push(item);
					});

					// Iterate over the grouped data and create a fragment for each level
					Object.keys(groupedData).forEach(function (level) {
						var levelData = groupedData[level];

						// Create a VBox for each level
						var oVBox = new sap.m.VBox();
						

						// Set the title dynamically
						var oTitle = new sap.m.Title({ text: "Level " + level });
						oVBox.addItem(oTitle);

						// Create a ScrollContainer
						// var oScrollContainer = new sap.m.ScrollContainer({
						// 	height: "100%",
						// 	width: "100%"
						// });

						// Create a Table
						var oTable = new sap.m.Table({
							fixedLayout: false,
							width: "110vw"
						});
						oTable.addStyleClass("tableWithBorder");


						// Define Table columns dynamically based on the first data item
						var firstItem = levelData[0];
						// Object.keys(firstItem).forEach(function(key) {
						//   var oColumn = new sap.m.Column({ header: new sap.m.Text({ text: key }) });
						// //   oColumn.addStyleClass("colClass")
						//   oTable.addColumn(oColumn);
						// });
						var oColumn1 = new sap.m.Column({ header: new sap.m.Text({ text: "Level" }),styleClass:"colClass" })
						var oColumn2 = new sap.m.Column({ header: new sap.m.Text({ text: "Title" }),styleClass:"colClass" });
						var oColumn3 = new sap.m.Column({ header: new sap.m.Text({ text: "Employee ID" }),styleClass:"colClass" });
						var oColumn4 = new sap.m.Column({ header: new sap.m.Text({ text: "Status" }),styleClass:"colClass" });
						var oColumn5 = new sap.m.Column({ header: new sap.m.Text({ text: "Begin Date" }) ,styleClass:"colClass"});
						var oColumn6 = new sap.m.Column({ header: new sap.m.Text({ text: "End Date" }) ,styleClass:"colClass"});
						var oColumn7 = new sap.m.Column({ header: new sap.m.Text({ text: "Days Taken" }),styleClass:"colClass" });
						var oColumn8 = new sap.m.Column({ header: new sap.m.Text({ text: "Approved By" }) ,styleClass:"colClass"});
						oTable.addColumn(oColumn1);
						oTable.addColumn(oColumn2);
						oTable.addColumn(oColumn3);
						oTable.addColumn(oColumn4);
						oTable.addColumn(oColumn5);
						oTable.addColumn(oColumn6);
						oTable.addColumn(oColumn7);
						oTable.addColumn(oColumn8);

						// Iterate over the data for this level and add table rows
						levelData.forEach(function (item) {
							var oRow = new sap.m.ColumnListItem();
							oRow.addCell(new sap.m.Text({ text: item.level }));
							oRow.addCell(new sap.m.Text({ text: item.title }));
							oRow.addCell(new sap.m.Text({ text: item.employee_id }));
							oRow.addCell(new sap.m.Text({ text: item.status }));
							oRow.addCell(new sap.m.Text({ text: item.begin_Date_Time }));
							oRow.addCell(new sap.m.Text({ text: item.end_Date_Time }));
							oRow.addCell(new sap.m.Text({ text: item.days_Taken }));
							oRow.addCell(new sap.m.Text({ text: item.approved_By }));

							// Object.keys(item).forEach(function (key) {
							// 	oRow.addCell(new sap.m.Text({ text: item[key] }));
							// });
							oTable.addItem(oRow);
						});

						// Add the Table to the ScrollContainer
						// oScrollContainer.addContent(oTable);

						// Add the ScrollContainer to the VBox
						oVBox.addItem(oTable);

						// Add the VBox to the main VBox container
						vBox.addItem(oVBox);
					});








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
					else if (id == "70ac0c95-4022-4da3-b6e6-4aea987d03f7") {
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


					var oMainHbox = objectPage.mAggregations.sections[1].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content;

					let oTable = oMainHbox.getItems()[0].getItems()[0];
					debugger
					// oTable.destroyItems();

					// for (let i = 0; i < tableData.length; i++) {

					// 	oTable.addItem(new sap.m.ColumnListItem(`row${i}`))
					// 	let row = oTable.getItems()[i];

					// 	let mgsp_part_no = new sap.m.Text({
					// 		text: tableData[i].mgsp_part_no
					// 	})
					// 	row.addCell(mgsp_part_no);

					// 	let existing_mgsp_po_price = new sap.m.Text({
					// 		text: tableData[i].existing_mgsp_po_price
					// 	})
					// 	row.addCell(existing_mgsp_po_price);

					// 	let target_price = new sap.m.Text({
					// 		text: tableData[i].target_price
					// 	})
					// 	row.addCell(target_price);
					// }
					debugger
					let oFunction1 = this.getView().getModel().bindContext("/vanddetails(...)");
					var statusval1 = JSON.stringify({ id: id, status: "screen3get1" })
					oFunction1.setParameter("status", statusval1)
					await oFunction1.execute()
					debugger
					var result1 = oFunction1.getBoundContext().getValue().value;
					var finalsupp = JSON.parse(result1);
					vendorNames = finalsupp.supllier_detail_together
					// let vendorNames = ["vendor1", "vendor2", "vendor3", "vendor4", "vendor5"]; // Add as many vendor names as needed
					let oHbox = sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSubSection::Vobforthirdobj--mainHBox").getItems()[1];
					oHbox.destroyItems();
					for (let j = 0; j < vendorNames.length; j++) {
						debugger
						let vendor_name = vendorNames[j].supplier;
						let oTableVbox = oHbox.getParent().getItems()[0].getItems()[1];
						let list_inp_field = [];
						let input_field;
						for (let i = 0; i < finalsupp.venordss.length + 18; i++) {
							input_field = new sap.m.TextArea({
								height: "32px",
								wrapping: 'None',
								value: vendorNames[j].rel[i].value,
								textAlign: "Center"
								// rows:1
							});

							input_field.addStyleClass("inpFieldClass ResetClass")
							if (vendorNames[j] == "Balaji Parts" || vendorNames[j] == "Infinity Auto" || vendorNames[j] == "Kirloskar" || vendorNames[j] == "New India Parts") {
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
										new sap.m.Label({
											text: vendor_name
										})
									]
								}),
								inp_vbox
							]
						});
						inp_vbox.addStyleClass("inputcss");
						vendor.addStyleClass("custColo1");
						vendor.mAggregations.items[0].mAggregations.items[0].addStyleClass("vendorlabel");
						debugger
						if (vendorNames[j] == "Balaji Parts" || vendorNames[j] == "Infinity Auto" || vendorNames[j] == "Kirloskar" || vendorNames[j] == "New India Parts") {
							inp_vbox.addStyleClass("inputcss");
							vendor.addStyleClass("custColo1");
						}
						// vendor.addStyleClass("custColor");
						oHbox.addItem(vendor);
						// vendor.addStyleClass("")

					}
					debugger
					var pathfortablefilter = this.base.getView().mAggregations.content[0].mAggregations.sections[0].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[0].mBindingInfos.items.binding
					pathfortablefilter.filter(
						new sap.ui.model.Filter({
							path: "vob_id",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: id
						})
					)


				}
			}
		}
	});
});
