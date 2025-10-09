import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAssociationProperty } from "mendix/ListAssociationProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import * as DatagridWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridDateFilterWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/datagriddatefilter/DatagridDateFilter.mjs";
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;   
import "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/datagriddatefilter/DatagridDateFilter.css";
import * as DatagridDropdownFilterWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/datagriddropdownfilter/DatagridDropdownFilter.mjs";
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import { TabContainer } from "mendix/widgets/web/TabContainer";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Container, $Div, $Text, $TabContainer, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, TabContainer, Datagrid, DatagridTextFilter, DatagridDropdownFilter, DatagridDateFilter, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
<<<<<<< HEAD
    <$Container key="p0.Administration.Account_Overview.container1"
        $widgetId="p0.Administration.Account_Overview.container1"
=======
    <$Container key="p.Administration.Account_Overview.container1"
        $widgetId="p.Administration.Account_Overview.container1"
>>>>>>> feat/sales-domain
        class={"mx-name-container1 pageheader pageheader-fullwidth"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
<<<<<<< HEAD
            <$Div key="p0.Administration.Account_Overview.layoutGrid1"
                $widgetId="p0.Administration.Account_Overview.layoutGrid1"
                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p0.Administration.Account_Overview.layoutGrid1$row0"
                        $widgetId="p0.Administration.Account_Overview.layoutGrid1$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p0.Administration.Account_Overview.layoutGrid1$row0$column0"
                                $widgetId="p0.Administration.Account_Overview.layoutGrid1$row0$column0"
                                class={"col-lg-12 col-md-12 col-12"}
                                style={undefined}
                                content={[
                                    <$Text key="p0.Administration.Account_Overview.label1"
                                        $widgetId="p0.Administration.Account_Overview.label1"
=======
            <$Div key="p.Administration.Account_Overview.layoutGrid1"
                $widgetId="p.Administration.Account_Overview.layoutGrid1"
                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p.Administration.Account_Overview.layoutGrid1$row0"
                        $widgetId="p.Administration.Account_Overview.layoutGrid1$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.Administration.Account_Overview.layoutGrid1$row0$column0"
                                $widgetId="p.Administration.Account_Overview.layoutGrid1$row0$column0"
                                class={"col-lg-12 col-md-12 col-12"}
                                style={undefined}
                                content={[
                                    <$Text key="p.Administration.Account_Overview.label1"
                                        $widgetId="p.Administration.Account_Overview.label1"
>>>>>>> feat/sales-domain
                                        class={"mx-name-label1 pageheader-title"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Account Overview" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h2"} />,
<<<<<<< HEAD
                                    <$Text key="p0.Administration.Account_Overview.label2"
                                        $widgetId="p0.Administration.Account_Overview.label2"
=======
                                    <$Text key="p.Administration.Account_Overview.label2"
                                        $widgetId="p.Administration.Account_Overview.label2"
>>>>>>> feat/sales-domain
                                        class={"mx-name-label2 pageheader-subtitle"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "These are the local users of your app. Please note that only these users should be managed in this app. MendixSSO users are provisioned by the MendixSSO module and should be managed from the App User Management screen (Developer Portal > General Settings > Manage App Users)." }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h4"} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />,
<<<<<<< HEAD
    <$Div key="p0.Administration.Account_Overview.layoutGrid4"
        $widgetId="p0.Administration.Account_Overview.layoutGrid4"
        class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p0.Administration.Account_Overview.layoutGrid4$row0"
                $widgetId="p0.Administration.Account_Overview.layoutGrid4$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p0.Administration.Account_Overview.layoutGrid4$row0$column0"
                        $widgetId="p0.Administration.Account_Overview.layoutGrid4$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$TabContainer key="p0.Administration.Account_Overview.tabControl"
                                $widgetId="p0.Administration.Account_Overview.tabControl"
                                class={"mx-name-tabControl tabsfullwidth"}
                                style={undefined}
                                tabIndex={undefined}
                                widgetId={"p0.Administration.Account_Overview.tabControl"}
=======
    <$Div key="p.Administration.Account_Overview.layoutGrid4"
        $widgetId="p.Administration.Account_Overview.layoutGrid4"
        class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.Administration.Account_Overview.layoutGrid4$row0"
                $widgetId="p.Administration.Account_Overview.layoutGrid4$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.Administration.Account_Overview.layoutGrid4$row0$column0"
                        $widgetId="p.Administration.Account_Overview.layoutGrid4$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$TabContainer key="p.Administration.Account_Overview.tabControl"
                                $widgetId="p.Administration.Account_Overview.tabControl"
                                class={"mx-name-tabControl tabsfullwidth"}
                                style={undefined}
                                tabIndex={undefined}
                                widgetId={"p.Administration.Account_Overview.tabControl"}
>>>>>>> feat/sales-domain
                                defaultTab={0}
                                onTabChange={undefined}
                                tabs={[
                                    {
                                        "name": "tabPage2",
                                        "caption": TextProperty({
                                            "value": t([
                                                "Local Users"
                                            ])
                                        }),
                                        "isDelayed": false,
                                        "refreshOnShow": false,
                                        "content": [
<<<<<<< HEAD
                                            <$Datagrid key="p0.Administration.Account_Overview.dataGrid21"
                                                $widgetId="p0.Administration.Account_Overview.dataGrid21"
                                                advanced={false}
                                                datasource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p0.14",
=======
                                            <$Datagrid key="p.Administration.Account_Overview.dataGrid21"
                                                $widgetId="p.Administration.Account_Overview.dataGrid21"
                                                advanced={false}
                                                datasource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.14",
>>>>>>> feat/sales-domain
                                                    "entity": "Administration.Account",
                                                    "operationId": "8z1qdSUNAl+HD4FIOPvSFQ",
                                                    "sort": [
                                                        [
                                                            "FullName",
                                                            "asc"
                                                        ]
                                                    ],
                                                    "constraints": { "type": "function", "name": "and", "parameters": [ { "type": "function", "name": "or", "parameters": [ { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" } ] } } } }, { "type": "function", "name": "not", "parameters": [ { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole2", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole2", "attributeType": "ObjectReference" }, "next": { "type": "attribute", "attribute": "id", "context": "System.UserRole2", "attributeType": "ObjectReference" } } ] } ] }, { "type": "function", "name": "!=", "parameters": [ { "type": "attribute", "attribute": "Name", "context": "Administration.Account", "attributeType": "String" }, { "type": "literal", "value": null } ] } ] }
                                                })}
                                                refreshInterval={0}
                                                itemSelectionMethod={"checkbox"}
                                                showSelectAllToggle={true}
                                                columns={[
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "FullName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p0.14",
=======
                                                            "dataSourceId": "p.14",
>>>>>>> feat/sales-domain
                                                            "isList": false
                                                        }),
                                                        "content": undefined,
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
<<<<<<< HEAD
                                                            <$DatagridTextFilter key="p0.Administration.Account_Overview.textFilter1"
                                                                $widgetId="p0.Administration.Account_Overview.textFilter1"
=======
                                                            <$DatagridTextFilter key="p.Administration.Account_Overview.textFilter1"
                                                                $widgetId="p.Administration.Account_Overview.textFilter1"
>>>>>>> feat/sales-domain
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
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                class={"mx-name-textFilter1"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "width": "autoFill",
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false,
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "fetchOptionsLazy": true,
                                                        "filterCaptionType": "expression",
                                                        "allowEventPropagation": true
                                                    },
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p0.14",
=======
                                                            "dataSourceId": "p.14",
>>>>>>> feat/sales-domain
                                                            "isList": false
                                                        }),
                                                        "content": undefined,
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Login" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
<<<<<<< HEAD
                                                            <$DatagridTextFilter key="p0.Administration.Account_Overview.textFilter2"
                                                                $widgetId="p0.Administration.Account_Overview.textFilter2"
=======
                                                            <$DatagridTextFilter key="p.Administration.Account_Overview.textFilter2"
                                                                $widgetId="p.Administration.Account_Overview.textFilter2"
>>>>>>> feat/sales-domain
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
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                class={"mx-name-textFilter2"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "width": "autoFill",
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false,
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "fetchOptionsLazy": true,
                                                        "filterCaptionType": "expression",
                                                        "allowEventPropagation": true
                                                    },
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "System.UserRoles/System.UserRole",
                                                            "entity": "System.UserRole",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": false,
                                                            "filterable": false,
<<<<<<< HEAD
                                                            "dataSourceId": "p0.14",
=======
                                                            "dataSourceId": "p.14",
>>>>>>> feat/sales-domain
                                                            "isList": true
                                                        }),
                                                        "content": undefined,
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Roles" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
<<<<<<< HEAD
                                                            <$DatagridDropdownFilter key="p0.Administration.Account_Overview.drop_downFilter1"
                                                                $widgetId="p0.Administration.Account_Overview.drop_downFilter1"
=======
                                                            <$DatagridDropdownFilter key="p.Administration.Account_Overview.drop_downFilter1"
                                                                $widgetId="p.Administration.Account_Overview.drop_downFilter1"
>>>>>>> feat/sales-domain
                                                                auto={true}
                                                                defaultValue={undefined}
                                                                filterOptions={[]}
                                                                emptyOptionCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                multiSelect={true}
                                                                onChange={undefined}
                                                                ariaLabel={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                filterable={false}
                                                                clearable={true}
                                                                selectedItemsStyle={"text"}
                                                                selectionMethod={"checkbox"}
                                                                class={"mx-name-drop_downFilter1"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "filterAssociation": ListAssociationProperty({
                                                            "type": "ReferenceSet",
                                                            "entity": undefined,
                                                            "path": "",
                                                            "attribute": "System.UserRoles",
                                                            "endpointEntity": "System.UserRole",
<<<<<<< HEAD
                                                            "selectableObjectsId": "p0.15",
                                                            "filterable": true,
                                                            "dataSourceId": "p0.14"
                                                        }),
                                                        "filterAssociationOptions": DatabaseObjectListProperty({
                                                            "dataSourceId": "p0.15",
=======
                                                            "selectableObjectsId": "p.15",
                                                            "filterable": true,
                                                            "dataSourceId": "p.14"
                                                        }),
                                                        "filterAssociationOptions": DatabaseObjectListProperty({
                                                            "dataSourceId": "p.15",
>>>>>>> feat/sales-domain
                                                            "entity": "System.UserRole",
                                                            "operationId": "kFKwe8NWy1a5u/M7ZgeK3w",
                                                            "sort": [
                                                                [
                                                                    "Name",
                                                                    "asc"
                                                                ]
                                                            ]
                                                        }),
                                                        "filterAssociationOptionLabel": ListExpressionProperty({
<<<<<<< HEAD
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p0.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                                            "dataSourceId": "p0.15"
=======
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                                            "dataSourceId": "p.15"
>>>>>>> feat/sales-domain
                                                        }),
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": false,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "width": "autoFill",
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false,
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "fetchOptionsLazy": true,
                                                        "filterCaptionType": "expression",
                                                        "allowEventPropagation": true
                                                    },
                                                    {
                                                        "showContentAs": "dynamicText",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "LastLogin",
                                                            "attributeType": "DateTime",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p0.14",
=======
                                                            "dataSourceId": "p.14",
>>>>>>> feat/sales-domain
                                                            "isList": false
                                                        }),
                                                        "content": undefined,
                                                        "dynamicText": t([
                                                            ListExpressionProperty({
<<<<<<< HEAD
                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "LastLogin" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "currentObject": { "widget": "p0.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                                                "dataSourceId": "p0.14"
=======
                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "LastLogin" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                                                "dataSourceId": "p.14"
>>>>>>> feat/sales-domain
                                                            })
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Last login" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
<<<<<<< HEAD
                                                            <$DatagridDateFilter key="p0.Administration.Account_Overview.dateFilter1"
                                                                $widgetId="p0.Administration.Account_Overview.dateFilter1"
=======
                                                            <$DatagridDateFilter key="p.Administration.Account_Overview.dateFilter1"
                                                                $widgetId="p.Administration.Account_Overview.dateFilter1"
>>>>>>> feat/sales-domain
                                                                advanced={false}
                                                                defaultValue={undefined}
                                                                defaultStartDate={undefined}
                                                                defaultEndDate={undefined}
                                                                defaultFilter={"equal"}
                                                                placeholder={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                adjustable={true}
                                                                onChange={undefined}
                                                                screenReaderButtonCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                screenReaderCalendarCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                screenReaderInputCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                class={"mx-name-dateFilter1"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "width": "autoFill",
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false,
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "fetchOptionsLazy": true,
                                                        "filterCaptionType": "expression",
                                                        "allowEventPropagation": true
                                                    },
                                                    {
                                                        "showContentAs": "customContent",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "Active",
                                                            "attributeType": "Boolean",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p0.14",
                                                            "isList": false
                                                        }),
                                                        "content": TemplatedWidgetProperty({
                                                            "dataSourceId": "p0.14",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$ConditionalVisibilityWrapper key="p0.Administration.Account_Overview.text2$visibility"
                                                                    $widgetId="p0.Administration.Account_Overview.text2$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Active" }, "args": { "currentObject": { "widget": "p0.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Text key="p0.Administration.Account_Overview.text2"
                                                                            $widgetId="p0.Administration.Account_Overview.text2"
=======
                                                            "dataSourceId": "p.14",
                                                            "isList": false
                                                        }),
                                                        "content": TemplatedWidgetProperty({
                                                            "dataSourceId": "p.14",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$ConditionalVisibilityWrapper key="p.Administration.Account_Overview.text2$visibility"
                                                                    $widgetId="p.Administration.Account_Overview.text2$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Active" }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Text key="p.Administration.Account_Overview.text2"
                                                                            $widgetId="p.Administration.Account_Overview.text2"
>>>>>>> feat/sales-domain
                                                                            class={"mx-name-text2 badge label-success"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                                                })
                                                                            ])}
                                                                            renderMode={"span"} />
                                                                    ]} />,
<<<<<<< HEAD
                                                                <$ConditionalVisibilityWrapper key="p0.Administration.Account_Overview.text3$visibility"
                                                                    $widgetId="p0.Administration.Account_Overview.text3$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Active" } ] }, "args": { "currentObject": { "widget": "p0.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Text key="p0.Administration.Account_Overview.text3"
                                                                            $widgetId="p0.Administration.Account_Overview.text3"
=======
                                                                <$ConditionalVisibilityWrapper key="p.Administration.Account_Overview.text3$visibility"
                                                                    $widgetId="p.Administration.Account_Overview.text3$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Active" } ] }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Text key="p.Administration.Account_Overview.text3"
                                                                            $widgetId="p.Administration.Account_Overview.text3"
>>>>>>> feat/sales-domain
                                                                            class={"mx-name-text3 badge label-secondary"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Inactive" }, "args": {} }
                                                                                })
                                                                            ])}
                                                                            renderMode={"span"} />
                                                                    ]} />
                                                            ]
                                                        }),
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
<<<<<<< HEAD
                                                            <$DatagridDropdownFilter key="p0.Administration.Account_Overview.drop_downFilter2"
                                                                $widgetId="p0.Administration.Account_Overview.drop_downFilter2"
