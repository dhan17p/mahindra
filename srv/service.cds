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
    function createEntry(status:String) returns String;
    function deleteEntry(keyid : String) returns String;
    
    function vanddetails(status : String) returns String;
    function commentfun(status : String) returns String;


    //Folder
    entity Folder as projection on db.Folder;
    entity Data as projection on db.Data;
    function data(id:String,Data:String) returns String;
    function getdata(id:String) returns String;
    function remove(id:String,fold:String) returns String;
    function check(id: String, fold: String) returns String;
    function delete1(id: String) returns String;

    function fold_data_attach(id:String) returns String;
}
