
sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';
	var id;


	return ControllerExtension.extend('vobscreen2.ext.controller.ObjectPageController', {
		
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
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
									var modelvendor = new sap.ui.model.json.JSONModel({
										venodname: vendor_name
									});
									vendor.setModel(modelvendor,'venorname')


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
			},
		
			routing: {
				onAfterBinding: async function (oBindingContext) {
					debugger
					let objectPage = this.base.getView().getContent()[0];
					// var spathid = oBindingContext.sPath;
					// var idRegex = /\(([^)]+)\)/;
					// var match = spathid.match(idRegex);
					// if (match && match.length > 1) {
	                // 	id = match[1];
					// }
					debugger
					var odataCol = new sap.m.ColumnListItem({
						cells:[
							new sap.m.Text({text:"{MGSP_Part_Nos}"}),
							new sap.m.Input(),
							new sap.m.Input(),
						]
					})
					sap.ui.getCore().byId("vobscreen2::VOB_Screen2ObjectPage--fe::CustomSubSection::Vandorboard--parentTable").bindAggregation("items",{
						path:"/YOY_Screen2",
						template:odataCol,
						templateShareable:false
					})
					var currentUrl = window.location.href;
					// Extract the id from the URL
					// Regular expression to match the UUID pattern
					var uuidRegex = /id=([0-9a-fA-F-]+),/;

					// Extracting the UUID from the URL using match function and regex
					var id = currentUrl.match(uuidRegex)[1];
					var vendorNames;
					debugger
					let oFunction1 = this.getView().getModel().bindContext("/vanddetails(...)");
					var statusval1 = JSON.stringify({ id: id, status: "screen2get1" })
					oFunction1.setParameter("status", statusval1)
					await oFunction1.execute()
					debugger
					var result1 = oFunction1.getBoundContext().getValue().value;
					var finalsupp = JSON.parse(result1);
					 vendorNames = finalsupp.supplier
					let oHbox = sap.ui.getCore().byId("vobscreen2::VOB_Screen2ObjectPage--fe::CustomSubSection::Vandorboard--mainHBox").getItems()[1];
					oHbox.destroyItems();
					for (let j = 0; j < vendorNames.length; j++) {
						let vendor_name = vendorNames[j].suplier;
						let oTableVbox = oHbox.getParent().getItems()[0].getItems()[1];
						let list_inp_field = [];
						let input_field;
						for (let i = 0; i < finalsupp.venordss.length + 18; i++) {
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
							list_inp_field.push(input_field);
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
						var modelvendor = new sap.ui.model.json.JSONModel({
							vendorid:  vendorNames[j].id_main
						});
						vendor.setModel(modelvendor,'venorid')
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
