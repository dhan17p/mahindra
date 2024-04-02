const cds = require('@sap/cds');
const { SELECT, INSERT, UPDATE, DELETE } = cds.ql
module.exports =cds.service.impl( async function () {
    let {
        VOB,
        Files,
        draft_attachments,
        uploadset,
        MediaFile,VOB_Screen2
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
    this.before('POST', 'VOB',  async req => {
        //check content-type
       var val33 =  await SELECT `*`.from(VOB_Screen2); 
        let sel_query = SELECT.from `VOB_Screen2`
        let sel2_query = SELECT.from('VOB_Screen2')
        let entities1=[];
        entities1.push({
            id:req.data.id,
            vob_yoy_scr2:[
                {
                id: 'd397e5d9-a0b9-4c9f-a550-93832173bc9c',
                vob_id:req.data.id,
                }
            ]
        })
        // var insert1 = await INSERT.into (VOB_Screen2) .columns (
        //     'id', 'part_system','project_description'
        //  ) .values (
        //     req.data.id, req.data.part_system, req.data.project_description
        //  )
         let ind44 =  await INSERT.into(VOB_Screen2).entries(entities1);
           var val33 =  await SELECT.from(VOB_Screen2).where({id:req.data.id}); 
        //  var val332 =  await SELECT `*`.from(VOB_Screen2.drafts); 
        // ons?ole.log('content-type: ', req.headers['content-type'])
    });

    this.on('createEntry', async (req) => {
        debugger
        var yoydata =req.data.status;
        
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
})