=======
                                                            <$DatagridDropdownFilter key="p.Administration.Account_Overview.drop_downFilter2"
                                                                $widgetId="p.Administration.Account_Overview.drop_downFilter2"
>>>>>>> feat/sales-domain
                                                                auto={true}
                                                                defaultValue={undefined}
                                                                filterOptions={[]}
                                                                emptyOptionCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                multiSelect={false}
                                                                onChange={undefined}
                                                                ariaLabel={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                filterable={false}
                                                                clearable={true}
                                                                selectedItemsStyle={"text"}
                                                                selectionMethod={"checkbox"}
                                                                class={"mx-name-drop_downFilter2"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "width": "autoFill",
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false,
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "fetchOptionsLazy": true,
                                                        "filterCaptionType": "expression",
                                                        "allowEventPropagation": true
                                                    },
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "WebServiceUser",
                                                            "attributeType": "Boolean",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p0.14",
=======
                                                            "dataSourceId": "p.14",
>>>>>>> feat/sales-domain
                                                            "isList": false
                                                        }),
                                                        "content": undefined,
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Web service user" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
<<<<<<< HEAD
                                                            <$DatagridDropdownFilter key="p0.Administration.Account_Overview.drop_downFilter3"
                                                                $widgetId="p0.Administration.Account_Overview.drop_downFilter3"
