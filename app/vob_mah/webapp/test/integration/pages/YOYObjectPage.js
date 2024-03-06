sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'vobmah',
            componentId: 'YOYObjectPage',
            contextPath: '/VOB/vob_yoy'
        },
        CustomPageDefinitions
    );
});