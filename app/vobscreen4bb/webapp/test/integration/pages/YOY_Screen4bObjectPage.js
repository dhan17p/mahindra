sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'vobscreen4bb',
            componentId: 'YOY_Screen4bObjectPage',
            contextPath: '/VOB_Screen4b/vob_yoy_scr4b'
        },
        CustomPageDefinitions
    );
});