=======
                                                            <$DatagridDropdownFilter key="p.Administration.Account_Overview.drop_downFilter3"
                                                                $widgetId="p.Administration.Account_Overview.drop_downFilter3"
>>>>>>> feat/sales-domain
                                                                auto={true}
                                                                defaultValue={undefined}
                                                                filterOptions={[]}
                                                                emptyOptionCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                multiSelect={false}
                                                                onChange={undefined}
                                                                ariaLabel={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                filterable={false}
                                                                clearable={true}
                                                                selectedItemsStyle={"text"}
                                                                selectionMethod={"checkbox"}
                                                                class={"mx-name-drop_downFilter3"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "width": "autoFill",
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false,
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "fetchOptionsLazy": true,
                                                        "filterCaptionType": "expression",
                                                        "allowEventPropagation": true
                                                    },
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "IsLocalUser",
                                                            "attributeType": "Boolean",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p0.14",
=======
                                                            "dataSourceId": "p.14",
>>>>>>> feat/sales-domain
                                                            "isList": false
                                                        }),
                                                        "content": undefined,
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Local" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
<<<<<<< HEAD
                                                            <$DatagridDropdownFilter key="p0.Administration.Account_Overview.drop_downFilter4"
                                                                $widgetId="p0.Administration.Account_Overview.drop_downFilter4"
