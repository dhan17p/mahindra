namespace db;

entity VOB {
    key id                        : UUID;
        part_system               : String;
        project_code_description  : String;
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
