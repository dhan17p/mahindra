using MyService as service from '../../srv/service';

annotate service.VOB_Screen4b with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'part_system',
            Value : part_system,
        },
        {
            $Type : 'UI.DataField',
            Label : 'project_code',
            Value : project_code,
        },
        {
            $Type : 'UI.DataField',
            Label : 'project_description',
            Value : project_description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'sop',
            Value : sop,
        },
        {
            $Type : 'UI.DataField',
            Label : 'sector',
            Value : sector,
        },
    ]
);
annotate service.VOB_Screen4b with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'part_system',
                Value : part_system,
            },
            {
                $Type : 'UI.DataField',
                Label : 'project_code',
                Value : project_code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'project_description',
                Value : project_description,
            },
            {
                $Type : 'UI.DataField',
                Label : 'sop',
                Value : sop,
            },
            {
                $Type : 'UI.DataField',
                Label : 'sector',
                Value : sector,
            },
            {
                $Type : 'UI.DataField',
                Label : 'potential_suppliers',
                Value : potential_suppliers,
            },
            {
                $Type : 'UI.DataField',
                Label : 'supplier_assessment_score',
                Value : supplier_assessment_score,
            },
            {
                $Type : 'UI.DataField',
                Label : 'forum',
                Value : forum,
            },
            {
                $Type : 'UI.DataField',
                Label : 'presented_on_by',
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
