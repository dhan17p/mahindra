using MyService as service from '../../srv/service';

annotate service.VOB with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'part_system',
            Value : part_system,
        },
        {
            $Type : 'UI.DataField',
            Label : 'project_code_description',
            Value : project_code_description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'sop',
            Value : sop,
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
    ]
);
annotate service.VOB with @(
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
                Label : 'project_code_description',
                Value : project_code_description,
            },
            {
                $Type : 'UI.DataField',
                Label : 'sop',
                Value : sop,
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
            Value : vob_id,
            Label : 'vob_id',
        },{
            $Type : 'UI.DataField',
            Value : total,
            Label : 'total',
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
