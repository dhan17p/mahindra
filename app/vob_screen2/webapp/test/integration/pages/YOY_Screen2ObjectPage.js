sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'vobscreen2',
            componentId: 'YOY_Screen2ObjectPage',
            contextPath: '/VOB_Screen2/vob_yoy_scr2'
        },
        CustomPageDefinitions
    );
});