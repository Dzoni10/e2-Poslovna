import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1"
        $widgetId="p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1$row0"
                $widgetId="p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p1.MyFirstModule.Preduzece_NewEdit.dataView1"
                                $widgetId="p1.MyFirstModule.Preduzece_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p1.12",
                                    "scope": "$Preduzece",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p1.MyFirstModule.Preduzece_NewEdit.textBox1$formGroup"
                                        $widgetId="p1.MyFirstModule.Preduzece_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Preduzece_NewEdit.textBox1"
                                                $widgetId="p1.MyFirstModule.Preduzece_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Preduzece_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Preduzece",
                                                    "attribute": "nazivPreduzeca",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "Naziv je obavezan" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Unesite naziv preduzeca" }, "args": {} }
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
                                                    "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Naziv preduzeca" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox1"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Preduzece_NewEdit.textBox2$formGroup"
                                        $widgetId="p1.MyFirstModule.Preduzece_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Preduzece_NewEdit.textBox2"
                                                $widgetId="p1.MyFirstModule.Preduzece_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Preduzece_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Preduzece",
                                                    "attribute": "PIB",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "PIB mora imati 13 cifara" ]), "expression": { "expr": { "type": "function", "name": "isMatch", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": "^[0-9]{13}$" } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "PIB je obavezan" }, "args": {} }
                                                    })
                                                ])}
                                                mask={"9999999999999"}
                                                readOnlyStyle={"control"}
                                                maxLength={13}
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
                                                    "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "PIB" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox2"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Preduzece_NewEdit.textBox3$formGroup"
                                        $widgetId="p1.MyFirstModule.Preduzece_NewEdit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Preduzece_NewEdit.textBox3"
                                                $widgetId="p1.MyFirstModule.Preduzece_NewEdit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Preduzece_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Preduzece",
                                                    "attribute": "adresaPreduzeca",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "Adresa je obavezna" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Unesite adresu" }, "args": {} }
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
                                                    "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Adresa preduzeca" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox3"
                                        })}
                                        width={3}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox3"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p1.MyFirstModule.Preduzece_NewEdit.actionButton1"
                                        $widgetId="p1.MyFirstModule.Preduzece_NewEdit.actionButton1"
                                        buttonId={"p1.MyFirstModule.Preduzece_NewEdit.actionButton1"}
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
                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p1.MyFirstModule.Preduzece_NewEdit.dataView1", "source": "object" } }, "config": { "operationId": "4txvCf1Ue1G5Ca4YrBNqCA", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ActionButton key="p1.MyFirstModule.Preduzece_NewEdit.actionButton2"
                                        $widgetId="p1.MyFirstModule.Preduzece_NewEdit.actionButton2"
                                        buttonId={"p1.MyFirstModule.Preduzece_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "StQgyUWg2V2WYTvgGTuDyA", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Novo preduzece"
]);

export const classes = "";

export const cancelChangesOperationId = "a6rVzx68H1mnMnyxu8WkKg";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
