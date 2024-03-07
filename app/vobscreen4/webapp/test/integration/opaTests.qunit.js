sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'vobscreen4/test/integration/FirstJourney',
		'vobscreen4/test/integration/pages/VOB_Screen4List',
		'vobscreen4/test/integration/pages/VOB_Screen4ObjectPage',
		'vobscreen4/test/integration/pages/YOY_Screen4ObjectPage'
    ],
    function(JourneyRunner, opaJourney, VOB_Screen4List, VOB_Screen4ObjectPage, YOY_Screen4ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('vobscreen4') + '/index.html'
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