sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'vobscreen4bb',
            componentId: 'VOB_Screen4bObjectPage',
            contextPath: '/VOB_Screen4b'
        },
        CustomPageDefinitions
    );
});