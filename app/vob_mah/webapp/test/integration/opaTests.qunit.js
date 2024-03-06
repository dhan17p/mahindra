sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'vobmah/test/integration/FirstJourney',
		'vobmah/test/integration/pages/VOBList',
		'vobmah/test/integration/pages/VOBObjectPage',
		'vobmah/test/integration/pages/YOYObjectPage'
    ],
    function(JourneyRunner, opaJourney, VOBList, VOBObjectPage, YOYObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('vobmah') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVOBList: VOBList,
					onTheVOBObjectPage: VOBObjectPage,
					onTheYOYObjectPage: YOYObjectPage
                }
            },
            opaJourney.run
        );
    }
);