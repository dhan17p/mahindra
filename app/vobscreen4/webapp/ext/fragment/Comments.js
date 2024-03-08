sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            debugger
            var cdialog = new sap.m.Dialog({
                title: "Comments",
                endButton: new sap.m.Button({
                    text: "Close",
                    press: async function() {
                        cdialog.close();
                    },
                    layoutData: new sap.m.FlexItemData({
                        // Add layoutData for flexible item behavior
                        growFactor: 5,
                        alignSelf: "End" // Align the button to the end (right)
                    })
                })
            });
            cdialog.addContent(new sap.m.VBox({
                width:"60vw"
            }));

            function generateUniqueId() {
                // Generate a random number
                var randomNumber = Math.floor(Math.random() * 1000000);

                // Get the current timestamp
                var timestamp = new Date().getTime();

                // Combine timestamp and random number to create a unique ID
                var uniqueId = timestamp + '-' + randomNumber;

                return uniqueId;
            }
            debugger
            var oTimelineItem = new sap.suite.ui.commons.TimelineItem(("thisuniqid1"+generateUniqueId()),{
                dateTime: "12/3/34",
                // title: "demo title1",
                userNameClickable: false,
                // userNameClicked: "onUserNameClick",
                // select: "onPressItems",
                // userPicture: "Photo",
                text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                userName: "Team Recommendation with Rationale"
            });
            var oTimelineItem1 = new sap.suite.ui.commons.TimelineItem(("thisuniqid2"+generateUniqueId()),{
                dateTime: "12/3/34",
                // title: "demo title1",
                userNameClickable: false,
                // userNameClicked: "onUserNameClick",
                // select: "onPressItems",
                // userPicture: "Photo",
                text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                userName: "Decision & MOM of Forum"
            });
            var oTimelineItem2 = new sap.suite.ui.commons.TimelineItem(("thisuniqid2"+generateUniqueId()),{
                dateTime: "12/3/34",
                // title: "demo title1",
                userNameClickable: false,
                // userNameClicked: "onUserNameClick",
                // select: "onPressItems",
                // userPicture: "Photo",
                text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                userName: "Development Supply Agreement Whether Signed ? (If no- LoBA will share after DSA agreement.)"                
            });
            var oTimelineItem3 = new sap.suite.ui.commons.TimelineItem(("thisuniqid2"+generateUniqueId()),{
                dateTime: "12/3/34",
                // title: "demo title1",
                userNameClickable: false,
                // userNameClicked: "onUserNameClick",
                // select: "onPressItems",
                // userPicture: "Photo",
                text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                userName: "Tooling Agreement signed"                
            });
            var oTimelineItem4= new sap.suite.ui.commons.TimelineItem(("thisuniqid2"+generateUniqueId()),{
                dateTime: "12/3/34",
                // title: "demo title1",
                userNameClickable: false,
                // userNameClicked: "onUserNameClick",
                // select: "onPressItems",
                // userPicture: "Photo",
                text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
                userName: "Supplier Code of Conduct"                
            });
            
            cdialog.addContent(oTimelineItem);
            cdialog.addContent(oTimelineItem1);
            cdialog.addContent(oTimelineItem2);
            cdialog.addContent(oTimelineItem3);
            cdialog.addContent(oTimelineItem4);
    
            cdialog.open(); // Open the dialog
debugger
        }
    };
});
