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
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $Combobox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Combobox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p1.MyFirstModule.Magacin_NewEdit.layoutGrid1"
        $widgetId="p1.MyFirstModule.Magacin_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p1.MyFirstModule.Magacin_NewEdit.layoutGrid1$row0"
                $widgetId="p1.MyFirstModule.Magacin_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p1.MyFirstModule.Magacin_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p1.MyFirstModule.Magacin_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p1.MyFirstModule.Magacin_NewEdit.dataView1"
                                $widgetId="p1.MyFirstModule.Magacin_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p1.13",
                                    "scope": "$Magacin",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p1.MyFirstModule.Magacin_NewEdit.textBox1$formGroup"
                                        $widgetId="p1.MyFirstModule.Magacin_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Magacin_NewEdit.textBox1"
                                                $widgetId="p1.MyFirstModule.Magacin_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Magacin_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Magacin",
                                                    "attribute": "nazivMagacina",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "Naziv je obavezan" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Unesite naziv magacina" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
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
                                                    "widgetId": "p1.MyFirstModule.Magacin_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Naziv magacina" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Magacin_NewEdit.textBox1"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Magacin_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Magacin_NewEdit.comboBox1$formGroup"
                                        $widgetId="p1.MyFirstModule.Magacin_NewEdit.comboBox1$formGroup"
                                        class={"mx-name-comboBox1"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p1.MyFirstModule.Magacin_NewEdit.comboBox1"
                                                $widgetId="p1.MyFirstModule.Magacin_NewEdit.comboBox1"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceDatabaseDefaultValue={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "Reference",
                                                    "entity": "MyFirstModule.Magacin",
                                                    "path": "",
                                                    "attribute": "MyFirstModule.Magacin_Radnik",
                                                    "endpointEntity": "MyFirstModule.Radnik",
                                                    "selectableObjectsId": "p1.0",
                                                    "scope": "p1.MyFirstModule.Magacin_NewEdit.dataView1",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p1.0",
                                                    "entity": "MyFirstModule.Radnik",
                                                    "scope": "p1.MyFirstModule.Magacin_NewEdit.dataView1",
                                                    "operationId": "XYjuAjOe5Fyv17wAW5wbfA",
                                                    "sort": []
                                                })}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MyFirstModule.Radnik",
                                                    "attribute": "Ime",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p1.0",
                                                    "isList": false
                                                })}
                                                optionsSourceAssociationCaptionExpression={undefined}
                                                optionsSourceStaticDataSource={[]}
                                                emptyOptionText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Izaberi radnika magacina" }, "args": {} }
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
                                                optionsSourceDatabaseCustomContentType={"no"}
                                                staticDataSourceCustomContentType={"no"}
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
                                                readOnlyStyle={"bordered"}
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
                                                lazyLoading={true}
                                                loadingType={"spinner"}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.Magacin_NewEdit.comboBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Radnik" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Magacin_NewEdit.comboBox1"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Magacin_NewEdit.comboBox1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p1.MyFirstModule.Magacin_NewEdit.actionButton1"
                                        $widgetId="p1.MyFirstModule.Magacin_NewEdit.actionButton1"
                                        buttonId={"p1.MyFirstModule.Magacin_NewEdit.actionButton1"}
                                        class={"mx-name-actionButton1"}
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
                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p1.MyFirstModule.Magacin_NewEdit.dataView1", "source": "object" } }, "config": { "operationId": "F8SdLJImqlOyd2cc1eL/yw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ActionButton key="p1.MyFirstModule.Magacin_NewEdit.actionButton2"
                                        $widgetId="p1.MyFirstModule.Magacin_NewEdit.actionButton2"
                                        buttonId={"p1.MyFirstModule.Magacin_NewEdit.actionButton2"}
                                        class={"mx-name-actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "veZT/CLw8liGuUIVqD//LA", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Novi magacin"
]);

export const classes = "";

export const cancelChangesOperationId = "5oiLTxL7Jluy2Qztdr3bTQ";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
