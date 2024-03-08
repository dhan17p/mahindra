sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('vobscreen4bb.ext.controller.ObjectPageController', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf vobscreen4bb.ext.controller.ObjectPageController
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
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
						var vendorNames = ["Infinity Auto", "Balaji Parts","vendor3","vendor4","vendor5"]
						
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
						var vendorNames = ["Kirloskar", "New India Parts","vendor3","vendor4","vendor5"]
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
					oTable.destroyItems();
					debugger

					for (let i = 0; i < tableData.length; i++) {

						oTable.addItem(new sap.m.ColumnListItem(`row${i}`))
						let row = oTable.getItems()[i];

						let mgsp_part_no = new sap.m.Text({
							text: tableData[i].mgsp_part_no
						})
						row.addCell(mgsp_part_no);

						let existing_mgsp_po_price = new sap.m.Text({
							text: tableData[i].existing_mgsp_po_price
						})
						row.addCell(existing_mgsp_po_price);

						let target_price = new sap.m.Text({
							text: tableData[i].target_price
						})
						row.addCell(target_price);
						let hboxswitch = new sap.m.HBox({

						});
						let text1 = new sap.m.Text({
							text:"Approved:"
						})
						text1.addStyleClass("texttoggle")
						let switchtoglle = new sap.m.Switch({
							state: true,
							blocked:true,
							customTextOff: "No",
							customTextOn: "Yes"
							// text: tableData[i].target_price
						})
						hboxswitch.addItem(text1);
						hboxswitch.addItem(switchtoglle);

						
						row.addCell(hboxswitch);

					}


					// let vendorNames = ["vendor1", "vendor2", "vendor3", "vendor4", "vendor5"]; // Add as many vendor names as needed
					let oHbox = sap.ui.getCore().byId("vobscreen4bb::VOB_Screen4bObjectPage--fe::CustomSubSection::Vobobject--mainHBox").getItems()[1];
					oHbox.destroyItems();
					for (let j = 0; j < vendorNames.length; j++) {
						debugger
						let vendor_name = vendorNames[j];

	
						let oTableVbox = oHbox.getParent().getItems()[0].getItems()[1];
						let list_inp_field = [];
						let input_field;
						for (let i = 0; i < oTable.getItems().length + oTableVbox.getItems().length + 4; i++) {
							input_field = new sap.m.TextArea({
								height: "41px",
								wrapping: 'None'
								// rows:1
							});
							input_field.addStyleClass("inpFieldClass ResetClass")
							if (vendorNames[j] == "Balaji Parts"  || vendorNames[j] == "Infinity Auto" ||  vendorNames[j] == "Kirloskar" ||  vendorNames[j] == "New India Parts") {
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
						if (vendorNames[j] == "Balaji Parts"  || vendorNames[j] == "Infinity Auto" ||  vendorNames[j] == "Kirloskar" ||  vendorNames[j] == "New India Parts") {
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
