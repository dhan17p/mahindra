using MyService as service from '../../srv/service';

annotate service.VOB_Screen2 with @(
    UI.LineItem : [
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
    ]
);
annotate service.VOB_Screen2 with @(
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
);
annotate service.VOB_Screen2 with @(
    UI.HeaderInfo : {
        Title : {
            $Type : 'UI.DataField',
            Value : project_description,
        },
        TypeName : '',
        TypeNamePlural : '',
    }
);