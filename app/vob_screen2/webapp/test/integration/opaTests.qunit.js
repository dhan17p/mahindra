sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'vobscreen2/test/integration/FirstJourney',
		'vobscreen2/test/integration/pages/VOB_Screen2List',
		'vobscreen2/test/integration/pages/VOB_Screen2ObjectPage',
		'vobscreen2/test/integration/pages/YOY_Screen2ObjectPage'
    ],
    function(JourneyRunner, opaJourney, VOB_Screen2List, VOB_Screen2ObjectPage, YOY_Screen2ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('vobscreen2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVOB_Screen2List: VOB_Screen2List,
					onTheVOB_Screen2ObjectPage: VOB_Screen2ObjectPage,
					onTheYOY_Screen2ObjectPage: YOY_Screen2ObjectPage
                }
            },
            opaJourney.run
        );
    }
);