sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'vobscreen2',
            componentId: 'VOB_Screen2ObjectPage',
            contextPath: '/VOB_Screen2'
        },
        CustomPageDefinitions
    );
});