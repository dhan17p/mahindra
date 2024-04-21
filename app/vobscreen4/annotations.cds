using MyService as service from '../../srv/service';

annotate service.VOB_Screen4 with @(
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
annotate service.VOB_Screen4 with @(
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
                Label : 'Project Code & Description',
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
                Value : vob_suplier4.suplier,
                Label : 'Potentail Suppliers',
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
    ]
);
annotate service.VOB_Screen4 with @(
    UI.HeaderInfo : {
        TypeName : '',
        TypeNamePlural : '',
    }
);
