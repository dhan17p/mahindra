sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'vobscreen4bb',
            componentId: 'VOB_Screen4bList',
            contextPath: '/VOB_Screen4b'
        },
        CustomPageDefinitions
    );
});