namespace db;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity VOB {
    key id                        : UUID;
        part_system               : String;
        project_code              : String;
        project_description       : String;
        sop                       : String;
        sector                    : String;
        potential_suppliers       : String;
        supplier_assessment_score : String;
        forum                     : String;
        presented_on_by           : String;
         Team_Recommendation_with_Rationale: String;
         Decision_MOM_of_Forum:String;
         Development_Supply_Agreement_Whether_Signed:String;
         Tooling_Agreement_signed:String;
         Supplier_Code_of_Conduct :String;
        vob_yoy                   : Composition of many YOY
                                        on vob_yoy.vob_id = id;
}


entity VOB2 {
    key id                        : UUID;
        part_system               : String;
        project_code_description  : String;
        sop                       : String;
        sector                    : String;
        potential_suppliers       : String;
        supplier_assessment_score : String;
        forum                     : String;
        presented_on_by           : String;

}

entity YOY {
    key id                  : UUID;
        vob_id              : UUID;
        MGSP_Part_Nos       : String;
        proposed_vf_part_no : String;
        application_model   : String;
        f24                 : String;
        f25                 : String;
        f26                 : String;
        total               : String;
        yoy_vov             : Association to VOB;
}

//screen 2
entity VOB_Screen2 {
    key id                        : UUID;
        part_system               : String;
        project_code              : String;
        project_description       : String;
        sop                       : String;
        sector                    : String;
        potential_suppliers       : String;
        supplier_assessment_score : String;
        forum                     : String;
        presented_on_by           : String;
        vob_yoy_scr2              : Composition of many YOY_Screen2
                                        on vob_yoy_scr2.vob_id = id;
}

entity YOY_Screen2 {
    key id                  : UUID;
        vob_id              : UUID;
        MGSP_Part_Nos       : String;
        proposed_vf_part_no : String;
        application_model   : String;
        f24                 : String;
        f25                 : String;
        f26                 : String;
        total               : String;
        yoy_vov_scr2        : Association to VOB_Screen2;
}

//screen 3
entity VOB_Screen3 {
    key id                        : UUID;
        part_system               : String;
        project_code              : String;
        project_description       : String;
        sop                       : String;
        sector                    : String;
        potential_suppliers       : String;
        supplier_assessment_score : String;
        forum                     : String;
        presented_on_by           : String;
        vob_yoy_scr3             : Composition of many YOY_Screen3
                                        on vob_yoy_scr3.vob_id = id;
}

entity YOY_Screen3 {
    key id                  : UUID;
        vob_id              : UUID;
        MGSP_Part_Nos       : String;
        proposed_vf_part_no : String;
        application_model   : String;
        f24                 : String;
        f25                 : String;
        f26                 : String;
        total               : String;
        yoy_vov_scr2        : Association to VOB_Screen3;
}

entity Files: cuid, managed{
    // key id1 : String;
    @Core.MediaType: mediaType
    content: LargeBinary;
    @Core.IsMediaType: true
    mediaType: String;
    fileName: String;
    // size: Integer;
    Folder : String;
    url: String;
}