namespace db;

entity VOB {
    key id                        : UUID;
        part_system               : String;
        project_code  : String;
        project_description:String;
        sop                       : String;
        sector                    : String;
        potential_suppliers       : String;
        supplier_assessment_score : String;
        forum                     : String;
        presented_on_by           : String;
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
        project_code_description  : String;
        sop                       : String;
        sector                    : String;
        potential_suppliers       : String;
        supplier_assessment_score : String;
        forum                     : String;
        presented_on_by           : String;
        vob_yoy_scr2                  : Composition of many YOY_Screen2
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
        yoy_vov_scr2            : Association to VOB_Screen2;
}

//screen 3


