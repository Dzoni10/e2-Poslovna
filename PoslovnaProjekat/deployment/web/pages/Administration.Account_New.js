import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { CheckBox } from "mendix/widgets/web/CheckBox";
import * as ComboboxWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $Combobox, $CheckBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Combobox, CheckBox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
<<<<<<< HEAD
    <$Div key="p7.Administration.Account_New.layoutGrid1"
        $widgetId="p7.Administration.Account_New.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p7.Administration.Account_New.layoutGrid1$row0"
                $widgetId="p7.Administration.Account_New.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p7.Administration.Account_New.layoutGrid1$row0$column0"
                        $widgetId="p7.Administration.Account_New.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p7.Administration.Account_New.dataView2"
                                $widgetId="p7.Administration.Account_New.dataView2"
=======
    <$Div key="p.Administration.Account_New.layoutGrid1"
        $widgetId="p.Administration.Account_New.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.Administration.Account_New.layoutGrid1$row0"
                $widgetId="p.Administration.Account_New.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.Administration.Account_New.layoutGrid1$row0$column0"
                        $widgetId="p.Administration.Account_New.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.Administration.Account_New.dataView2"
                                $widgetId="p.Administration.Account_New.dataView2"
>>>>>>> feat/sales-domain
                                class={"mx-name-dataView2 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
<<<<<<< HEAD
                                    "dataSourceId": "p7.15",
=======
                                    "dataSourceId": "p.15",
>>>>>>> feat/sales-domain
                                    "scope": "$AccountPasswordData",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
<<<<<<< HEAD
                                    <$DataView key="p7.Administration.Account_New.dataView1"
                                        $widgetId="p7.Administration.Account_New.dataView1"
=======
                                    <$DataView key="p.Administration.Account_New.dataView1"
                                        $widgetId="p.Administration.Account_New.dataView1"
>>>>>>> feat/sales-domain
                                        class={"mx-name-dataView1 form-horizontal"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
<<<<<<< HEAD
                                            "dataSourceId": "p7.18",
=======
                                            "dataSourceId": "p.18",
>>>>>>> feat/sales-domain
                                            "scope": "$AccountPasswordData",
                                            "editable": true,
                                            "path": "Administration.AccountPasswordData_Account/Administration.Account",
                                            "operationId": "4KoNcjBuB1C721lfwrE0zQ"
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
<<<<<<< HEAD
                                            <$FormGroup key="p7.Administration.Account_New.textBox6$formGroup"
                                                $widgetId="p7.Administration.Account_New.textBox6$formGroup"
                                                class={"mx-name-textBox6 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p7.Administration.Account_New.textBox6"
                                                        $widgetId="p7.Administration.Account_New.textBox6"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p7.Administration.Account_New.dataView1",
=======
                                            <$FormGroup key="p.Administration.Account_New.textBox6$formGroup"
                                                $widgetId="p.Administration.Account_New.textBox6$formGroup"
                                                class={"mx-name-textBox6 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.Administration.Account_New.textBox6"
                                                        $widgetId="p.Administration.Account_New.textBox6"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p.Administration.Account_New.dataView1",
>>>>>>> feat/sales-domain
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "FullName",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={false}
                                                        placeholder={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        mask={""}
                                                        readOnlyStyle={"text"}
                                                        maxLength={200}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        onEnterKeyPress={undefined}
                                                        ariaLabel={undefined}
                                                        autocomplete={"on"}
                                                        submitWhileEditing={false}
                                                        submitDelay={300}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                            "widgetId": "p7.Administration.Account_New.textBox6"
=======
                                                            "widgetId": "p.Administration.Account_New.textBox6"
>>>>>>> feat/sales-domain
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.textBox6"
=======
                                                    "widgetId": "p.Administration.Account_New.textBox6"
>>>>>>> feat/sales-domain
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
<<<<<<< HEAD
                                                    "inputWidgetId": "p7.Administration.Account_New.textBox6"
                                                })} />,
                                            <$FormGroup key="p7.Administration.Account_New.textBox9$formGroup"
                                                $widgetId="p7.Administration.Account_New.textBox9$formGroup"
                                                class={"mx-name-textBox9 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p7.Administration.Account_New.textBox9"
                                                        $widgetId="p7.Administration.Account_New.textBox9"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p7.Administration.Account_New.dataView1",
=======
                                                    "inputWidgetId": "p.Administration.Account_New.textBox6"
                                                })} />,
                                            <$FormGroup key="p.Administration.Account_New.textBox9$formGroup"
                                                $widgetId="p.Administration.Account_New.textBox9$formGroup"
                                                class={"mx-name-textBox9 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.Administration.Account_New.textBox9"
                                                        $widgetId="p.Administration.Account_New.textBox9"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p.Administration.Account_New.dataView1",
>>>>>>> feat/sales-domain
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "Name",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={false}
                                                        placeholder={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        mask={""}
                                                        readOnlyStyle={"text"}
                                                        maxLength={100}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        onEnterKeyPress={undefined}
                                                        ariaLabel={undefined}
                                                        autocomplete={"on"}
                                                        submitWhileEditing={false}
                                                        submitDelay={300}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                            "widgetId": "p7.Administration.Account_New.textBox9"
=======
                                                            "widgetId": "p.Administration.Account_New.textBox9"
>>>>>>> feat/sales-domain
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.textBox9"
=======
                                                    "widgetId": "p.Administration.Account_New.textBox9"
>>>>>>> feat/sales-domain
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
<<<<<<< HEAD
                                                    "inputWidgetId": "p7.Administration.Account_New.textBox9"
                                                })} />,
                                            <$FormGroup key="p7.Administration.Account_New.comboBox1$formGroup"
                                                $widgetId="p7.Administration.Account_New.comboBox1$formGroup"
                                                class={"mx-name-comboBox1"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p7.Administration.Account_New.comboBox1"
                                                        $widgetId="p7.Administration.Account_New.comboBox1"
=======
                                                    "inputWidgetId": "p.Administration.Account_New.textBox9"
                                                })} />,
                                            <$FormGroup key="p.Administration.Account_New.comboBox1$formGroup"
                                                $widgetId="p.Administration.Account_New.comboBox1$formGroup"
                                                class={"mx-name-comboBox1"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.Administration.Account_New.comboBox1"
                                                        $widgetId="p.Administration.Account_New.comboBox1"
>>>>>>> feat/sales-domain
                                                        optionsSourceType={"association"}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "ReferenceSet",
                                                            "entity": "Administration.Account",
                                                            "path": "",
                                                            "attribute": "System.UserRoles",
                                                            "endpointEntity": "System.UserRole",
<<<<<<< HEAD
                                                            "selectableObjectsId": "p7.0",
                                                            "scope": "p7.Administration.Account_New.dataView1",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p7.0",
                                                            "entity": "System.UserRole",
                                                            "scope": "p7.Administration.Account_New.dataView1",
=======
                                                            "selectableObjectsId": "p.0",
                                                            "scope": "p.Administration.Account_New.dataView1",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.0",
                                                            "entity": "System.UserRole",
                                                            "scope": "p.Administration.Account_New.dataView1",
>>>>>>> feat/sales-domain
                                                            "operationId": "dNluH/YEWVKIls4O1cqTiw",
                                                            "sort": [
                                                                [
                                                                    "Name",
                                                                    "asc"
                                                                ]
                                                            ],
                                                            "constraints": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" } ] } } }
                                                        })}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "System.UserRole",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p7.0",
