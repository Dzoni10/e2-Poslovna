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
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $Container, $Text, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, Container, Text, DataView, FormGroup, TextBox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstModule.kreirajPreduzece.layoutGrid1"
        $widgetId="p.MyFirstModule.kreirajPreduzece.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row0"
                $widgetId="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row0$column0"
                        class={"col-lg col-md col align-self-center"}
                        style={undefined}
                        content={[
                            <$Container key="p.MyFirstModule.kreirajPreduzece.container1"
                                $widgetId="p.MyFirstModule.kreirajPreduzece.container1"
                                class={"mx-name-container1 pageheader col-center spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.MyFirstModule.kreirajPreduzece.text40"
                                        $widgetId="p.MyFirstModule.kreirajPreduzece.text40"
                                        class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Unesite preduzece" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h1"} />,
                                    <$Text key="p.MyFirstModule.kreirajPreduzece.text39"
                                        $widgetId="p.MyFirstModule.kreirajPreduzece.text39"
                                        class={"mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-none"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Supporting text" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />,
            <$Div key="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row1"
                $widgetId="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row1"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row1$column0"
                        $widgetId="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row1$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={undefined} />,
                    <$Div key="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row1$column1"
                        $widgetId="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row1$column1"
                        class={"col-lg-8 col-md-auto col-auto align-self-center"}
                        style={undefined}
                        content={[
                            <$Container key="p.MyFirstModule.kreirajPreduzece.container2"
                                $widgetId="p.MyFirstModule.kreirajPreduzece.container2"
                                class={"mx-name-container2 card spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Container key="p.MyFirstModule.kreirajPreduzece.container5"
                                        $widgetId="p.MyFirstModule.kreirajPreduzece.container5"
                                        class={"mx-name-container5 formblock spacing-outer-bottom-large"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$DataView key="p.MyFirstModule.kreirajPreduzece.dataView7"
                                                $widgetId="p.MyFirstModule.kreirajPreduzece.dataView7"
                                                class={"mx-name-dataView7 form-vertical"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                object={AssociationObjectProperty({
                                                    "dataSourceId": "p.28",
                                                    "scope": "$Preduzece",
                                                    "editable": true
                                                })}
                                                emptyMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                body={[
                                                    <$FormGroup key="p.MyFirstModule.kreirajPreduzece.textBox1$formGroup"
                                                        $widgetId="p.MyFirstModule.kreirajPreduzece.textBox1$formGroup"
                                                        class={"mx-name-textBox1 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p.MyFirstModule.kreirajPreduzece.textBox1"
                                                                $widgetId="p.MyFirstModule.kreirajPreduzece.textBox1"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p.MyFirstModule.kreirajPreduzece.dataView7",
                                                                    "path": "",
                                                                    "entity": "MyFirstModule.Preduzece",
                                                                    "attribute": "nazivPreduzeca",
                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                    "isList": false,
                                                                    "validation": { "message": t([ "Naziv je obavzean" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                                    "formatting": { }
                                                                })}
                                                                isPassword={false}
                                                                placeholder={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                                                    "widgetId": "p.MyFirstModule.kreirajPreduzece.textBox1"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Naziv preduzeca" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MyFirstModule.kreirajPreduzece.textBox1"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.MyFirstModule.kreirajPreduzece.textBox1"
                                                        })} />,
                                                    <$FormGroup key="p.MyFirstModule.kreirajPreduzece.textBox2$formGroup"
                                                        $widgetId="p.MyFirstModule.kreirajPreduzece.textBox2$formGroup"
                                                        class={"mx-name-textBox2 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p.MyFirstModule.kreirajPreduzece.textBox2"
                                                                $widgetId="p.MyFirstModule.kreirajPreduzece.textBox2"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p.MyFirstModule.kreirajPreduzece.dataView7",
                                                                    "path": "",
                                                                    "entity": "MyFirstModule.Preduzece",
                                                                    "attribute": "PIB",
                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                    "isList": false,
                                                                    "validation": { "message": t([ "PIB je obavezan" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                                                                    "formatting": { }
                                                                })}
                                                                isPassword={false}
                                                                placeholder={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                                                    "widgetId": "p.MyFirstModule.kreirajPreduzece.textBox2"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "PIB" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MyFirstModule.kreirajPreduzece.textBox2"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.MyFirstModule.kreirajPreduzece.textBox2"
                                                        })} />,
                                                    <$FormGroup key="p.MyFirstModule.kreirajPreduzece.textBox3$formGroup"
                                                        $widgetId="p.MyFirstModule.kreirajPreduzece.textBox3$formGroup"
                                                        class={"mx-name-textBox3 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p.MyFirstModule.kreirajPreduzece.textBox3"
                                                                $widgetId="p.MyFirstModule.kreirajPreduzece.textBox3"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p.MyFirstModule.kreirajPreduzece.dataView7",
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
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                                                    "widgetId": "p.MyFirstModule.kreirajPreduzece.textBox3"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Adresa preduzeca" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MyFirstModule.kreirajPreduzece.textBox3"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.MyFirstModule.kreirajPreduzece.textBox3"
                                                        })} />
                                                ]}
                                                hideFooter={false}
                                                footer={[
                                                    <$ActionButton key="p.MyFirstModule.kreirajPreduzece.actionButton1"
                                                        $widgetId="p.MyFirstModule.kreirajPreduzece.actionButton1"
                                                        buttonId={"p.MyFirstModule.kreirajPreduzece.actionButton1"}
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
                                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.MyFirstModule.kreirajPreduzece.dataView7", "source": "object" } }, "config": { "operationId": "L37YYypRmV+fvJDO5D4qSg", "closePage": true }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />,
                                                    <$ActionButton key="p.MyFirstModule.kreirajPreduzece.actionButton2"
                                                        $widgetId="p.MyFirstModule.kreirajPreduzece.actionButton2"
                                                        buttonId={"p.MyFirstModule.kreirajPreduzece.actionButton2"}
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
                                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "2UYYoCqGHFmSw/rBIdmvJQ", "closePage": true }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />
                        ]} />,
                    <$Div key="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row1$column2"
                        $widgetId="p.MyFirstModule.kreirajPreduzece.layoutGrid1$row1$column2"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={undefined} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "kreiraj preduzece"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const autofocus = "off";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
