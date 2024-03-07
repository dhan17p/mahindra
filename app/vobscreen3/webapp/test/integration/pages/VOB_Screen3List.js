sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'vobscreen3',
            componentId: 'VOB_Screen3List',
            contextPath: '/VOB_Screen3'
        },
        CustomPageDefinitions
    );
});