=======
                                                            <$DatagridDropdownFilter key="p.Administration.Account_Overview.drop_downFilter4"
                                                                $widgetId="p.Administration.Account_Overview.drop_downFilter4"
>>>>>>> feat/sales-domain
                                                                auto={true}
                                                                defaultValue={undefined}
                                                                filterOptions={[]}
                                                                emptyOptionCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                multiSelect={false}
                                                                onChange={undefined}
                                                                ariaLabel={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                filterable={false}
                                                                clearable={true}
                                                                selectedItemsStyle={"text"}
                                                                selectionMethod={"checkbox"}
                                                                class={"mx-name-drop_downFilter4"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "width": "autoFill",
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false,
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "fetchOptionsLazy": true,
                                                        "filterCaptionType": "expression",
                                                        "allowEventPropagation": true
                                                    },
                                                    {
                                                        "showContentAs": "customContent",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "FullName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p0.14",
                                                            "isList": false
                                                        }),
                                                        "content": TemplatedWidgetProperty({
                                                            "dataSourceId": "p0.14",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$ConditionalVisibilityWrapper key="p0.Administration.Account_Overview.actionButton3$visibility"
                                                                    $widgetId="p0.Administration.Account_Overview.actionButton3$visibility"
=======
                                                            "dataSourceId": "p.14",
                                                            "isList": false
                                                        }),
                                                        "content": TemplatedWidgetProperty({
                                                            "dataSourceId": "p.14",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$ConditionalVisibilityWrapper key="p.Administration.Account_Overview.actionButton3$visibility"
                                                                    $widgetId="p.Administration.Account_Overview.actionButton3$visibility"
>>>>>>> feat/sales-domain
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                    })}
                                                                    contents={[
<<<<<<< HEAD
                                                                        <$ActionButton key="p0.Administration.Account_Overview.actionButton3"
                                                                            $widgetId="p0.Administration.Account_Overview.actionButton3"
                                                                            buttonId={"p0.Administration.Account_Overview.actionButton3"}
=======
                                                                        <$ActionButton key="p.Administration.Account_Overview.actionButton3"
                                                                            $widgetId="p.Administration.Account_Overview.actionButton3"
                                                                            buttonId={"p.Administration.Account_Overview.actionButton3"}
>>>>>>> feat/sales-domain
                                                                            class={"mx-name-actionButton3 btn-lg"}
                                                                            style={undefined}
                                                                            tabIndex={undefined}
                                                                            renderType={"link"}
                                                                            role={"button"}
                                                                            buttonClass={"btn-default"}
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
                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-pencil" }
                                                                            })}
                                                                            action={ActionProperty({
<<<<<<< HEAD
                                                                                "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p0.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                            })} />
                                                                    ]} />,
                                                                <$ActionButton key="p0.Administration.Account_Overview.actionButton4"
                                                                    $widgetId="p0.Administration.Account_Overview.actionButton4"
                                                                    buttonId={"p0.Administration.Account_Overview.actionButton4"}
=======
                                                                                "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                            })} />
                                                                    ]} />,
                                                                <$ActionButton key="p.Administration.Account_Overview.actionButton4"
                                                                    $widgetId="p.Administration.Account_Overview.actionButton4"
                                                                    buttonId={"p.Administration.Account_Overview.actionButton4"}
