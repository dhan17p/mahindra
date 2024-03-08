sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'vobscreen4bb/test/integration/FirstJourney',
		'vobscreen4bb/test/integration/pages/VOB_Screen4bList',
		'vobscreen4bb/test/integration/pages/VOB_Screen4bObjectPage',
		'vobscreen4bb/test/integration/pages/YOY_Screen4bObjectPage'
    ],
    function(JourneyRunner, opaJourney, VOB_Screen4bList, VOB_Screen4bObjectPage, YOY_Screen4bObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('vobscreen4bb') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheVOB_Screen4bList: VOB_Screen4bList,
					onTheVOB_Screen4bObjectPage: VOB_Screen4bObjectPage,
					onTheYOY_Screen4bObjectPage: YOY_Screen4bObjectPage
                }
            },
            opaJourney.run
        );
    }
);