=======
                                                            "dataSourceId": "p.0",
>>>>>>> feat/sales-domain
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={false}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        source={"context"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceStaticDataSource={[]}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        readOnlyStyle={"text"}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                            "widgetId": "p7.Administration.Account_New.comboBox1"
=======
                                                            "widgetId": "p.Administration.Account_New.comboBox1"
>>>>>>> feat/sales-domain
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "User role(s)" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.comboBox1"
=======
                                                    "widgetId": "p.Administration.Account_New.comboBox1"
>>>>>>> feat/sales-domain
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
<<<<<<< HEAD
                                                    "inputWidgetId": "p7.Administration.Account_New.comboBox1"
                                                })} />,
                                            <$FormGroup key="p7.Administration.Account_New.checkBox1$formGroup"
                                                $widgetId="p7.Administration.Account_New.checkBox1$formGroup"
                                                class={"mx-name-checkBox1 mx-checkbox"}
                                                style={undefined}
                                                control={[
                                                    <$CheckBox key="p7.Administration.Account_New.checkBox1"
                                                        $widgetId="p7.Administration.Account_New.checkBox1"
                                                        value={AttributeProperty({
                                                            "scope": "p7.Administration.Account_New.dataView1",
=======
                                                    "inputWidgetId": "p.Administration.Account_New.comboBox1"
                                                })} />,
                                            <$FormGroup key="p.Administration.Account_New.checkBox1$formGroup"
                                                $widgetId="p.Administration.Account_New.checkBox1$formGroup"
                                                class={"mx-name-checkBox1 mx-checkbox"}
                                                style={undefined}
                                                control={[
                                                    <$CheckBox key="p.Administration.Account_New.checkBox1"
                                                        $widgetId="p.Administration.Account_New.checkBox1"
                                                        value={AttributeProperty({
                                                            "scope": "p.Administration.Account_New.dataView1",
>>>>>>> feat/sales-domain
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "Blocked",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null
                                                        })}
                                                        readOnlyStyle={"text"}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        caption={undefined}
                                                        ariaLabel={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                            "widgetId": "p7.Administration.Account_New.checkBox1"
=======
                                                            "widgetId": "p.Administration.Account_New.checkBox1"
>>>>>>> feat/sales-domain
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Blocked" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.checkBox1"
=======
                                                    "widgetId": "p.Administration.Account_New.checkBox1"
>>>>>>> feat/sales-domain
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
<<<<<<< HEAD
                                                    "inputWidgetId": "p7.Administration.Account_New.checkBox1"
                                                })} />,
                                            <$FormGroup key="p7.Administration.Account_New.checkBox2$formGroup"
                                                $widgetId="p7.Administration.Account_New.checkBox2$formGroup"
                                                class={"mx-name-checkBox2 mx-checkbox"}
                                                style={undefined}
                                                control={[
                                                    <$CheckBox key="p7.Administration.Account_New.checkBox2"
                                                        $widgetId="p7.Administration.Account_New.checkBox2"
                                                        value={AttributeProperty({
                                                            "scope": "p7.Administration.Account_New.dataView1",
=======
                                                    "inputWidgetId": "p.Administration.Account_New.checkBox1"
                                                })} />,
                                            <$FormGroup key="p.Administration.Account_New.checkBox2$formGroup"
                                                $widgetId="p.Administration.Account_New.checkBox2$formGroup"
                                                class={"mx-name-checkBox2 mx-checkbox"}
                                                style={undefined}
                                                control={[
                                                    <$CheckBox key="p.Administration.Account_New.checkBox2"
                                                        $widgetId="p.Administration.Account_New.checkBox2"
                                                        value={AttributeProperty({
                                                            "scope": "p.Administration.Account_New.dataView1",
>>>>>>> feat/sales-domain
                                                            "path": "",
                                                            "entity": "Administration.Account",
                                                            "attribute": "Active",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null
                                                        })}
                                                        readOnlyStyle={"text"}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        caption={undefined}
                                                        ariaLabel={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                            "widgetId": "p7.Administration.Account_New.checkBox2"
=======
                                                            "widgetId": "p.Administration.Account_New.checkBox2"
>>>>>>> feat/sales-domain
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.checkBox2"
=======
                                                    "widgetId": "p.Administration.Account_New.checkBox2"
>>>>>>> feat/sales-domain
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
<<<<<<< HEAD
                                                    "inputWidgetId": "p7.Administration.Account_New.checkBox2"
                                                })} />,
                                            <$FormGroup key="p7.Administration.Account_New.comboBox3$formGroup"
                                                $widgetId="p7.Administration.Account_New.comboBox3$formGroup"
                                                class={"mx-name-comboBox3"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p7.Administration.Account_New.comboBox3"
                                                        $widgetId="p7.Administration.Account_New.comboBox3"
=======
                                                    "inputWidgetId": "p.Administration.Account_New.checkBox2"
                                                })} />,
                                            <$FormGroup key="p.Administration.Account_New.comboBox3$formGroup"
                                                $widgetId="p.Administration.Account_New.comboBox3$formGroup"
                                                class={"mx-name-comboBox3"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.Administration.Account_New.comboBox3"
                                                        $widgetId="p.Administration.Account_New.comboBox3"
>>>>>>> feat/sales-domain
                                                        optionsSourceType={"association"}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "Administration.Account",
                                                            "path": "",
                                                            "attribute": "System.User_Language",
                                                            "endpointEntity": "System.Language",
<<<<<<< HEAD
                                                            "selectableObjectsId": "p7.1",
                                                            "scope": "p7.Administration.Account_New.dataView1",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p7.1",
                                                            "entity": "System.Language",
                                                            "scope": "p7.Administration.Account_New.dataView1",
=======
                                                            "selectableObjectsId": "p.1",
                                                            "scope": "p.Administration.Account_New.dataView1",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.1",
                                                            "entity": "System.Language",
                                                            "scope": "p.Administration.Account_New.dataView1",
>>>>>>> feat/sales-domain
                                                            "operationId": "g4viIQmKwFmY5um7A3rubg",
                                                            "sort": []
                                                        })}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "System.Language",
                                                            "attribute": "Description",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
