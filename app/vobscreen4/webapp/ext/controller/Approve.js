sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        ApproveMethod: async function (oEvent, oBindingContext) {
            debugger
            var spathid = oEvent.sPath;
            var idRegex = /id=([a-fA-F0-9-]+)/;
            var match = spathid.match(idRegex);

            if (match && match.length > 1) {
                var id = match[1];
            }
            if (id == "cf659f8c-3fbb-4c94-89be-1ec9d5244b72") {

                MessageToast.show("New Parts Sourcing for Engine Approved");
            }


            else if (id == "70ac0c95-4022-4da3-b6e6-4aea987d03f7") {
                MessageToast.show("New Parts Sourcing for Bearings Approved");

            }

            var comments = sap.ui.getCore().byId("vobscreen4::VOB_Screen4ObjectPage--fe::CustomSubSection::Comments").mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations;

            // Iterate over comments
            for (var i = 1; i <= 5; i++) {
                var comment = comments.items[i].mAggregations.items[1].mProperties.value;
                let oFunction = this.getModel().bindContext("/commentfun(...)");
                var statusval = JSON.stringify({ id: id, status: "screen1comment", comment: comment });
                oFunction.setParameter("status", statusval);
                await oFunction.execute();
            }

            var table = sap.ui.getCore().byId("vobscreen4::VOB_Screen4ObjectPage--fe::CustomSubSection::Vobobject--parentTable");
            var items = table.mAggregations.items;
            var statesWithIdsArray = [];
            // Iterate over each item in the table
            for (var i = 0; i < items.length; i++) {
                var cells = items[i].mAggregations.cells;

                // Assuming the structure is consistent and state property is at a specific index
                var state = cells[3].mAggregations.items[1].mProperties.state;
                // Assuming id property is at a specific index
                var id = items[i].oModels.rowid.oData.rowid;
                // Push state and id into the array as an object
                statesWithIdsArray.push({ id: id, state: state });
            }
            let oFunction1 = this.getModel().bindContext("/vanddetails(...)");
            var statusval1 = JSON.stringify({ id: id, status: "submitfourthscreen", tableData1: statesWithIdsArray})
            oFunction1.setParameter("status", statusval1)
            await oFunction1.execute()





        }




    };
});
