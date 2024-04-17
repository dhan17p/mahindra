using {db} from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity VOB as projection on db.VOB;
     //   @odata.draft.enabled
    entity VOB2 as projection on db.VOB2;
    entity potential_suplier_scr1 as projection on db.potential_suplier_scr1;
    entity supplierdetails as projection on db.supplierdetails;
    entity comment as projection on db.comment;
    entity YOY as projection on db.YOY;
     //     @odata.draft.enabled
    entity VOB_Screen2 as projection on db.VOB_Screen2;
    entity YOY_Screen2 as projection on db.YOY_Screen2;



    // for 3rd screen
 
     //     @odata.draft.enabled
    entity VOB_Screen3 as projection on db.VOB_Screen3;
    entity YOY_Screen3 as projection on db.YOY_Screen3;



    // for 4th screen
     // @odata.draft.enabled
    entity VOB_Screen4 as projection on db.VOB_Screen4;
    entity YOY_Screen4 as projection on db.YOY_Screen4;

    entity Files as projection on db.Files;
    // for 4bth screen
     // @odata.draft.enabled
    entity VOB_Screen4b as projection on db.VOB_Screen4b;
    entity YOY_Screen4b as projection on db.YOY_Screen4b;

    entity Workflow_History as projection on db.Workflow_History;
    entity Master_workflow as projection on db.Master_workflow;

    


    function vanddetails(status : String) returns String;
    function commentfun(status : String) returns String;
}
