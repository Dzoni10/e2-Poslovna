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
import * as ComboboxWidgetModule from "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/Djordje/Desktop/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $Combobox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Combobox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstModule.Radnik_NewEdit.layoutGrid1"
        $widgetId="p.MyFirstModule.Radnik_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstModule.Radnik_NewEdit.layoutGrid1$row0"
                $widgetId="p.MyFirstModule.Radnik_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.Radnik_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstModule.Radnik_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MyFirstModule.Radnik_NewEdit.dataView1"
                                $widgetId="p.MyFirstModule.Radnik_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.13",
                                    "scope": "$Radnik",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.MyFirstModule.Radnik_NewEdit.textBox1$formGroup"
                                        $widgetId="p.MyFirstModule.Radnik_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MyFirstModule.Radnik_NewEdit.textBox1"
                                                $widgetId="p.MyFirstModule.Radnik_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstModule.Radnik_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Radnik",
                                                    "attribute": "Ime",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "Ime je obavezno" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Unesite ime" }, "args": {} }
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
                                                    "widgetId": "p.MyFirstModule.Radnik_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Ime" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstModule.Radnik_NewEdit.textBox1"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstModule.Radnik_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p.MyFirstModule.Radnik_NewEdit.textBox2$formGroup"
                                        $widgetId="p.MyFirstModule.Radnik_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MyFirstModule.Radnik_NewEdit.textBox2"
                                                $widgetId="p.MyFirstModule.Radnik_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstModule.Radnik_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Radnik",
                                                    "attribute": "Prezime",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "Prezime je obavezno" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Unesite prezime" }, "args": {} }
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
                                                    "widgetId": "p.MyFirstModule.Radnik_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Prezime" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstModule.Radnik_NewEdit.textBox2"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstModule.Radnik_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p.MyFirstModule.Radnik_NewEdit.comboBox1$formGroup"
                                        $widgetId="p.MyFirstModule.Radnik_NewEdit.comboBox1$formGroup"
                                        class={"mx-name-comboBox1"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p.MyFirstModule.Radnik_NewEdit.comboBox1"
                                                $widgetId="p.MyFirstModule.Radnik_NewEdit.comboBox1"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceDatabaseDefaultValue={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "Reference",
                                                    "entity": "MyFirstModule.Radnik",
                                                    "path": "",
                                                    "attribute": "MyFirstModule.Radnik_Preduzece",
                                                    "endpointEntity": "MyFirstModule.Preduzece",
                                                    "selectableObjectsId": "p.0",
                                                    "scope": "p.MyFirstModule.Radnik_NewEdit.dataView1",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.0",
                                                    "entity": "MyFirstModule.Preduzece",
                                                    "scope": "p.MyFirstModule.Radnik_NewEdit.dataView1",
                                                    "operationId": "FhnRjzyWzF+cx4eluBjEpQ",
                                                    "sort": []
                                                })}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MyFirstModule.Preduzece",
                                                    "attribute": "nazivPreduzeca",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p.0",
                                                    "isList": false
                                                })}
                                                optionsSourceAssociationCaptionExpression={undefined}
                                                optionsSourceStaticDataSource={[]}
                                                emptyOptionText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Izaberite preduzece" }, "args": {} }
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
                                                    "widgetId": "p.MyFirstModule.Radnik_NewEdit.comboBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Preduzece" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstModule.Radnik_NewEdit.comboBox1"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstModule.Radnik_NewEdit.comboBox1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p.MyFirstModule.Radnik_NewEdit.actionButton1"
                                        $widgetId="p.MyFirstModule.Radnik_NewEdit.actionButton1"
                                        buttonId={"p.MyFirstModule.Radnik_NewEdit.actionButton1"}
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
                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.MyFirstModule.Radnik_NewEdit.dataView1", "source": "object" } }, "config": { "operationId": "C9dREC+C2lKMXSVoSAC5FA", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ActionButton key="p.MyFirstModule.Radnik_NewEdit.actionButton2"
                                        $widgetId="p.MyFirstModule.Radnik_NewEdit.actionButton2"
                                        buttonId={"p.MyFirstModule.Radnik_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "MfZueqiD2V6so1GA2GM6Rw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Novi Radnik"
]);

export const classes = "";

export const autofocus = "off";
export const cancelChangesOperationId = "cFby9phGmleTrMJeL3J3Rw";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
