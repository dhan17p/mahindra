sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: async function( oEvent) {
            debugger
            // var str = this.getBindingContext().sPath;
            // // Regular expression to match the UUID pattern within parentheses
            // var uuidRegex = /\(([^)]+)\)/;

            // // Extracting the UUID from the string using match function and regex
            // var match = str.match(uuidRegex);

            // // Check if match is found and extract the UUID
            // var extractedUuid = match ? match[1] : null;


            
            var currentUrl = window.location.href;
            var uuidRegex = /id=([0-9a-fA-F-]+),/;
            var extractedUuid = currentUrl.match(uuidRegex)[1];
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
            let oFunction1 =this.getModel().bindContext("/commentfun(...)");
            var statusval1 = JSON.stringify({ id: extractedUuid, status: "screen2commentview"})
            oFunction1.setParameter("status", statusval1)
            await oFunction1.execute()
            var result1 = oFunction1.getBoundContext().getValue()?.value;
					var comments = JSON.parse(result1);
                    comments.forEach(function(entry) {
                        var oTimelineItem = new sap.suite.ui.commons.TimelineItem(("thisuniqid1" + generateUniqueId()), {
                            dateTime: entry.createdAt,
                            // title: "demo title1",
                            userNameClickable: false,
                            // userNameClicked: "onUserNameClick",
                            // select: "onPressItems",
                            // userPicture: "Photo",
                            text: entry.comment,
                            userName: entry.createdBy
                        });
                        cdialog.addContent(oTimelineItem);
                        debugger
                        
                    });
            // var oTimelineItem = new sap.suite.ui.commons.TimelineItem(("thisuniqid1"+generateUniqueId()),{
            //     dateTime: "12/3/34",
            //     // title: "demo title1",
            //     userNameClickable: false,
            //     // userNameClicked: "onUserNameClick",
            //     // select: "onPressItems",
            //     // userPicture: "Photo",
            //     text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            //     userName: "Team Recommendation with Rationale"
            // });
            // var oTimelineItem1 = new sap.suite.ui.commons.TimelineItem(("thisuniqid2"+generateUniqueId()),{
            //     dateTime: "12/3/34",
            //     // title: "demo title1",
            //     userNameClickable: false,
            //     // userNameClicked: "onUserNameClick",
            //     // select: "onPressItems",
            //     // userPicture: "Photo",
            //     text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            //     userName: "Decision & MOM of Forum"
            // });
            // var oTimelineItem2 = new sap.suite.ui.commons.TimelineItem(("thisuniqid2"+generateUniqueId()),{
            //     dateTime: "12/3/34",
            //     // title: "demo title1",
            //     userNameClickable: false,
            //     // userNameClicked: "onUserNameClick",
            //     // select: "onPressItems",
            //     // userPicture: "Photo",
            //     text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            //     userName: "Development Supply Agreement Whether Signed ? (If no- LoBA will share after DSA agreement.)"                
            // });
            // var oTimelineItem3 = new sap.suite.ui.commons.TimelineItem(("thisuniqid2"+generateUniqueId()),{
            //     dateTime: "12/3/34",
            //     // title: "demo title1",
            //     userNameClickable: false,
            //     // userNameClicked: "onUserNameClick",
            //     // select: "onPressItems",
            //     // userPicture: "Photo",
            //     text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            //     userName: "Tooling Agreement signed"                
            // });
            // var oTimelineItem4= new sap.suite.ui.commons.TimelineItem(("thisuniqid2"+generateUniqueId()),{
            //     dateTime: "12/3/34",
            //     // title: "demo title1",
            //     userNameClickable: false,
            //     // userNameClicked: "onUserNameClick",
            //     // select: "onPressItems",
            //     // userPicture: "Photo",
            //     text: 'Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
            //     userName: "Supplier Code of Conduct"                
            // });
            
            // cdialog.addContent(oTimelineItem);
            // cdialog.addContent(oTimelineItem1);
            // cdialog.addContent(oTimelineItem2);
            // cdialog.addContent(oTimelineItem3);
            // cdialog.addContent(oTimelineItem4);
    
            cdialog.open(); // Open the dialog
debugger
        }
    };
});
