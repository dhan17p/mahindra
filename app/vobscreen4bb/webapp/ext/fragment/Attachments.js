sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Item",
	"sap/m/MessageToast"
], function (MessageToast) {
	'use strict';
	var that = this;
	var extractedNumber;
	var dialogOpen;
	var type;
	var foldername;

	return {
		onPress: function (oEvent) {
			debugger
			MessageToast.show("Custom handler invoked.");
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

	};
});
