import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { SelectionProperty } from "mendix/SelectionProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import * as DatagridWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $Text, $Datagrid, $DatagridTextFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Text, Datagrid, DatagridTextFilter, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstModule.Preduzece_Overview.layoutGrid1"
        $widgetId="p.MyFirstModule.Preduzece_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstModule.Preduzece_Overview.layoutGrid1$row0"
                $widgetId="p.MyFirstModule.Preduzece_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.Preduzece_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstModule.Preduzece_Overview.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Text key="p.MyFirstModule.Preduzece_Overview.text1"
                                $widgetId="p.MyFirstModule.Preduzece_Overview.text1"
                                class={"mx-name-text1"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Preduzeca" }, "args": {} }
                                    })
                                ])}
                                renderMode={"h2"} />,
                            <$Datagrid key="p.MyFirstModule.Preduzece_Overview.dataGrid2_1"
                                $widgetId="p.MyFirstModule.Preduzece_Overview.dataGrid2_1"
                                advanced={false}
                                datasource={DatabaseObjectListProperty({
                                    "dataSourceId": "p.0",
                                    "entity": "MyFirstModule.Preduzece",
                                    "operationId": "bZRlOn0FLVGlD0wMOTTzlQ",
                                    "sort": []
                                })}
                                refreshInterval={0}
                                itemSelection={SelectionProperty({
                                    "selectionType": "Single",
                                    "dataSourceId": "p.0"
                                })}
                                itemSelectionMethod={"rowClick"}
                                itemSelectionMode={"clear"}
                                showSelectAllToggle={true}
                                loadingType={"spinner"}
                                columns={[
                                    {
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "MyFirstModule.Preduzece",
                                            "attribute": "nazivPreduzeca",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.0",
                                            "isList": false
                                        }),
                                        "content": undefined,
                                        "dynamicText": t([
                                            undefined
                                        ]),
                                        "exportValue": t([
                                            undefined
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "naziv preduzeca" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": [
                                            <$DatagridTextFilter key="p.MyFirstModule.Preduzece_Overview.textFilter2"
                                                $widgetId="p.MyFirstModule.Preduzece_Overview.textFilter2"
                                                advanced={false}
                                                defaultValue={undefined}
                                                defaultFilter={"contains"}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                adjustable={true}
                                                delay={500}
                                                onChange={undefined}
                                                screenReaderButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                screenReaderInputCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                    })
                                                ])}
                                                class={"mx-name-textFilter2"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ],
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "fetchOptionsLazy": true,
                                        "filterCaptionType": "expression",
                                        "sortable": true,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "yes",
                                        "allowEventPropagation": true,
                                        "width": "autoFill",
                                        "minWidth": "auto",
                                        "minWidthLimit": 100,
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false
                                    },
                                    {
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "MyFirstModule.Preduzece",
                                            "attribute": "PIB",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.0",
                                            "isList": false
                                        }),
                                        "content": undefined,
                                        "dynamicText": t([
                                            undefined
                                        ]),
                                        "exportValue": t([
                                            undefined
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "PIB" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": [
                                            <$DatagridTextFilter key="p.MyFirstModule.Preduzece_Overview.textFilter3"
                                                $widgetId="p.MyFirstModule.Preduzece_Overview.textFilter3"
                                                advanced={false}
                                                defaultValue={undefined}
                                                defaultFilter={"contains"}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                adjustable={true}
                                                delay={500}
                                                onChange={undefined}
                                                screenReaderButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                screenReaderInputCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                    })
                                                ])}
                                                class={"mx-name-textFilter3"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ],
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "fetchOptionsLazy": true,
                                        "filterCaptionType": "expression",
                                        "sortable": true,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "yes",
                                        "allowEventPropagation": true,
                                        "width": "autoFill",
                                        "minWidth": "auto",
                                        "minWidthLimit": 100,
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false
                                    },
                                    {
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "MyFirstModule.Preduzece",
                                            "attribute": "adresaPreduzeca",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.0",
                                            "isList": false
                                        }),
                                        "content": undefined,
                                        "dynamicText": t([
                                            undefined
                                        ]),
                                        "exportValue": t([
                                            undefined
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "adresa preduzeca" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": [
                                            <$DatagridTextFilter key="p.MyFirstModule.Preduzece_Overview.textFilter1"
                                                $widgetId="p.MyFirstModule.Preduzece_Overview.textFilter1"
                                                advanced={false}
                                                defaultValue={undefined}
                                                defaultFilter={"contains"}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                adjustable={true}
                                                delay={500}
                                                onChange={undefined}
                                                screenReaderButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                screenReaderInputCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                    })
                                                ])}
                                                class={"mx-name-textFilter1"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ],
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "fetchOptionsLazy": true,
                                        "filterCaptionType": "expression",
                                        "sortable": true,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "yes",
                                        "allowEventPropagation": true,
                                        "width": "autoFill",
                                        "minWidth": "auto",
                                        "minWidthLimit": 100,
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false
                                    },
                                    {
                                        "showContentAs": "customContent",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "MyFirstModule.Preduzece",
                                            "attribute": "nazivPreduzeca",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.0",
                                            "isList": false
                                        }),
                                        "content": TemplatedWidgetProperty({
                                            "dataSourceId": "p.0",
                                            "editable": false,
                                            "children": () => [
                                                <$ConditionalVisibilityWrapper key="p.MyFirstModule.Preduzece_Overview.actionButton2$visibility"
                                                    $widgetId="p.MyFirstModule.Preduzece_Overview.actionButton2$visibility"
                                                    visible={ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                    })}
                                                    contents={[
                                                        <$ActionButton key="p.MyFirstModule.Preduzece_Overview.actionButton2"
                                                            $widgetId="p.MyFirstModule.Preduzece_Overview.actionButton2"
                                                            buttonId={"p.MyFirstModule.Preduzece_Overview.actionButton2"}
                                                            class={"mx-name-actionButton2 btn-lg"}
                                                            style={undefined}
                                                            tabIndex={undefined}
                                                            renderType={"link"}
                                                            role={"button"}
                                                            buttonClass={"btn-primary"}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                })
                                                            ])}
                                                            tooltip={TextProperty({
                                                                "value": t([
                                                                    ""
                                                                ])
                                                            })}
                                                            icon={WebIconProperty({
                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                                                            })}
                                                            action={ActionProperty({
                                                                "action": { "type": "openPage", "argMap": { "param$Preduzece": { "widget": "p.MyFirstModule.Preduzece_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/Preduzece_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                "abortOnServerValidation": true
                                                            })} />
                                                    ]} />,
                                                <$ActionButton key="p.MyFirstModule.Preduzece_Overview.actionButton3"
                                                    $widgetId="p.MyFirstModule.Preduzece_Overview.actionButton3"
                                                    buttonId={"p.MyFirstModule.Preduzece_Overview.actionButton3"}
                                                    class={"mx-name-actionButton3 btn-lg"}
                                                    style={undefined}
                                                    tabIndex={undefined}
                                                    renderType={"link"}
                                                    role={"button"}
                                                    buttonClass={"btn-primary"}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                    ])}
                                                    tooltip={TextProperty({
                                                        "value": t([
                                                            ""
                                                        ])
                                                    })}
                                                    icon={WebIconProperty({
                                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                    })}
                                                    action={ActionProperty({
                                                        "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.MyFirstModule.Preduzece_Overview.dataGrid2_1", "source": "object" } }, "config": { "closePage": false, "operationId": "+Xhftu7g9VOvu6gBmuzqNw" }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": true
                                                    })} />
                                            ]
                                        }),
                                        "dynamicText": t([
                                            undefined
                                        ]),
                                        "exportValue": t([
                                            undefined
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": undefined,
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "fetchOptionsLazy": true,
                                        "filterCaptionType": "expression",
                                        "sortable": false,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "no",
                                        "allowEventPropagation": true,
                                        "width": "autoFit",
                                        "minWidth": "auto",
                                        "minWidthLimit": 100,
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false
                                    }
                                ]}
                                columnsFilterable={true}
                                pageSize={20}
                                pagination={"buttons"}
                                showPagingButtons={"always"}
                                showNumberOfRows={false}
                                pagingPosition={"bottom"}
                                loadMoreButtonCaption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                    })
                                ])}
                                showEmptyPlaceholder={"none"}
                                emptyPlaceholder={undefined}
                                rowClass={undefined}
                                onClickTrigger={"double"}
                                onClick={undefined}
                                onSelectionChange={undefined}
                                columnsSortable={true}
                                columnsResizable={true}
                                columnsDraggable={true}
                                columnsHidable={true}
                                configurationStorageType={"attribute"}
                                storeFiltersInPersonalization={true}
                                filterList={[]}
                                filtersPlaceholder={[
                                    <$ConditionalVisibilityWrapper key="p.MyFirstModule.Preduzece_Overview.actionButton1$visibility"
                                        $widgetId="p.MyFirstModule.Preduzece_Overview.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MyFirstModule.Preduzece_Overview.actionButton1"
                                                $widgetId="p.MyFirstModule.Preduzece_Overview.actionButton1"
                                                buttonId={"p.MyFirstModule.Preduzece_Overview.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-primary"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Novo Preduzece" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={WebIconProperty({
                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add" }
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Preduzece", "operationId": "k04VP6bsdlqpSOxBOVcnMg", "pageSettings": { "name": "MyFirstModule/Preduzece_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator", "User" ] }, "allowedRoles": [ "Administrator", "User" ], "objectParameter": "param$Preduzece" }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]}
                                filterSectionTitle={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                exportDialogLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                                    })
                                ])}
                                cancelExportLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                                    })
                                ])}
                                selectRowLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                                    })
                                ])}
                                selectAllRowsLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                    })
                                ])}
                                class={"mx-name-dataGrid2_1"}
                                style={undefined}
                                tabIndex={undefined} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Preduzece Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const autofocus = "off";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
