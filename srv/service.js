const cds = require('@sap/cds',);
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
        Data

    } = this.entities;
    //   const cats = await cds.connect.to ('MyService');

    this.before('CREATE', 'Files', req => {
        console.log('Create called')
        console.log(JSON.stringify(req.data))
        req.data.url = `/odata/v4/my/Files(${req.data.ID})/content`
    })

    this.before('READ', 'Files', req => {
        //check content-type
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
            vob_suplier_scr3: req.data.vob_suplier.map(supitem => ({
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
            vob_suplier4: req.data.vob_suplier.map(supitem => ({
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
            let ind44 = await INSERT.into(comment).entries({ id: reqdata.id, comment: reqdata.comment });
        }
        if (reqdata.status == "screen2commentview") {
            let value = await SELECT.from(comment).where({ id: reqdata.id });
            value = JSON.stringify(value)
            return value;
        }
    })
    this.on('vanddetails', async (req) => {

        var reqdata = JSON.parse(req.data.status);
        console.log(req.data);

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
        if(reqdata.status == 'submitfourthscreen'){
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
            let venordssString = JSON.stringify({ suppliers, venordss, supllier_detail_together });
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
        if(check.length > 0)
        {
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
        if(missingValues.length != 0)
        {
            for(let j = 0;j<missingValues.length;j++)
            {
               let deleted =  await DELETE.from(Data).where`id=${req.data.fold} AND Data=${missingValues[j]}`; 
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
        let deleted =  await DELETE.from(Data).where`id=${req.data.id}`;
        console.log(deleted);
        return "executed delete function"
     })
    this.on("fold_data_attach", async (req) => {
        let data = await SELECT`id,Data`.from(Data);
        // var data = [
        //     { NDA: 'rajendraakshay1@gmail.com' },
        //     { RFQ: 'john@peolsolutions.com' },
        //     { RFQ: 'rajendraakshay1@gmail.com' }
        // ];
        return JSON.stringify(data);
     })
     
})