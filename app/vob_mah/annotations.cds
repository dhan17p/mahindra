using MyService as service from '../../srv/service';

annotate service.VOB with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Part System',
            Value : part_system,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Project Code & Description',
            Value : project_code_description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SOP',
            Value : sop,
        },
        {
            $Type : 'UI.DataField',
            Value : sector,
            Label : 'Sector',
        },
    ]
);
annotate service.VOB with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Part System',
                Value : part_system,
            },
            {
                $Type : 'UI.DataField',
                Value : project_code,
                Label : 'Project Code',
            },
            {
                $Type : 'UI.DataField',
                Value : project_description,
                Label : 'Project Description',
            },
            {
                $Type : 'UI.DataField',
                Label : 'SOP',
                Value : sop,
            },
            {
                $Type : 'UI.DataField',
                Value : sector,
                Label : 'Sector',
            },
            {
                $Type : 'UI.DataField',
                Label : 'Potential Suppliers',
                Value : potential_suppliers,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Supplier assessment score',
                Value : supplier_assessment_score,
            },
            {
                $Type : 'UI.DataField',
                Label : 'FORUM',
                Value : forum,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Presented On & By',
                Value : presented_on_by,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'YOY Annual Projections',
            ID : 'YOYAnnualProjections',
            Target : 'vob_yoy/@UI.LineItem#YOYAnnualProjections',
        },
    ]
);
annotate service.YOY with @(
    UI.LineItem #YOYAnnualProjections : [
        {
            $Type : 'UI.DataField',
            Value : MGSP_Part_Nos,
            Label : 'MGSP Part Nos',
        },{
            $Type : 'UI.DataField',
            Value : proposed_vf_part_no,
            Label : 'Proposed VF Part No',
        },{
            $Type : 'UI.DataField',
            Value : application_model,
            Label : 'Application Model',
        },{
            $Type : 'UI.DataField',
            Value : f24,
            Label : 'F24',
        },{
            $Type : 'UI.DataField',
            Value : f25,
            Label : 'F25',
        },{
            $Type : 'UI.DataField',
            Value : f26,
            Label : 'F26',
        },]
);
annotate service.VOB with @(
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View',
    },
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : id,
            Label : 'id',
        },{
            $Type : 'UI.DataField',
            Value : forum,
            Label : 'forum',
        },],
    UI.SelectionPresentationVariant #tableView1 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View 1',
    }
);
annotate service.VOB with @(
    UI.SelectionPresentationVariant #tableView2 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View 2',
    }
);
annotate service.VOB2 with @(
    UI.LineItem #tableView : [
    ],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View VOB2',
    }
);
annotate service.VOB2 with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'form',
            ID : 'form',
            Target : '@UI.FieldGroup#form',
        },
    ],
    UI.FieldGroup #form : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : forum,
                Label : 'forum',
            },{
                $Type : 'UI.DataField',
                Value : id,
                Label : 'id',
            },],
    }
);
annotate service.VOB with @(
    UI.HeaderInfo : {
        Title : {
            $Type : 'UI.DataField',
            Value : project_code,
        },
        TypeName : '',
        TypeNamePlural : '',
        Description : {
            $Type : 'UI.DataField',
            Value : project_description,
        },
    }
);
annotate service.VOB with @(
    UI.FieldGroup #Comments : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Team_Recommendation_with_Rationale,
                Label : 'Team_Recommendation_with_Rationale',
            },{
                $Type : 'UI.DataField',
                Value : Decision_MOM_of_Forum,
                Label : 'Decision_MOM_of_Forum',
            },{
                $Type : 'UI.DataField',
                Value : Development_Supply_Agreement_Whether_Signed,
                Label : 'Development_Supply_Agreement_Whether_Signed',
            },{
                $Type : 'UI.DataField',
                Value : Tooling_Agreement_signed,
                Label : 'Tooling_Agreement_signed',
            },{
                $Type : 'UI.DataField',
                Value : Supplier_Code_of_Conduct,
                Label : 'Supplier_Code_of_Conduct',
            },],
    }
);
annotate service.VOB with {
    Team_Recommendation_with_Rationale @UI.MultiLineText : true
};
annotate service.VOB with {
    Decision_MOM_of_Forum @UI.MultiLineText : true
};
annotate service.VOB with {
    Development_Supply_Agreement_Whether_Signed @UI.MultiLineText : true
};
annotate service.VOB with {
    Tooling_Agreement_signed @UI.MultiLineText : true
};
annotate service.VOB with {
    Supplier_Code_of_Conduct @UI.MultiLineText : true
};
