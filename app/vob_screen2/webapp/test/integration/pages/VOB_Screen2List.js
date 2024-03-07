sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'vobscreen2',
            componentId: 'VOB_Screen2List',
            contextPath: '/VOB_Screen2'
        },
        CustomPageDefinitions
    );
});