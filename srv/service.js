const cds = require('@sap/cds',);
const { SELECT, INSERT, UPDATE, DELETE } = cds.ql
module.exports =cds.service.impl( async function () {
    let {
        Files,
        draft_attachments,
        uploadset,
        MediaFile,VOB_Screen2,
        YOY_Screen2,
        potential_suplier_scr1
    }=this.entities;
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
    this.before('POST', 'VOB',  async req => {
        //check content-type
       var val33 =  await SELECT `*`.from(VOB_Screen2); 
        let sel_query = SELECT.from `VOB_Screen2`
        let sel2_query = SELECT.from('VOB_Screen2')
        let entities1=[];
        entities1.push({
            id:req.data.id,
            vob_suplier:req.data.vob_suplier,
            vob_yoy:req.data.vob_yoy
        });
        req.data.vob_yoy_scr2 = req.data.vob_yoy;
        var vob_yoydata =  req.data.vob_yoy;
        delete req.data.vob_yoy;
         let ind44 =  await INSERT.into(VOB_Screen2).entries(req.data);
         var val33 =  await SELECT.from(VOB_Screen2).where({id:req.data.id}); 
        //  var val332 =  await SELECT `*`.from(VOB_Screen2.drafts); 
        req.data.vob_yoy = vob_yoydata;
        delete req.data.vob_yoy_scr2;
    });
    this.on('vanddetails', async (req) => {
        debugger
         var reqdata = JSON.parse(req.data.status);
        
        if (reqdata.status == 'screen2get') {
            let partdetails = await SELECT.from(YOY_Screen2);
            let venordss = await SELECT.from(YOY_Screen2).where({vob_id:reqdata.id});
            // let supp = await SELECT.from(potential_suplier_scr1).where({id:reqdata.id});
            // let venordssString = JSON.stringify(venordss);
            // let suppString = JSON.stringify(supp);

            // // Concatenate both strings
            // let combinedString = venordssString + '\n' + suppString;

            // Return the combined string
            return venordss;
        }
        if (req.data.status == 'screen2get1') {
            let partdetails = await SELECT.from(YOY_Screen2);
            // let venordss = await SELECT.from(YOY_Screen2).where({vob_id:reqdata.id});
            let supp = await SELECT.from(potential_suplier_scr1).where({id:reqdata.id});
            // let venordssString = JSON.stringify(venordss);
            // let suppString = JSON.stringify(supp);

            // // Concatenate both strings
            // let combinedString = venordssString + '\n' + suppString;

            // Return the combined string
            return supp;
        }
          

            // var data1
      

    })
})