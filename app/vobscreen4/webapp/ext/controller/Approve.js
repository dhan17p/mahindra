sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        ApproveMethod: function(oEvent) {
            MessageToast.show("Sent For Second Approval");
        }
    };
});
