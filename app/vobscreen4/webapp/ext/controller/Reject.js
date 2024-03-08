sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        RejectMethod: function(oEvent) {
            MessageToast.show("Not Sent For second Approval");
        }
    };
});
