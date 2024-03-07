sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'vobscreen3',
            componentId: 'YOY_Screen3ObjectPage',
            contextPath: '/VOB_Screen3/vob_yoy_scr3'
        },
        CustomPageDefinitions
    );
});