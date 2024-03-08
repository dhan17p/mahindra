using MyService as service from '../../srv/service';

annotate service.VOB_Screen4b with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Part System',
            Value : part_system,
        },
        {
            $Type : 'UI.DataField',
            Label : 'project Code & Description',
            Value : project_code,
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
annotate service.VOB_Screen4b with @(
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
                Value : vob_suplier4b.suplier,
                Label : 'Potential Suplier',
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
                Label : 'Presented on & by',
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
annotate service.VOB_Screen4b with @(
    UI.HeaderInfo : {
        Title : {
            $Type : 'UI.DataField',
            Value : project_code,
        },
        TypeName : '',
        TypeNamePlural : '',
    }
);
