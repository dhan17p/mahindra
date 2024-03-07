using MyService as service from '../../srv/service';

annotate service.VOB_Screen3 with @(
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
annotate service.VOB_Screen3 with @(
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
                Value : forum,
                Label : 'forum',
            },{
                $Type : 'UI.DataField',
                Value : id,
                Label : 'id',
            },{
                $Type : 'UI.DataField',
                Value : project_code,
                Label : 'project_code',
            },{
                $Type : 'UI.DataField',
                Value : project_description,
                Label : 'project_description',
            },{
                $Type : 'UI.DataField',
                Value : sop,
                Label : 'sop',
            },{
                $Type : 'UI.DataField',
                Value : sector,
                Label : 'sector',
            },{
                $Type : 'UI.DataField',
                Value : potential_suppliers,
                Label : 'potential_suppliers',
            },{
                $Type : 'UI.DataField',
                Value : presented_on_by,
                Label : 'presented_on_by',
            },{
                $Type : 'UI.DataField',
                Value : part_system,
                Label : 'part_system',
            },],
    }
);
annotate service.VOB_Screen3 with @(
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
