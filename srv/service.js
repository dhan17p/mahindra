const cds = require('@sap/cds',);
const { select } = require('@sap/cds/libx/_runtime/hana/execute');
const { v4: uuidv4 } = require('uuid');
const { SELECT, INSERT, UPDATE, DELETE } = cds.ql
module.exports = cds.service.impl(async function () {
    let {
        Files,
        draft_attachments,
        uploadset,
        VOB,
        MediaFile, VOB_Screen2,
        YOY_Screen2,
        potential_suplier_scr1,
        comment,
        supplierdetails,
        VOB_Screen3,
        YOY_Screen3,
        VOB_Screen4,
        YOY_Screen4,
        Folder,
        Data,
        Workflow_History,
        Master_workflow

    } = this.entities;
    var BPA = await cds.connect.to("BPA_trigger");
    var vcvv = process.env.VCAP_SERVICES;
    console.log(vcvv);
    var response = await BPA.get('/workflow/rest/v1/workflow-instances');
    console.log(response);
    //   const cats = await cds.connect.to ('MyService');
    function decodeTimestamp(timestamp) {
        // Create a new Date object using the timestamp
        var date = new Date(timestamp);

        // Extract the components of the date
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
        var day = ('0' + date.getDate()).slice(-2);
        var hours = ('0' + date.getHours()).slice(-2);
        var minutes = ('0' + date.getMinutes()).slice(-2);
        var seconds = ('0' + date.getSeconds()).slice(-2);

        // Format the date as desired, for example: YYYY-MM-DD HH:MM:SS
        var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

        return formattedDate;
    }

    this.before('CREATE', 'Files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/Files(${req.data.ID})/content`
    })
    this.on('UPDATE', Workflow_History, async (req) => {


        debugger
        // var data = await SELECT.from(Workflow_History).where({ level: req.data.level, vob_id: req.data.vob_id });

        // for (let i = 0; i < data.length; i++) {
        //     var begin_Date_Time = new Date(data[i].begin_Date_Time);
        //     var currentDate = new Date();
        //     // var currentDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
        //     var timeDifference = currentDate - begin_Date_Time;
        //     var daysTaken = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        //     var dateTimeStamp = Date.now();
        //     var formattedDateTime = decodeTimestamp(dateTimeStamp)
        //     await UPDATE(Workflow_History).set({
        //         status: 'Rejected',
        //         end_Date_Time: `${formattedDateTime}`,
        //         days_Taken: `${daysTaken}`,
        //     }).where({
        //         vob_id: req.data.vob_id,
        //         level: req.data.level
        //     })

        // }


        try {
            debugger
            console.log(req.data);
            const isValidJson = (str) => {
                try {
                    JSON.parse(str);
                    return true;
                } catch (error) {
                    return false;
                }
            }
            console.log(isValidJson(req.data.title));
            //Which means triggered by Approval BPA Form
            if (isValidJson(req.data.title)) {
                console.log("inside isvalidjson")
                var commentsData = JSON.parse(req.data.title);




                if (commentsData["approvalflow"] == "true") {

                    //Comment Section
                    var commentKeyValue
                    var entry = [];
                    for (var key in commentsData) {
                        if (key == 'approvalflow' || key == 'app_rej_by') {
                            console.log("Not added to comments table", key);
                            continue;
                        }
                        commentKeyValue = `${key} : ${commentsData[key]}`;
                        entry.push({
                            id: `${req.data.vob_id}`,
                            comment: `${commentKeyValue}`,
                            createdBy: `${commentsData["app_rej_by"]}`

                        })
                        console.log("Entry for Comment:", entry);

                    }
                    if (entry.length) {
                        console.log("Inside comment insert statement");
                        await INSERT.into(comment).entries(entry);
                        entry = [];
                        console.log("Comment insert statement is completed");
                    }

                    //Approve or reject If condition

                    var approvedby = commentsData["app_rej_by"];
                    if (req.data.status == '3') {
                        console.log("Approved Call Triggered")

                        ////Decision Pending 

                        if (isValidJson(req.data.end_Date_Time)) {
                            console.log("inside validjson approval")
                            var approval_lineitem = req.data.end_Date_Time;
                            approval_lineitem = JSON.parse(approval_lineitem);
                            for (var key in approval_lineitem) {
                                console.log("approval line")
                                if (approval_lineitem[key] == 'true' || approval_lineitem[key] == true) {
                                    await UPDATE(YOY_Screen4, { id: key }).with({
                                        state: true
                                    })
                                }
                                else if (approval_lineitem[key] == 'false' || approval_lineitem[key] == false) {
                                    await UPDATE(YOY_Screen4, { id: key }).with({
                                        state: false
                                    })
                                }
                            }
                        }


                        var data = await SELECT.from(Workflow_History).where({ level: req.data.level, vob_id: req.data.vob_id });

                        for (let i = 0; i < data.length; i++) {
                            // await UPDATE(Workflow_History, { vob_id: data[i].vob_id, employee_id: data[i].employee_id, level: data[i].level }).with({
                            //     status: 'Approved'
                            // })
                            function parseDateString(dateString) {
                                var parts = dateString.split(/[\s/:,]+/); // Split the string by spaces, colons, slashes, and commas
                                var day = parseInt(parts[0], 10);
                                var month = parseInt(parts[1], 10) - 1; // Months are zero-based
                                var year = parseInt(parts[2], 10);
                                var hours = parseInt(parts[3], 10);
                                var minutes = parseInt(parts[4], 10);
                                var seconds = parseInt(parts[5], 10);
                                var ampm = parts[6].toLowerCase();

                                if (ampm === "pm" && hours < 12) {
                                    hours += 12;
                                } else if (ampm === "am" && hours === 12) {
                                    hours = 0;
                                }

                                return new Date(year, month, day, hours, minutes, seconds);
                            }
                            // Example usage
                            var startDateString = data[i].begin_Date_Time;
                            var endDateString = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

                            var startDate = parseDateString(startDateString);
                            var endDate = parseDateString(endDateString);

                            // Calculate the difference in milliseconds
                            var differenceInMilliseconds = endDate - startDate;

                            // Convert milliseconds to days
                            var differenceInDays = Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24));

                            console.log(approvedby)
                            await UPDATE(Workflow_History).set({
                                status: 'Approved',
                                end_Date_Time: `${endDateString}`,
                                days_Taken: `${differenceInDays}`,
                                approved_By: `${approvedby}`
                            }).where({
                                vob_id: req.data.vob_id,
                                level: req.data.level
                            })

                        }
                        console.log("updated status in workflow")
                        let numericVal = parseFloat(req.data.level);
                        numericVal = numericVal + 1;
                        var levelString = numericVal.toFixed(1);
                        console.log("levelString", levelString)
                        debugger
                        var nextLevelWFData = await SELECT.from(Workflow_History).where({ level: `${levelString}`, vob_id: req.data.vob_id });
                        var usersdata = '';
                        if (!nextLevelWFData.length) {
                            await UPDATE(VOB_Screen4, { id: req.data.vob_id }).with({
                                flowStatus: 'Approved'
                            })
                        }
                        console.log("Got data from nextLevelWFData");
                        for (let i = 0; i < nextLevelWFData.length; i++) {
                            var empid = nextLevelWFData[i].employee_id;
                            usersdata = usersdata + empid + ' ,';
                        }
                        console.log(usersdata);
                        if (usersdata) {
                            console.log("inside user data");
                            await UPDATE(VOB_Screen4, { id: req.data.vob_id }).with({
                                users: `${usersdata}`
                            })
                        }
                        console.log("updated user details")


                    }
                    else {
                        console.log("Rejected Call Triggered");

                        var data = await SELECT.from(Workflow_History).where({ level: req.data.level, vob_id: req.data.vob_id });

                        await UPDATE(VOB_Screen4, { id: req.data.vob_id }).with({
                            flowStatus: 'Pending'
                        })

                        for (let i = 0; i < data.length; i++) {
                            function parseDateString(dateString) {
                                var parts = dateString.split(/[\s/:,]+/); // Split the string by spaces, colons, slashes, and commas
                                var day = parseInt(parts[0], 10);
                                var month = parseInt(parts[1], 10) - 1; // Months are zero-based
                                var year = parseInt(parts[2], 10);
                                var hours = parseInt(parts[3], 10);
                                var minutes = parseInt(parts[4], 10);
                                var seconds = parseInt(parts[5], 10);
                                var ampm = parts[6].toLowerCase();

                                if (ampm === "pm" && hours < 12) {
                                    hours += 12;
                                } else if (ampm === "am" && hours === 12) {
                                    hours = 0;
                                }

                                return new Date(year, month, day, hours, minutes, seconds);
                            }
                            // Example usage
                            var startDateString = data[i].begin_Date_Time;
                            var endDateString = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

                            var startDate = parseDateString(startDateString);
                            var endDate = parseDateString(endDateString);

                            // Calculate the difference in milliseconds
                            var differenceInMilliseconds = endDate - startDate;

                            // Convert milliseconds to days
                            var differenceInDays = Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24));
                            await UPDATE(Workflow_History).set({
                                status: 'Rejected',
                                end_Date_Time: `${endDateString}`,
                                days_Taken: `${differenceInDays}`,
                                approved_By: `${approvedby}`
                            }).where({
                                vob_id: req.data.vob_id,
                                level: req.data.level
                            })

                        }

                        //fetching previous level approvers email id
                        let numericVal = parseFloat(req.data.level);
                        numericVal = numericVal - 1;
                        var levelString = numericVal.toFixed(1);
                        console.log("levelString", levelString)
                        debugger
                        var nextLevelWFData = await SELECT.from(Workflow_History).where({ level: `${levelString}`, vob_id: req.data.vob_id });
                        var usersdata = '';
                        if (!nextLevelWFData.length) {
                            await UPDATE(VOB_Screen4, { id: req.data.vob_id }).with({
                                flowStatus: 'Rejected'
                            })
                        }
                        console.log("Got data from nextLevelWFData");
                        for (let i = 0; i < nextLevelWFData.length; i++) {
                            var empid = nextLevelWFData[i].employee_id;
                            usersdata = usersdata + empid + ' ,';
                        }
                        console.log(usersdata);
                        if (usersdata) {
                            console.log("inside user data");
                            await UPDATE(VOB_Screen4, { id: req.data.vob_id }).with({
                                users: `${usersdata}`
                            })
                        }
                        console.log("updated user details")
                    }


                    var modified_data = await SELECT.from(Workflow_History).where({ level: req.data.level, vob_id: req.data.vob_id });

                    return;
                }
            }
        } catch (error) {
            console.log("An error occurred:", error);
        }
    })


    this.before('READ', 'Files', async (req, res) => {
        //check content-type
        debugger

        console.log('content-type: ', req.headers['content-type'])
    });
    //First Screen
    this.before('UPDATE', 'VOB', async req => {
        console.log(req.data);
        // var entries =[{
        //     id :req.data.id,
        //     part_system:req.data.part_system,
        //     project_code:req.data.project_code,
        //     vob_yoy_scr2:[{
        //         vob_id:req.data.vob_yoy[0].vob_id,
        //         MGSP_Part_Nos:req.data.vob_yoy[0].MGSP_Part_Nos
        //     }]
        // }]
        var values = await SELECT.from `VOB_Screen4` .columns `{sequentialVobId}}`
        
        var entries2 = [{
            id: req.data.id,
            part_system: req.data.part_system,
            project_code: req.data.project_code,
            project_description: req.data.project_description,
            sop: req.data.sop,
            sector: req.data.sector,
            potential_suppliers: req.data.potential_suppliers,
            forum: req.data.forum,
            presented_on_by: req.data.presented_on_by,
            supplier_assessment_score: req.data.supplier_assessment_score,
            vob_yoy_scr2: req.data.vob_yoy.map(yoyItem => ({
                vob_id: yoyItem.vob_id,
                MGSP_Part_Nos: yoyItem.MGSP_Part_Nos,
                proposed_vf_part_no: yoyItem.proposed_vf_part_no,
                application_model: yoyItem.application_model,
                f24: yoyItem.f24,
                f25: yoyItem.f25,
                f26: yoyItem.f26,
                total: yoyItem.total,
                Existing_MGSP_PO_Price: yoyItem.Existing_MGSP_PO_Price,
                target_price: yoyItem.target_price,
            }))
        }];
        var entries3 = [{
            id: req.data.id,
            part_system: req.data.part_system,
            project_code: req.data.project_code,
            project_description: req.data.project_description,
            sop: req.data.sop,
            sector: req.data.sector,
            potential_suppliers: req.data.potential_suppliers,
            forum: req.data.forum,
            presented_on_by: req.data.presented_on_by,
            supplier_assessment_score: req.data.supplier_assessment_score,
            vob_yoy_scr3: req.data.vob_yoy.map(yoyItem => ({
                vob_id: yoyItem.vob_id,
                MGSP_Part_Nos: yoyItem.MGSP_Part_Nos,
                proposed_vf_part_no: yoyItem.proposed_vf_part_no,
                application_model: yoyItem.application_model,
                f24: yoyItem.f24,
                f25: yoyItem.f25,
                f26: yoyItem.f26,
                total: yoyItem.total,
                Existing_MGSP_PO_Price: yoyItem.Existing_MGSP_PO_Price,
                target_price: yoyItem.target_price,
            })),
            vob_suplier: req.data.vob_suplier.map(supitem => ({
                id: supitem.id,
                suplier: supitem.suplier
            }))

        }];
        var entries4 = [{
            id: req.data.id,
            part_system: req.data.part_system,
            project_code: req.data.project_code,
            project_description: req.data.project_description,
            sop: req.data.sop,
            sector: req.data.sector,
            potential_suppliers: req.data.potential_suppliers,
            forum: req.data.forum,
            presented_on_by: req.data.presented_on_by,
            supplier_assessment_score: req.data.supplier_assessment_score,
            vob_yoy_scr4: req.data.vob_yoy.map(yoyItem => ({
                vob_id: yoyItem.vob_id,
                MGSP_Part_Nos: yoyItem.MGSP_Part_Nos,
                proposed_vf_part_no: yoyItem.proposed_vf_part_no,
                application_model: yoyItem.application_model,
                f24: yoyItem.f24,
                f25: yoyItem.f25,
                f26: yoyItem.f26,
                total: yoyItem.total,
                Existing_MGSP_PO_Price: yoyItem.Existing_MGSP_PO_Price,
                target_price: yoyItem.target_price,
            })),
            vob_suplier: req.data.vob_suplier.map(supitem => ({
                id: supitem.id,
                suplier: supitem.suplier
            }))
        }];

        await INSERT.into(VOB_Screen2).entries(entries2);
        await INSERT.into(VOB_Screen3).entries(entries3);
        await INSERT.into(VOB_Screen4).entries(entries4);

        //     var val33 = await SELECT`*`.from(VOB_Screen2);
        //     let sel_query = SELECT.from`VOB_Screen2`
        //     let sel2_query = SELECT.from('VOB_Screen2')
        //     let entities1 = [];
        //     entities1.push({
        //         id: req.data.id,
        //         vob_suplier: req.data.vob_suplier,
        //         vob_yoy: req.data.vob_yoy
        //     });
        //     req.data.vob_yoy_scr2 = req.data.vob_yoy;
        //     var vob_yoydata = req.data.vob_yoy;
        //     delete req.data.vob_yoy;
        //     let ind44 = await INSERT.into(VOB_Screen2).entries(req.data);
        //     var val33 = await SELECT.from(VOB_Screen2).where({ id: req.data.id });
        //     //  var val332 =  await SELECT `*`.from(VOB_Screen2.drafts); 
        //     req.data.vob_yoy = vob_yoydata;
        //     delete req.data.vob_yoy_scr2;

        //     var for_third_screen = req.data;
        //     for_third_screen.vob_yoy_scr3 = for_third_screen.vob_yoy
        //     delete for_third_screen.vob_yoy
        //     for_third_screen.vob_suplier_scr3 = for_third_screen.vob_suplier
        //     delete for_third_screen.vob_suplier
        //   await INSERT.into(VOB_Screen3).entries(for_third_screen);
        //       req.data.vob_yoy = req.data.vob_yoy_scr3;
        //      delete req.data.vob_yoy_scr3;
        //      req.data.vob_suplier = req.data.vob_suplier_scr3;
        //      delete req.data.vob_suplier_scr3;
        //      req.data.vob_yoy_scr4 = req.data.vob_yoy
        //      req.data.vob_suplier4 = req.data.vob_suplier
        //      delete req.data.vob_yoy
        //      delete req.data.vob_suplier
        //      await INSERT.into(VOB_Screen4).entries(req.data);
        //      req.data.vob_yoy = req.data.vob_yoy_scr4;
        //      delete req.data.vob_yoy_scr4;
        //      req.data.vob_suplier = req.data.vob_suplier4;
        //      delete req.data.vob_suplier4;

    });
    this.on('createEntry', async (req) => {
        debugger
        var yoydata = req.data.status;

        if (req.data.status == 'vobpost') {
            let data = await INSERT.into(VOB).entries({ project_code: '' });
            let data1 = await SELECT.from(VOB);
            return data1[data1.length - 1].id
        }
        if (yoydata.status == 'yoypost') {
            let data = await INSERT.into(YOY).entries({ vob_id: yoydata.vob_id });
            let data1 = await SELECT.from(VOB);
            // return data1[data1.length - 1].id
        }
    })
    this.on('deleteEntry', async (req) => {
        debugger
        let result = req.data.keyid;

        result = JSON.parse(result);
        for (let i = 0; i < result.length; i++) {
            await DELETE.from(VOB).where({ id: result[i] });

        }

    })
    this.on('commentfun', async (req) => {
        var reqdata = JSON.parse(req.data.status);
        if (reqdata.status == "screen1comment") {
            let ind44 = await INSERT.into(comment).entries({ id: reqdata.id, comment: reqdata.comment, createdBy: reqdata.createdBy });
        }
        if (reqdata.status == "screen2commentview") {
            let value = await SELECT.from(comment).where({ id: reqdata.id });
            value = JSON.stringify(value)
            return value;
        }
        if (reqdata.worlflowtriger == "triggered") {
            var dateTimeStamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
            // var formattedDateTime = decodeTimestamp(dateTimeStamp)
            await UPDATE(VOB_Screen4, reqdata.id).with({
                flowStatus: "Pending", startedAt: dateTimeStamp
            });
            await UPDATE(Workflow_History, reqdata.id).with({
                begin_Date_Time: dateTimeStamp
            });
            var files_content = await SELECT`content,ID`.from(Files).where({ vob_id: reqdata.id });
            function streamToBase64(stream) {
                return new Promise((resolve, reject) => {
                    const chunks = [];
                    stream.on('data', chunk => {
                        chunks.push(chunk);
                    });
                    stream.on('end', () => {
                        const binaryData = Buffer.concat(chunks);
                        // binaryData1 = binaryData;
                        const base64String = binaryData.toString('base64');
                        // base64String1 = base64String;
                        // fs.writeFile(AttachmentFile, binaryData1, 'binary', (err) => {
                        // fs.writeFile(AttachmentFile, Buffer.from(binaryData1), (err) => {
                        //     if (err) {
                        //         console.error('Error writing file:', err);
                        //         return;
                        //     }
                        //     console.log('File saved successfully');
                        // });
                        resolve(base64String);

                    });
                    stream.on('error', reject);
                });
            }
            for (let entry of files_content) {
                var base64data = streamToBase64(entry.content);
                await UPDATE(Files, entry.ID).with({
                    contentString: base64data
                });
            }
            var body = {
                "definitionId": "us10.2890861ctrial.triggerbpa.myProcess",
                "context": {
                    "vob_id": `${reqdata.id}`,
                    "level_fil": "level eq '",
                    "vobid_fil": "' and vob_id eq ",
                    "emp": "",
                    "filter_for_vobentity": `id eq ${reqdata.id}`
                }
            }
            // var response = await BPA.post('/workflow/rest/v1/workflow-instances',body);
            try {
                var response = await BPA.post('/workflow/rest/v1/workflow-instances', body);
                // Success: Process the response
                console.log("Response:", response);
            } catch (error) {
                // Error: Handle the error
                console.log("Error:", error);
            }
        }
    })
    this.on('vanddetails', async (req) => {
        console.log("vanddetails triggered");

        var reqdata = JSON.parse(req.data.status);
        // var reqdata = req.data.status;
        console.log(req.data);

        if (reqdata.status == 'workflowhistoryget') {
            debugger;
            //  let workflowhistory23 = await SELECT.from(Workflow_History)
            let workflowhistory = await SELECT.from(Workflow_History).where({ vob_id: reqdata.id });
            let workflowhistoryvalues = JSON.stringify({ workflowhistory });
            return workflowhistoryvalues;
        }
        //  if(reqdata == '42324e73-03f3-4ec4-826b-6df288522a6f'){
        //     debugger
        //     let workflowmaster = await SELECT.from(Master_workflow);
        //         for(const entry1  of workflowmaster ){
        //         var ee = await INSERT.into(Workflow_History).entries(
        //             { vob_id: reqdata, employee_id: entry1.employee_id, level: entry1.level })
        //         }
        // }
        if (reqdata.status == 'workflowtovob') {
            debugger
            console.log("inside workflowtovob ")
            let workflowmaster = await SELECT.from(Master_workflow);
            let workflowmaster_level1 = await SELECT.from(Master_workflow).where({ level: "1.0" });
            var result = workflowmaster_level1.map(function (item) {
                return item.employee_id;
            }).join(' ,');

            await UPDATE(VOB_Screen4, reqdata.id).with({
                users: result,
            });
            for (const entry1 of workflowmaster) {
                console.log('inside for loop')
                console.log(entry1);
                await INSERT.into(Workflow_History).entries(
                    { vob_id: reqdata.id, employee_id: entry1.employee_id, level: entry1.level, employee_Name: entry1.employee_Name })
                console.log("successfull");
            }
        }
        if (reqdata.status == 'screen2get') {
            let partdetails = await SELECT.from(YOY_Screen2);
            let venordss = await SELECT.from(YOY_Screen2).where({ id: reqdata.id });
            // let supp = await SELECT.from(potential_suplier_scr1).where({id:reqdata.id});
            // let venordssString = JSON.stringify(venordss);
            // let suppString = JSON.stringify(supp);

            // // Concatenate both strings
            // let combinedString = venordssString + '\n' + suppString;

            // Return the combined string
            return venordss;
        }
        if (reqdata.status == 'screen2get1') {
            console.log(reqdata);
            let partdetails = await SELECT.from(YOY_Screen2);
            let venordss = await SELECT.from(YOY_Screen2).where({ vob_id: reqdata.id });
            let supplier = await SELECT.from(potential_suplier_scr1).where({ id: reqdata.id });
            let venordssString = JSON.stringify({ supplier, venordss });
            return venordssString;
        }
        if (reqdata.status == 'submitfourthscreen') {
            var screen4table = reqdata.tableData1 || [];
            if (screen4table.length > 0) {
                for (const item of screen4table) {
                    await UPDATE(YOY_Screen4, item.id).with({
                        state: `${item.state}`,
                    });
                }
            }

        }
        if (reqdata.status == 'submitsecondscreen') {
            var screen2table = reqdata.tableData1 || [];
            var supplierdetails1 = reqdata.array_supplier_item_new || [];
            var supplierdetails2 = reqdata.array_supplier_item_old || [];
            console.log(screen2table);
            if (screen2table.length > 0) {
                for (const item of screen2table) {
                    await UPDATE(YOY_Screen2, item.id).with({
                        Existing_MGSP_PO_Price: item.Existing_MGSP_PO_Price,
                        target_price: item.Target_Price
                    });
                }
            }
            // screen2table.forEach(async item => {
            //     await UPDATE(YOY_Screen2, item.id).with({
            //         Existing_MGSP_PO_Price: item.Existing_MGSP_PO_Price,
            //         target_price: item.Target_Price
            //     })
            //     // do something with 'item'
            //     console.log(item);  // for example, log each item
            // });
            // await UPDATE(YOY_Screen2, screen2table[0].id).with({
            //                     Existing_MGSP_PO_Price: screen2table[0].Existing_MGSP_PO_Price,
            //                     target_price: screen2table[0].Target_Price
            //                 })

            // Check if screen2table array has elements
            // if (screen2table.length > 0) {
            //     screen2table.forEach(async function (entry) {
            //         // Update entries in YOY_Screen2, YOY_Screen3, and YOY_Screen4
            //         // await Promise.all([
            //            await UPDATE(YOY_Screen2, entry.id).with({
            //                 Existing_MGSP_PO_Price: entry.Existing_MGSP_PO_Price,
            //                 target_price: entry.Target_Price
            //             })
            //             // UPDATE(YOY_Screen3, entry.id).with({
            //             //     Existing_MGSP_PO_Price: entry.Existing_MGSP_PO_Price,
            //             //     target_price: entry.Target_Price
            //             // }),
            //             // UPDATE(YOY_Screen4, entry.id).with({
            //             //     Existing_MGSP_PO_Price: entry.Existing_MGSP_PO_Price,
            //             //     target_price: entry.Target_Price
            //             // })
            //         // ]);
            //     });
            // }

            // Check if supplierdetails1 array has elements
            // if (supplierdetails1.length > 0) {
            //     supplierdetails1.forEach(async function (entry) {
            //         let id_main1 = uuidv4();
            //         var inserted = await INSERT.into(potential_suplier_scr1).entries(
            //             { id_main: id_main1, id: reqdata.id, suplier: entry[entry.length - 1].supplier_name }
            //         );
            //         entry.forEach(async function (entry1) {
            //             var ee = await INSERT.into(supplierdetails).entries(
            //                 { id_supplier: id_main1, value_key: entry1.value_key, value: entry1.value })
            //         });
            //     });
            // }
            if (supplierdetails1.length > 0) {
                console.log("supplierdetails1 inside");
                for (const entry of supplierdetails1) {
                    let id_main1 = uuidv4();
                    await INSERT.into(potential_suplier_scr1).entries(
                        { id_main: id_main1, id: reqdata.id, suplier: entry[entry.length - 1].supplier_name }
                    );
                    for (const entry1 of entry) {
                        console.log("supplierdetails1 inside");
                        await INSERT.into(supplierdetails).entries(
                            { id_supplier: id_main1, value_key: entry1.value_key, value: entry1.value })
                    }
                }
            }
            if (supplierdetails2.length > 0) {
                for (const entry of supplierdetails2) {
                    var id_main_new = entry[entry.length - 1].supplier_id
                    for (const entry1 of entry) {
                        await INSERT.into(supplierdetails).entries(
                            { id_supplier: id_main_new, value_key: entry1.value_key, value: entry1.value })
                    }
                }
            }
            // Check if supplierdetails2 array has elements
            // if (supplierdetails2.length > 0) {
            //     supplierdetails2.forEach(async function (entry) {
            //         var id_main_new = entry[entry.length - 1].supplier_id
            //         entry.forEach(async function (entry1) {
            //             var ee = await INSERT.into(supplierdetails).entries(
            //                 { id_supplier: id_main_new, value_key: entry1.value_key, value: entry1.value })
            //         });
            //     });
            // }
        }

        if (reqdata.status == 'screen3get1') {
            let partdetails = await SELECT.from(YOY_Screen3);
            let venordss = await SELECT.from(YOY_Screen3).where({ vob_id: reqdata.id });
            let suppliers = await SELECT.from(potential_suplier_scr1).where({ id: reqdata.id });
            let vob_details = await SELECT.from(VOB_Screen4).where({ id: reqdata.id })
            var supllier_detail_together = []
            for (let supplier of suppliers) {
                // Fetch the supplier details for the current supplier
                let supplierDetails = await SELECT.from(supplierdetails).where({ id_supplier: supplier.id_main });

                // Create a new object for the current supplier
                let newObj = {
                    supplier: supplier.suplier, // Assuming suplier is the property containing the supplier name
                    rel: supplierDetails
                };

                // Push the new object into the array
                supllier_detail_together.push(newObj);
            }
            // let supplier_detais = await SELECT.from(supplierdetails).where({ vob_id: reqdata.id });
            let venordssString = JSON.stringify({ suppliers, venordss, supllier_detail_together, vob_details });
            return venordssString;
        }
    })



    this.on("data", async (req) => {
        console.log(req);
        let id = req.data.id;
        let data = req.data.Data;
        let dataArray = data.split(',');
        var sqlDatat
        for (let i = 0; i < dataArray.length; i++) {
            sqlDatat = await SELECT.from(Data).where`id=${id} AND Data=${dataArray[i]}`
            if (sqlDatat.length != 0) {
                let v1 = sqlDatat[0].id;
                let v2 = sqlDatat[0].Data;
                await DELETE.from(Data).where`id=${v1} AND Data=${v2}`;
            }
            console.log(sqlDatat.length);
        }
        for (let i = 0; i < dataArray.length; i++) {
            // Insert each value separately with the same ID
            const Insert = await INSERT.into(Data).entries({
                id: id,
                Data: dataArray[i].trim() // Trim whitespace from each value
            });
            console.log(Insert);
        }

        return "success"
    })

    this.on("remove", async (req) => {
        console.log(req);
        let check = await SELECT.from(Data).where`id=${req.data.id} AND Data=${req.data.fold}`
        if (check.length > 0) {
            await DELETE.from(Data).where`id=${req.data.id} AND Data=${req.data.fold}`;
        }

        return "deleted"
    })

    this.on("check", async (req) => {
        console.log();
        const values = req.data.id;
        const array_values = values.split(',');
        const missingValues = [];
        let check = await SELECT`id,Data`.from(Data);
        for (let i = 0; i < check.length; i++) {
            const dataValue = check[i].Data;
            if (!array_values.includes(dataValue)) {
                missingValues.push(dataValue);
            }
        }
        console.log();
        if (missingValues.length != 0) {
            for (let j = 0; j < missingValues.length; j++) {
                let deleted = await DELETE.from(Data).where`id=${req.data.fold} AND Data=${missingValues[j]}`;
            }
        }

        return "removed unselected value"
    })


    this.on("getdata", async (req) => {
        console.log(req);
        let data = await SELECT`id,Data`.from(Data);
        let data1 = await SELECT`id,Folder_Name`.from(Folder);

        return JSON.stringify({
            data: data,
            data1: data1,
        });
    })


    this.on("delete1", async (req) => {
        console.log();
        let deleted = await DELETE.from(Data).where`id=${req.data.id}`;
        console.log(deleted);
        return "executed delete function"
    })
    this.on("fold_data_attach", async (req) => {
        let data = await SELECT`id,Data`.from(Data);
        return JSON.stringify(data);
    })

})