<<<<<<< HEAD
                                                            "dataSourceId": "p7.1",
=======
                                                            "dataSourceId": "p.1",
>>>>>>> feat/sales-domain
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={false}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        source={"context"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceStaticDataSource={[]}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        readOnlyStyle={"text"}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                            "widgetId": "p7.Administration.Account_New.comboBox3"
=======
                                                            "widgetId": "p.Administration.Account_New.comboBox3"
>>>>>>> feat/sales-domain
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.comboBox3"
=======
                                                    "widgetId": "p.Administration.Account_New.comboBox3"
>>>>>>> feat/sales-domain
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
<<<<<<< HEAD
                                                    "inputWidgetId": "p7.Administration.Account_New.comboBox3"
                                                })} />,
                                            <$FormGroup key="p7.Administration.Account_New.comboBox2$formGroup"
                                                $widgetId="p7.Administration.Account_New.comboBox2$formGroup"
                                                class={"mx-name-comboBox2"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p7.Administration.Account_New.comboBox2"
                                                        $widgetId="p7.Administration.Account_New.comboBox2"
=======
                                                    "inputWidgetId": "p.Administration.Account_New.comboBox3"
                                                })} />,
                                            <$FormGroup key="p.Administration.Account_New.comboBox2$formGroup"
                                                $widgetId="p.Administration.Account_New.comboBox2$formGroup"
                                                class={"mx-name-comboBox2"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.Administration.Account_New.comboBox2"
                                                        $widgetId="p.Administration.Account_New.comboBox2"
>>>>>>> feat/sales-domain
                                                        optionsSourceType={"association"}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "Administration.Account",
                                                            "path": "",
                                                            "attribute": "System.User_TimeZone",
                                                            "endpointEntity": "System.TimeZone",
<<<<<<< HEAD
                                                            "selectableObjectsId": "p7.2",
                                                            "scope": "p7.Administration.Account_New.dataView1",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p7.2",
                                                            "entity": "System.TimeZone",
                                                            "scope": "p7.Administration.Account_New.dataView1",
=======
                                                            "selectableObjectsId": "p.2",
                                                            "scope": "p.Administration.Account_New.dataView1",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.2",
                                                            "entity": "System.TimeZone",
                                                            "scope": "p.Administration.Account_New.dataView1",
>>>>>>> feat/sales-domain
                                                            "operationId": "hczuSyZaGlSyB2k43u71rg",
                                                            "sort": [
                                                                [
                                                                    "RawOffset",
                                                                    "asc"
                                                                ],
                                                                [
                                                                    "Description",
                                                                    "asc"
                                                                ]
                                                            ]
                                                        })}
                                                        optionsSourceAssociationCaptionType={"expression"}
                                                        optionsSourceAssociationCaptionExpression={ListExpressionProperty({
<<<<<<< HEAD
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "p7.Administration.Account_New.comboBox2", "source": "object" } } },
                                                            "dataSourceId": "p7.2"
