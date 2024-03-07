sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'vobscreen4',
            componentId: 'YOY_Screen4ObjectPage',
            contextPath: '/VOB_Screen4/vob_yoy_scr4'
        },
        CustomPageDefinitions
    );
});