>>>>>>> feat/sales-domain
                                                                    class={"mx-name-actionButton4 btn-lg spacing-outer-left-medium"}
                                                                    style={undefined}
                                                                    tabIndex={undefined}
                                                                    renderType={"link"}
                                                                    role={"button"}
                                                                    buttonClass={"btn-default"}
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
                                                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                                                    })}
                                                                    action={ActionProperty({
<<<<<<< HEAD
                                                                        "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p0.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "SPfp4EsyJFC/G161OYF1Cw" }, "disabledDuringExecution": true },
=======
                                                                        "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "SPfp4EsyJFC/G161OYF1Cw" }, "disabledDuringExecution": true },
>>>>>>> feat/sales-domain
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]
                                                        }),
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": undefined,
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": false,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "no",
                                                        "width": "autoFit",
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false,
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "fetchOptionsLazy": true,
                                                        "filterCaptionType": "expression",
                                                        "allowEventPropagation": true
                                                    }
                                                ]}
                                                columnsFilterable={true}
                                                pageSize={20}
                                                pagination={"buttons"}
                                                pagingPosition={"bottom"}
                                                showPagingButtons={"always"}
                                                showEmptyPlaceholder={"none"}
                                                emptyPlaceholder={undefined}
                                                rowClass={undefined}
                                                onClick={undefined}
                                                onSelectionChange={undefined}
                                                columnsSortable={true}
                                                columnsResizable={true}
                                                columnsDraggable={true}
                                                columnsHidable={true}
                                                filterList={[]}
                                                filtersPlaceholder={[
<<<<<<< HEAD
                                                    <$ConditionalVisibilityWrapper key="p0.Administration.Account_Overview.actionButton1$visibility"
                                                        $widgetId="p0.Administration.Account_Overview.actionButton1$visibility"
=======
                                                    <$ConditionalVisibilityWrapper key="p.Administration.Account_Overview.actionButton1$visibility"
                                                        $widgetId="p.Administration.Account_Overview.actionButton1$visibility"
>>>>>>> feat/sales-domain
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                        })}
                                                        contents={[
<<<<<<< HEAD
                                                            <$ActionButton key="p0.Administration.Account_Overview.actionButton1"
                                                                $widgetId="p0.Administration.Account_Overview.actionButton1"
                                                                buttonId={"p0.Administration.Account_Overview.actionButton1"}
=======
                                                            <$ActionButton key="p.Administration.Account_Overview.actionButton1"
                                                                $widgetId="p.Administration.Account_Overview.actionButton1"
                                                                buttonId={"p.Administration.Account_Overview.actionButton1"}
>>>>>>> feat/sales-domain
                                                                class={"mx-name-actionButton1 spacing-outer-bottom"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-success"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "New local user" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Q1L9db4hbF6hAeX0y9Riyw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
<<<<<<< HEAD
                                                    <$ConditionalVisibilityWrapper key="p0.Administration.Account_Overview.actionButton2$visibility"
                                                        $widgetId="p0.Administration.Account_Overview.actionButton2$visibility"
=======
                                                    <$ConditionalVisibilityWrapper key="p.Administration.Account_Overview.actionButton2$visibility"
                                                        $widgetId="p.Administration.Account_Overview.actionButton2$visibility"
>>>>>>> feat/sales-domain
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                        })}
                                                        contents={[
<<<<<<< HEAD
                                                            <$ActionButton key="p0.Administration.Account_Overview.actionButton2"
                                                                $widgetId="p0.Administration.Account_Overview.actionButton2"
                                                                buttonId={"p0.Administration.Account_Overview.actionButton2"}
=======
                                                            <$ActionButton key="p.Administration.Account_Overview.actionButton2"
                                                                $widgetId="p.Administration.Account_Overview.actionButton2"
                                                                buttonId={"p.Administration.Account_Overview.actionButton2"}
>>>>>>> feat/sales-domain
                                                                class={"mx-name-actionButton2 spacing-outer-left spacing-outer-bottom"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "New web service user" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "1mx97TyhqVqicxHyTE7eQw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
                                                onClickTrigger={"single"}
                                                itemSelectionMode={"clear"}
                                                loadingType={"spinner"}
                                                showNumberOfRows={false}
                                                loadMoreButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                    })
                                                ])}
                                                configurationStorageType={"attribute"}
                                                storeFiltersInPersonalization={true}
                                                selectAllRowsLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                                    })
                                                ])}
                                                class={"mx-name-dataGrid21 table-hover"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ]
                                    }
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Accounts"
]);

export const classes = "layout-atlas layout-atlas-responsive-default page-tabs page-tabs-fullwidth";

export const autofocus = "desktopOnly";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