=======
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Description" }, "args": { "currentObject": { "widget": "p.Administration.Account_New.comboBox2", "source": "object" } } },
                                                            "dataSourceId": "p.2"
>>>>>>> feat/sales-domain
                                                        })}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={false}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        source={"context"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceStaticDataSource={[]}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        readOnlyStyle={"text"}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                            "widgetId": "p7.Administration.Account_New.comboBox2"
=======
                                                            "widgetId": "p.Administration.Account_New.comboBox2"
>>>>>>> feat/sales-domain
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Time zone" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.comboBox2"
=======
                                                    "widgetId": "p.Administration.Account_New.comboBox2"
>>>>>>> feat/sales-domain
                                                })}
                                                width={3}
                                                orientation={"horizontal"}
                                                hasError={ValidationProperty({
<<<<<<< HEAD
                                                    "inputWidgetId": "p7.Administration.Account_New.comboBox2"
=======
                                                    "inputWidgetId": "p.Administration.Account_New.comboBox2"
>>>>>>> feat/sales-domain
                                                })} />
                                        ]}
                                        hideFooter={true}
                                        footer={undefined} />,
<<<<<<< HEAD
                                    <$FormGroup key="p7.Administration.Account_New.textBox5$formGroup"
                                        $widgetId="p7.Administration.Account_New.textBox5$formGroup"
                                        class={"mx-name-textBox5 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p7.Administration.Account_New.textBox5"
                                                $widgetId="p7.Administration.Account_New.textBox5"
                                                inputValue={AttributeProperty({
                                                    "scope": "p7.Administration.Account_New.dataView2",
=======
                                    <$FormGroup key="p.Administration.Account_New.textBox5$formGroup"
                                        $widgetId="p.Administration.Account_New.textBox5$formGroup"
                                        class={"mx-name-textBox5 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.Administration.Account_New.textBox5"
                                                $widgetId="p.Administration.Account_New.textBox5"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Administration.Account_New.dataView2",
>>>>>>> feat/sales-domain
                                                    "path": "",
                                                    "entity": "Administration.AccountPasswordData",
                                                    "attribute": "NewPassword",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "The password cannot be empty." ]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [ { "type": "function", "name": "length", "parameters": [ { "type": "function", "name": "toString", "parameters": [ { "type": "variable", "variable": "value" } ] } ] }, { "type": "literalNumeric", "value": "0" } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={true}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.textBox5"
=======
                                                    "widgetId": "p.Administration.Account_New.textBox5"
>>>>>>> feat/sales-domain
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                            "widgetId": "p7.Administration.Account_New.textBox5"
=======
                                            "widgetId": "p.Administration.Account_New.textBox5"
>>>>>>> feat/sales-domain
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
<<<<<<< HEAD
                                            "inputWidgetId": "p7.Administration.Account_New.textBox5"
                                        })} />,
                                    <$FormGroup key="p7.Administration.Account_New.textBox7$formGroup"
                                        $widgetId="p7.Administration.Account_New.textBox7$formGroup"
                                        class={"mx-name-textBox7 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p7.Administration.Account_New.textBox7"
                                                $widgetId="p7.Administration.Account_New.textBox7"
                                                inputValue={AttributeProperty({
                                                    "scope": "p7.Administration.Account_New.dataView2",
=======
                                            "inputWidgetId": "p.Administration.Account_New.textBox5"
                                        })} />,
                                    <$FormGroup key="p.Administration.Account_New.textBox7$formGroup"
                                        $widgetId="p.Administration.Account_New.textBox7$formGroup"
                                        class={"mx-name-textBox7 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.Administration.Account_New.textBox7"
                                                $widgetId="p.Administration.Account_New.textBox7"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Administration.Account_New.dataView2",
>>>>>>> feat/sales-domain
                                                    "path": "",
                                                    "entity": "Administration.AccountPasswordData",
                                                    "attribute": "ConfirmPassword",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "The password cannot be empty." ]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [ { "type": "function", "name": "length", "parameters": [ { "type": "function", "name": "toString", "parameters": [ { "type": "variable", "variable": "value" } ] } ] }, { "type": "literalNumeric", "value": "0" } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={true}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"text"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                                    "widgetId": "p7.Administration.Account_New.textBox7"
=======
                                                    "widgetId": "p.Administration.Account_New.textBox7"
>>>>>>> feat/sales-domain
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
<<<<<<< HEAD
                                            "widgetId": "p7.Administration.Account_New.textBox7"
=======
                                            "widgetId": "p.Administration.Account_New.textBox7"
>>>>>>> feat/sales-domain
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
<<<<<<< HEAD
                                            "inputWidgetId": "p7.Administration.Account_New.textBox7"
=======
                                            "inputWidgetId": "p.Administration.Account_New.textBox7"
>>>>>>> feat/sales-domain
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
<<<<<<< HEAD
                                    <$ConditionalVisibilityWrapper key="p7.Administration.Account_New.microflowButton1$visibility"
                                        $widgetId="p7.Administration.Account_New.microflowButton1$visibility"
=======
                                    <$ConditionalVisibilityWrapper key="p.Administration.Account_New.microflowButton1$visibility"
                                        $widgetId="p.Administration.Account_New.microflowButton1$visibility"
>>>>>>> feat/sales-domain
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
<<<<<<< HEAD
                                            <$ActionButton key="p7.Administration.Account_New.microflowButton1"
                                                $widgetId="p7.Administration.Account_New.microflowButton1"
                                                buttonId={"p7.Administration.Account_New.microflowButton1"}
=======
                                            <$ActionButton key="p.Administration.Account_New.microflowButton1"
                                                $widgetId="p.Administration.Account_New.microflowButton1"
                                                buttonId={"p.Administration.Account_New.microflowButton1"}
>>>>>>> feat/sales-domain
                                                class={"mx-name-microflowButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-success"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "MAMnD1G8o1Kg6/Om5E05Bg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
<<<<<<< HEAD
                                    <$ActionButton key="p7.Administration.Account_New.cancelButton1"
                                        $widgetId="p7.Administration.Account_New.cancelButton1"
                                        buttonId={"p7.Administration.Account_New.cancelButton1"}
=======
                                    <$ActionButton key="p.Administration.Account_New.cancelButton1"
                                        $widgetId="p.Administration.Account_New.cancelButton1"
                                        buttonId={"p.Administration.Account_New.cancelButton1"}
>>>>>>> feat/sales-domain
                                        class={"mx-name-cancelButton1"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "a9ORMbxjK1OcZk02uWbrgg", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "New Account"
]);

export const classes = "";

export const autofocus = "desktopOnly";
export const cancelChangesOperationId = "f6It075pTV2QQRaHHSzXqg";
<<<<<<< HEAD
export const closeButton = "p7.Administration.Account_New.cancelButton1";
=======
export const closeButton = "p.Administration.Account_New.cancelButton1";
>>>>>>> feat/sales-domain
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
