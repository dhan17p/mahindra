sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'vobscreen4',
            componentId: 'VOB_Screen4List',
            contextPath: '/VOB_Screen4'
        },
        CustomPageDefinitions
    );
});