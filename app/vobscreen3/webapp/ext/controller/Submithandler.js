sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        submitmethod: async function(oEvent) {
            var spathid = oEvent.sPath;
            var idRegex = /id=([a-fA-F0-9-]+)/;
            var match = spathid.match(idRegex);

            if (match && match.length > 1) {
                var id = match[1];
            }
            MessageToast.show("Custom handler invoked.");
            var comment_value = sap.ui.getCore().byId("vobscreen3::VOB_Screen3ObjectPage--fe::CustomSection::Comment").mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[0].mProperties.value
            let oFunction2 =  this.getModel().bindContext("/commentfun(...)");
            var statusval2 = JSON.stringify({ id: id, status: "screen1comment", comment: comment_value,worlflowtriger:"triggered" })
            oFunction2.setParameter("status", statusval2)
            await oFunction2.execute()
        }
    };
});
