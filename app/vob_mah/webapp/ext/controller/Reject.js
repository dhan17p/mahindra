sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        rejectmethod: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
