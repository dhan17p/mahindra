sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'vobscreen3/test/integration/FirstJourney',
		'vobscreen3/test/integration/pages/VOB_Screen3List',
		'vobscreen3/test/integration/pages/VOB_Screen3ObjectPage',
		'vobscreen3/test/integration/pages/YOY_Screen3ObjectPage'
    ],
    function(JourneyRunner, opaJourney, VOB_Screen3List, VOB_Screen3ObjectPage, YOY_Screen3ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('vobscreen3') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVOB_Screen3List: VOB_Screen3List,
					onTheVOB_Screen3ObjectPage: VOB_Screen3ObjectPage,
					onTheYOY_Screen3ObjectPage: YOY_Screen3ObjectPage
                }
            },
            opaJourney.run
        );
    }
);