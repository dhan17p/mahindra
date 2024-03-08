sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'vobscreen4b/test/integration/FirstJourney',
		'vobscreen4b/test/integration/pages/VOB_Screen4List',
		'vobscreen4b/test/integration/pages/VOB_Screen4ObjectPage',
		'vobscreen4b/test/integration/pages/YOY_Screen4ObjectPage'
    ],
    function(JourneyRunner, opaJourney, VOB_Screen4List, VOB_Screen4ObjectPage, YOY_Screen4ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('vobscreen4b') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVOB_Screen4List: VOB_Screen4List,
					onTheVOB_Screen4ObjectPage: VOB_Screen4ObjectPage,
					onTheYOY_Screen4ObjectPage: YOY_Screen4ObjectPage
                }
            },
            opaJourney.run
        );
    }
);