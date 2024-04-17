using MyService as service from '../../srv/service';

annotate service.VOB_Screen3 with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Part System',
            Value : part_system,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Project Description',
            Value : project_description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SOP',
            Value : sop,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Sector',
            Value : sector,
        },
    ]
);
annotate service.VOB_Screen3 with @(
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
                Label : 'Project Code',
                Value : project_code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Project Description',
                Value : project_description,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SOP',
                Value : sop,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Sector',
                Value : sector,
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
            Label : 'General Information',
            ID : 'GeneralInformation',
            Target : '@UI.FieldGroup#GeneralInformation',
        },]
);
annotate service.VOB_Screen3 with @(
    UI.FieldGroup #GeneralInformation : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : part_system,
                Label : 'Part System',
            },
            {
                $Type : 'UI.DataField',
                Value : project_description,
                Label : 'Project Code & Description',
            },
            {
                $Type : 'UI.DataField',
                Value : sop,
                Label : 'SOP',
            },
            {
                $Type : 'UI.DataField',
                Value : sector,
                Label : 'Sector',
            },
            {
                $Type : 'UI.DataField',
                Value : vob_suplier_scr3.suplier,
                Label : 'Potential Supplier',
            },
            {
                $Type : 'UI.DataField',
                Value : supplier_assessment_score,
                Label : 'Supplier Assessment Score',
            },
            {
                $Type : 'UI.DataField',
                Value : forum,
                Label : 'FORUM',
            },{
                $Type : 'UI.DataField',
                Value : presented_on_by,
                Label : 'Presented On & By',
            },],
    }
);
annotate service.VOB_Screen3 with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : '',
    }
);
