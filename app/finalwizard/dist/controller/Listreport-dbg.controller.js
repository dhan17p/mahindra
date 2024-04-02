sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("finalwizard.controller.Listreport", {
            onInit: function () {
            },
            onCreatePressed: async function (oEvent) {
                debugger
                let oFunction = this.getView().getModel().bindContext("/createEntry(...)");
                oFunction.setParameter("status","vobpost")
                await oFunction.execute()
                var result = oFunction.getBoundContext().getValue();
                debugger
                var router = sap.ui.core.UIComponent;
                router.getRouterFor(this).navTo("RouteObjectPage", {
                    id: result.value
                    // isAct: true
                })

            },
            onDeletePressed: async function (oEvent) {
                debugger
                let oTable = this.byId("vobTable");
                let data = [];
                for (let i = 0; i < oTable.getItems().length; i++) {
                    if (oTable.getItems()[i].getSelected() == true) {
                        data.push(oTable.getItems()[i].getCells()[0].getText());
                    }
                }
                data = JSON.stringify(data);

                let oFunction = this.getView().getModel().bindContext("/deleteEntry(...)");
                oFunction.setParameter("keyid", data);
                await oFunction.execute()
                new sap.m.MessageToast.show("Deleted!!");
                oTable.getBinding("items").refresh();
            },
            onListItemPressed: function (oEvent) {
                debugger
                var oContext = oEvent.getSource().getBindingContext();
                var router = sap.ui.core.UIComponent;
                router.getRouterFor(this).navTo("RouteObjectPage", {
                    id: `id=${oContext.getProperty("id")},IsActiveEntity=true`
                    // isAct: true
                })
            }
        });
    });
