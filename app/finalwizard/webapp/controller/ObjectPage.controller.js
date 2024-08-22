sap.ui.define(
	[
		"sap/ui/core/mvc/Controller"
	],
	function (Controller) {
		"use strict";
		var parentTable;
		var orgmodel
		var key_id
		var extractedId;
		var flag = true;
		var isActiveEntity
		return Controller.extend("finalwizard.controller.ObjectPage", {
			onInit: function () {
				debugger
				function getIsActiveEntityValue() {
					// Get the current URL
					var url = window.location.href;

					// Use regex to find the IsActiveEntity value in the URL
					var regex = /IsActiveEntity=(true|false)/;
					var match = url.match(regex);

					// If a match is found, return the value
					if (match) {
						return match[1]; // "true" or "false"
					}

					// Return null if the parameter is not found
					return null;
				}

				// Usage example
				isActiveEntity = getIsActiveEntityValue();
				console.log(isActiveEntity); // Output: true or false

				var currentUrl = window.location.href;
				// Extract the id from the URL
				// var idRegex = /id=([a-f\d-]+)/;
				// var match = idRegex.exec(currentUrl);
				//  extractedId = match ? match[1] : null;
				var id = currentUrl.match(/\/VOB\(id=([a-f\d-]+),IsActiveEntity=true\)/);
				if (id) {
					console.log(id[1]);
					if (extractedId == id[1]) {
						flag = true;
					}
					extractedId = id[1];// Output: a55567a3-a5a4-4b71-a9e1-858b73ae1cc2
				} else {
					console.log("ID not found");
				}
				// this._handleNavigationToStep(1);
				var wizstep = this.byId("partrequest");
				wizstep.destroyContent();
				var compCont = new sap.ui.core.ComponentContainer({
					propagateModel: true,
					height: "75%"
				})
				wizstep.addContent(compCont);
				var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
					usage: "screen1", async: true, manifest: true
				});
				ocustomerDetailContainer.then(
					function (ocustomerDetail) {
						debugger
						ocustomerDetail.getRouter().navTo("VOBObjectPage", {
							key: `id=${extractedId},IsActiveEntity=true`
						})
						compCont.setComponent(ocustomerDetail);
						// this._customerDetailContainer = ocustomerDetail;
					}.bind(this)
				);
			},
			onBeforeRendering: function (oEvent) {
				debugger
				// if(step != 1){
				// 	var wizard = this.byId("CreateProductWizard");
				// 	var one = wizard.getSteps()[0]
				// 	wizard.discardProgress(one, false)
				// 	flag = false;
				// }
				var currentUrl = window.location.href;
				var id = currentUrl.match(/\/VOB\(id=([a-f\d-]+),IsActiveEntity=true\)/);
				if (id) {
					console.log(id[1]);
					if (extractedId != id[1]) {
						flag = true;
					}
					extractedId = id[1];// Output: a55567a3-a5a4-4b71-a9e1-858b73ae1cc2
				} else {
					console.log("ID not found");
				}
				if (flag) {
					var wizard = this.byId("CreateProductWizard");
					var one = wizard.getSteps()[0]
					wizard.discardProgress(one, false)
					flag = false;
				}
			},
			screen2activate: function () {
				debugger
				// this._handleNavigationToStep(1);
				var wizstep = this.byId("supplierdetails");
				wizstep.destroyContent();
				var compCont = new sap.ui.core.ComponentContainer({
					propagateModel: true,
					height: "75%"
				})
				wizstep.addContent(compCont);
				var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
					usage: "screen2", async: true, manifest: true
				});
				ocustomerDetailContainer.then(
					function (ocustomerDetail) {
						debugger
						ocustomerDetail.getRouter().navTo("VOB_Screen2ObjectPage", {
							key: `id=${extractedId},IsActiveEntity=true`
						})
						compCont.setComponent(ocustomerDetail);
						// this._customerDetailContainer = ocustomerDetail;
					}.bind(this)
				);
			},
			screen3activate: function () {
				debugger
				// this._handleNavigationToStep(1);
				var wizstep = this.byId("OptionalInfoStep");
				wizstep.destroyContent();
				var compCont = new sap.ui.core.ComponentContainer({
					propagateModel: true,
					height: "75%"
				})
				wizstep.addContent(compCont);
				var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
					usage: "screen3", async: true, manifest: true
				});
				ocustomerDetailContainer.then(
					function (ocustomerDetail) {
						debugger
						ocustomerDetail.getRouter().navTo("VOB_Screen3ObjectPage", {
							key: `id=${extractedId},IsActiveEntity=true`
						})
						compCont.setComponent(ocustomerDetail);
						// this._customerDetailContainer = ocustomerDetail;
					}.bind(this)
				);
			},
			screen4activate: function () {
				debugger
				// this._handleNavigationToStep(1);
				var wizstep = this.byId("vobapproval1");
				wizstep.destroyContent();
				var compCont = new sap.ui.core.ComponentContainer({
					propagateModel: true,
					height: "75%"
				})
				wizstep.addContent(compCont);
				var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
					usage: "screen4", async: true, manifest: true
				});
				ocustomerDetailContainer.then(
					function (ocustomerDetail) {
						debugger
						ocustomerDetail.getRouter().navTo("VOB_Screen4ObjectPage", {
							key: `id=${extractedId},IsActiveEntity=true`
						})
						compCont.setComponent(ocustomerDetail);
						// this._customerDetailContainer = ocustomerDetail;
					}.bind(this)
				);
			}

		});
	}
);
