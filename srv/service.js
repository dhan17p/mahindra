const cds = require('@sap/cds',);
const { v4: uuidv4 } = require('uuid');
const { SELECT, INSERT, UPDATE, DELETE } = cds.ql
module.exports = cds.service.impl(async function () {
    let {
        Files,
        draft_attachments,
        uploadset,
        MediaFile, VOB_Screen2,
        YOY_Screen2,
        potential_suplier_scr1,
        comment,
        supplierdetails,
        VOB_Screen3,
        YOY_Screen3,
        VOB_Screen4,
        YOY_Screen4,
        

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
    this.before('POST', 'VOB', async req => {
        //check content-type
        var main_req = req.data
        var val33 = await SELECT`*`.from(VOB_Screen2);
        let sel_query = SELECT.from`VOB_Screen2`
        let sel2_query = SELECT.from('VOB_Screen2')
        let entities1 = [];
        entities1.push({
            id: req.data.id,
            vob_suplier: req.data.vob_suplier,
            vob_yoy: req.data.vob_yoy
        });
        req.data.vob_yoy_scr2 = req.data.vob_yoy;
        var vob_yoydata = req.data.vob_yoy;
        delete req.data.vob_yoy;
        let ind44 = await INSERT.into(VOB_Screen2).entries(req.data);
        var val33 = await SELECT.from(VOB_Screen2).where({ id: req.data.id });
        //  var val332 =  await SELECT `*`.from(VOB_Screen2.drafts); 
        req.data.vob_yoy = vob_yoydata;
        delete req.data.vob_yoy_scr2;

        var for_third_screen = req.data;
        for_third_screen.vob_yoy_scr3 = for_third_screen.vob_yoy
        delete for_third_screen.vob_yoy
        for_third_screen.vob_suplier_scr3 = for_third_screen.vob_suplier
        delete for_third_screen.vob_suplier
      await INSERT.into(VOB_Screen3).entries(for_third_screen);
          req.data.vob_yoy = req.data.vob_yoy_scr3;
         delete req.data.vob_yoy_scr3;
         req.data.vob_suplier = req.data.vob_suplier_scr3;
         delete req.data.vob_suplier_scr3;

         req.data.vob_yoy_scr4 = req.data.vob_yoy
         req.data.vob_suplier4 = req.data.vob_suplier
         delete req.data.vob_yoy
         delete req.data.vob_suplier
         await INSERT.into(VOB_Screen4).entries(req.data);
         req.data.vob_yoy = req.data.vob_yoy_scr4;
         delete req.data.vob_yoy_scr4;
         req.data.vob_suplier = req.data.vob_suplier4;
         delete req.data.vob_suplier4;

    });
    // this.before('POST','VOB',async req =>{
    //     let entities1 = [{
    //         id: req.data.id,
    //         part_system: req.data.part_system,
    //         project_code: req.data.project_code,
    //         project_description: req.data.project_description,
    //         sop: req.data.sop,
    //         sector: req.data.sector,
    //         potential_suppliers: req.data.potential_suppliers,
    //         supplier_assessment_score: req.data.supplier_assessment_score,
    //         forum: req.data.forum,
    //         presented_on_by: req.data.presented_on_by,
    //         vob_yoy_scr2: req.data.vob_yoy
    //     }];
    //   await INSERT.into(VOB_Screen2).entries(entities1);
    // })
    this.before('SAVE','VOB',async req =>{
        debugger
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
            let partdetails = await SELECT.from(YOY_Screen2);
            let venordss = await SELECT.from(YOY_Screen2).where({ vob_id: reqdata.id });
            let supplier = await SELECT.from(potential_suplier_scr1).where({ id: reqdata.id });
            let venordssString = JSON.stringify({ supplier, venordss });
            return venordssString;
        }
        if (reqdata.status == 'submitsecondscreen') {
            var screen2table = reqdata.tableData1;
            //  var supplierdetails = reqdata.suppliers
            var supplierdetails1 = reqdata.array_supplier_item_new
            var supplierdetails2 = reqdata.array_supplier_item_old
            screen2table.forEach(async function (entry) {
                await UPDATE(YOY_Screen2, entry.id).with({
                    Existing_MGSP_PO_Price: entry.Existing_MGSP_PO_Price,
                    target_price: entry.Target_Price
                });
                await UPDATE(YOY_Screen3, entry.id).with({
                    Existing_MGSP_PO_Price: entry.Existing_MGSP_PO_Price,
                    target_price: entry.Target_Price
                });
                await UPDATE(YOY_Screen4, entry.id).with({
                    Existing_MGSP_PO_Price: entry.Existing_MGSP_PO_Price,
                    target_price: entry.Target_Price
                });
            });
            // supplierdetails.forEach(async function(entry){
            //     let id_main1 = uuidv4();
            //      var inserted = await INSERT.into(potential_suplier_scr1).entries(
            //         {id_main:id_main1,id:reqdata.id,suplier:entry}
            //      );
            supplierdetails1.forEach(async function (entry) {
                let id_main1 = uuidv4();
                var inserted = await INSERT.into(potential_suplier_scr1).entries(
                    { id_main: id_main1, id: reqdata.id, suplier: entry[entry.length - 1].supplier_name }
                );
                entry.forEach(async function (entry1) {
                    var ee = await INSERT.into(supplierdetails).entries(
                        { id_supplier: id_main1, value_key: entry1.value_key, value: entry1.value })
                })
            })
            supplierdetails2.forEach(async function (entry) {
                var id_main_new = entry[entry.length - 1].supplier_id
                var dddd = await SELECT.from(potential_suplier_scr1);

    
                entry.forEach(async function (entry1) {
                    var ee = await INSERT.into(supplierdetails).entries(
                        { id_supplier: id_main_new, value_key: entry1.value_key, value: entry1.value })
                })
            })
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
            let venordssString = JSON.stringify({ suppliers, venordss, supllier_detail_together});
            return venordssString;
        }
    })
})