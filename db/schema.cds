namespace db;

using {
    cuid,
    managed
} from '@sap/cds/common';


entity VOB {
    key id                                          : UUID;
        part_system                                 : String;
        project_code                                : String;
        project_description                         : String;
        sop                                         : String;
        sector                                      : String;
        potential_suppliers                         : String;
        supplier_assessment_score                   : String;
        forum                                       : String;
        presented_on_by                             : String;
        Team_Recommendation_with_Rationale          : String;
        Decision_MOM_of_Forum                       : String;
        Development_Supply_Agreement_Whether_Signed : String;
        Tooling_Agreement_signed                    : String;
        Supplier_Code_of_Conduct                    : String;
        status                                      : String default 'n';
        vob_yoy                                     : Composition of many YOY
                                                          on vob_yoy.vob_id = id;
        vob_suplier                                 : Composition of many potential_suplier_scr1
                                                          on vob_suplier.id = id;
}

entity potential_suplier_scr1 {
    key id_main                                : UUID;
        id                                     : UUID;
        suplier                                : String;
        potentialsuplierscr_to_supplierdetails : Composition of many supplierdetails
                                                     on potentialsuplierscr_to_supplierdetails.id_supplier = id_main;
}

entity supplierdetails : managed {
    key supplierdetailsid                       : UUID;
        id_supplier                             : UUID;
        value_key                               : String;
        value                                   : String;
        supplierdetails_to_potentialsuplierscr1 : Association to many potential_suplier_scr4;
};

entity comment : managed {
    key id_com       : UUID;
        id           : UUID;
        comment      : String;
        comment_vob4 : Association to VOB_Screen4;
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
    key id                     : UUID;
        vob_id                 : UUID;
        MGSP_Part_Nos          : String;
        proposed_vf_part_no    : String;
        application_model      : String;
        f24                    : String;
        f25                    : String;
        f26                    : String;
        total                  : String;
        Existing_MGSP_PO_Price : String;
        target_price           : String;
        yoy_vov_scr2           : Association to VOB_Screen2;
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
        vob_yoy_scr3              : Composition of many YOY_Screen3
                                        on vob_yoy_scr3.vob_id = id;
        vob_suplier_scr3          : Composition of many potential_suplier_scr3
                                        on vob_suplier_scr3.id = id;
}

entity potential_suplier_scr3 {
    key id_main : UUID;
        id      : UUID;
        suplier : String;

}

entity YOY_Screen3 {
    key id                     : UUID;
        vob_id                 : UUID;
        MGSP_Part_Nos          : String;
        proposed_vf_part_no    : String;
        application_model      : String;
        f24                    : String;
        f25                    : String;
        f26                    : String;
        total                  : String;
        Existing_MGSP_PO_Price : String;
        target_price           : String;
        yoy_vov_scr2           : Association to VOB_Screen3;
}

entity Files : cuid, managed {
    // key id1 : String;
    vob_id           : UUID;

    @Core.MediaType  : mediaType
    content          : LargeBinary;

    @Core.IsMediaType: true
    mediaType        : String;
    fileName         : String;
    // size: Integer;
    Folder           : String;
    url              : String;
    Files_to_screen4 : Association to one VOB_Screen4;
}

//Screen 4


entity VOB_Screen4 {
    key id                                         : UUID;
        part_system                                : String;
        project_code                               : String;
        project_description                        : String;
        sop                                        : String;
        sector                                     : String;
        potential_suppliers                        : String;
        supplier_assessment_score                  : String;
        forum                                      : String;
        presented_on_by                            : String;
        vob_yoy_scr4                               : Composition of many YOY_Screen4
                                                         on vob_yoy_scr4.vob_id = id;
        vob_suplier4                               : Composition of many potential_suplier_scr4
                                                         on vob_suplier4.id = id;
        vob_comments                               : Composition of many comment
                                                         on vob_comments.id = id;
        vob_files                                  : Composition of many Files
                                                         on vob_files.vob_id = id;
        vob_to_Workflow_History : Composition of many Workflow_History
                                                         on vob_to_Workflow_History.vob_id = id;
    }

entity potential_suplier_scr4 {
    key id_main                                   : UUID;
        id                                        : UUID;
        suplier                                   : String;
        potential_suplier_scr4_to_supplierdetails : Composition of many supplierdetails
                                                        on potential_suplier_scr4_to_supplierdetails.id_supplier = id_main;
}

entity YOY_Screen4 {
    key id                     : UUID;
        vob_id                 : UUID;
        MGSP_Part_Nos          : String;
        proposed_vf_part_no    : String;
        application_model      : String;
        f24                    : String;
        f25                    : String;
        f26                    : String;
        total                  : String;
        Existing_MGSP_PO_Price : String;
        target_price           : String;
        state                  : String;
        yoy_vov_scr4           : Association to VOB_Screen4;
}
//Screen 4b


entity VOB_Screen4b {
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
        vob_yoy_scr4b             : Composition of many YOY_Screen4b
                                        on vob_yoy_scr4b.vob_id = id;
        vob_suplier4b             : Composition of many potential_suplier_scr4b
                                        on vob_suplier4b.id = id;
}

entity potential_suplier_scr4b {
    key id_main : UUID;
        id      : UUID;
        suplier : String;
}

entity YOY_Screen4b {
    key id                  : UUID;
        vob_id              : UUID;
        MGSP_Part_Nos       : String;
        proposed_vf_part_no : String;
        application_model   : String;
        f24                 : String;
        f25                 : String;
        f26                 : String;
        total               : String;
        yoy_vov_scr4b       : Association to VOB_Screen4b;
}
entity Master_workflow {
    key vob_id          : UUID;
    key employee_id     : String;
    key level           : String;
}

entity Workflow_History {
    key vob_id          : UUID;
    key employee_id     : String;
    key level           : String;
        title           : String;
        status          : String;
        employee_Name   : String;
        begin_Date_Time : String;
        end_Date_Time   : String;
        days_Taken      : String;
        approved_By     : String;
        workflowtovob   : Association to many VOB_Screen4;
}


//entity folder

entity Folder {
    key id : String;
    Folder_Name : String;
    P_TO_C : Composition of many Data on P_TO_C.id = Folder_Name;
}

entity Data {
    id : String;
    Data : String;
    C_TO_P : Association to one Folder on C_TO_P.Folder_Name = id;
}