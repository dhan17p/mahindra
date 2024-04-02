sap.ui.define(
	[
		"sap/ui/core/mvc/Controller"
	],
	function (Controller) {
		"use strict";
		var parentTable;
		var orgmodel
		var key_id
		return Controller.extend("finalwizard.controller.ObjectPage", {

			onInit: function () {
				debugger
				var currentUrl = window.location.href;

				// Extract the id from the URL
				var idRegex = /id=([a-f\d-]+)/;
				var match = idRegex.exec(currentUrl);
				var extractedId = match ? match[1] : null;
				// this._handleNavigationToStep(1);
				var wizstep = this.byId("partrequest");
				wizstep.destroyContent();
				var compCont = new sap.ui.core.ComponentContainer({
					propagateModel: true,
					height: "500px"
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

			screen2activate: function () {
				debugger
				// this._handleNavigationToStep(1);
				var wizstep = this.byId("supplierdetails");
				wizstep.destroyContent();
				var compCont = new sap.ui.core.ComponentContainer({
					propagateModel: true,
					height: "500px"
				})
				wizstep.addContent(compCont);
				var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
					usage: "screen2", async: true, manifest: true
				});
				ocustomerDetailContainer.then(
					function (ocustomerDetail) {
						debugger
						ocustomerDetail.getRouter().navTo("VOB_Screen2ObjectPage", {
							key: `id=0715d66c-3408-449d-a7dd-f1722136e1a8,IsActiveEntity=true`
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
					height: "500px"
				})
				wizstep.addContent(compCont);
				var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
					usage: "screen3", async: true, manifest: true
				});
				ocustomerDetailContainer.then(
					function (ocustomerDetail) {
						debugger
						ocustomerDetail.getRouter().navTo("VOB_Screen3ObjectPage", {
							key: `id=0715d66c-3408-449d-a7dd-f1722136e1a8,IsActiveEntity=true`
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
					height: "500px"
				})
				wizstep.addContent(compCont);
				var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
					usage: "screen4", async: true, manifest: true
				});
				ocustomerDetailContainer.then(
					function (ocustomerDetail) {
						debugger
						ocustomerDetail.getRouter().navTo("VOB_Screen4ObjectPage", {
							key: `id=0715d66c-3408-449d-a7dd-f1722136e1a8,IsActiveEntity=true`
						})
						compCont.setComponent(ocustomerDetail);
						// this._customerDetailContainer = ocustomerDetail;
					}.bind(this)
				);
			},
			screen5activate: function () {
				debugger
				// this._handleNavigationToStep(1);
				var wizstep = this.byId("vobapproval2");
				wizstep.destroyContent();
				var compCont = new sap.ui.core.ComponentContainer({
					propagateModel: true,
					height: "500px"
				})
				wizstep.addContent(compCont);
				var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
					usage: "screen5", async: true, manifest: true
				});
				ocustomerDetailContainer.then(
					function (ocustomerDetail) {
						debugger
						ocustomerDetail.getRouter().navTo("VOB_Screen4bObjectPage", {
							key: `id=0715d66c-3408-449d-a7dd-f1722136e1a8,IsActiveEntity=true`
						})
						compCont.setComponent(ocustomerDetail);
						// this._customerDetailContainer = ocustomerDetail;
					}.bind(this)
				);
			}

		});
	}
);
