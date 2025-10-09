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
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
<<<<<<< HEAD
    <$DataView key="p5.Administration.ChangePasswordForm.dataView2"
        $widgetId="p5.Administration.ChangePasswordForm.dataView2"
=======
    <$DataView key="p.Administration.ChangePasswordForm.dataView2"
        $widgetId="p.Administration.ChangePasswordForm.dataView2"
>>>>>>> feat/sales-domain
        class={"mx-name-dataView2 form-horizontal"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
<<<<<<< HEAD
            "dataSourceId": "p5.6",
=======
            "dataSourceId": "p.6",
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
            <$FormGroup key="p5.Administration.ChangePasswordForm.textBox3$formGroup"
                $widgetId="p5.Administration.ChangePasswordForm.textBox3$formGroup"
                class={"mx-name-textBox3 mx-textbox"}
                style={undefined}
                control={[
                    <$TextBox key="p5.Administration.ChangePasswordForm.textBox3"
                        $widgetId="p5.Administration.ChangePasswordForm.textBox3"
                        inputValue={AttributeProperty({
                            "scope": "p5.Administration.ChangePasswordForm.dataView2",
=======
            <$FormGroup key="p.Administration.ChangePasswordForm.textBox3$formGroup"
                $widgetId="p.Administration.ChangePasswordForm.textBox3$formGroup"
                class={"mx-name-textBox3 mx-textbox"}
                style={undefined}
                control={[
                    <$TextBox key="p.Administration.ChangePasswordForm.textBox3"
                        $widgetId="p.Administration.ChangePasswordForm.textBox3"
                        inputValue={AttributeProperty({
                            "scope": "p.Administration.ChangePasswordForm.dataView2",
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
                            "widgetId": "p5.Administration.ChangePasswordForm.textBox3"
=======
                            "widgetId": "p.Administration.ChangePasswordForm.textBox3"
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
                    "widgetId": "p5.Administration.ChangePasswordForm.textBox3"
=======
                    "widgetId": "p.Administration.ChangePasswordForm.textBox3"
>>>>>>> feat/sales-domain
                })}
                width={3}
                orientation={"horizontal"}
                hasError={ValidationProperty({
<<<<<<< HEAD
                    "inputWidgetId": "p5.Administration.ChangePasswordForm.textBox3"
                })} />,
            <$FormGroup key="p5.Administration.ChangePasswordForm.textBox1$formGroup"
                $widgetId="p5.Administration.ChangePasswordForm.textBox1$formGroup"
                class={"mx-name-textBox1 mx-textbox"}
                style={undefined}
                control={[
                    <$TextBox key="p5.Administration.ChangePasswordForm.textBox1"
                        $widgetId="p5.Administration.ChangePasswordForm.textBox1"
                        inputValue={AttributeProperty({
                            "scope": "p5.Administration.ChangePasswordForm.dataView2",
=======
                    "inputWidgetId": "p.Administration.ChangePasswordForm.textBox3"
                })} />,
            <$FormGroup key="p.Administration.ChangePasswordForm.textBox1$formGroup"
                $widgetId="p.Administration.ChangePasswordForm.textBox1$formGroup"
                class={"mx-name-textBox1 mx-textbox"}
                style={undefined}
                control={[
                    <$TextBox key="p.Administration.ChangePasswordForm.textBox1"
                        $widgetId="p.Administration.ChangePasswordForm.textBox1"
                        inputValue={AttributeProperty({
                            "scope": "p.Administration.ChangePasswordForm.dataView2",
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
                            "widgetId": "p5.Administration.ChangePasswordForm.textBox1"
=======
                            "widgetId": "p.Administration.ChangePasswordForm.textBox1"
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
                    "widgetId": "p5.Administration.ChangePasswordForm.textBox1"
=======
                    "widgetId": "p.Administration.ChangePasswordForm.textBox1"
>>>>>>> feat/sales-domain
                })}
                width={3}
                orientation={"horizontal"}
                hasError={ValidationProperty({
<<<<<<< HEAD
                    "inputWidgetId": "p5.Administration.ChangePasswordForm.textBox1"
=======
                    "inputWidgetId": "p.Administration.ChangePasswordForm.textBox1"
>>>>>>> feat/sales-domain
                })} />
        ]}
        hideFooter={false}
        footer={[
<<<<<<< HEAD
            <$ConditionalVisibilityWrapper key="p5.Administration.ChangePasswordForm.microflowButton1$visibility"
                $widgetId="p5.Administration.ChangePasswordForm.microflowButton1$visibility"
=======
            <$ConditionalVisibilityWrapper key="p.Administration.ChangePasswordForm.microflowButton1$visibility"
                $widgetId="p.Administration.ChangePasswordForm.microflowButton1$visibility"
>>>>>>> feat/sales-domain
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                })}
                contents={[
<<<<<<< HEAD
                    <$ActionButton key="p5.Administration.ChangePasswordForm.microflowButton1"
                        $widgetId="p5.Administration.ChangePasswordForm.microflowButton1"
                        buttonId={"p5.Administration.ChangePasswordForm.microflowButton1"}
=======
                    <$ActionButton key="p.Administration.ChangePasswordForm.microflowButton1"
                        $widgetId="p.Administration.ChangePasswordForm.microflowButton1"
                        buttonId={"p.Administration.ChangePasswordForm.microflowButton1"}
>>>>>>> feat/sales-domain
                        class={"mx-name-microflowButton1"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-success"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Change" }, "args": {} }
                            })
                        ])}
                        tooltip={TextProperty({
                            "value": t([
                                ""
                            ])
                        })}
                        icon={undefined}
                        action={ActionProperty({
                            "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "P3fMqug0Pl21mMakb1FY1A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                            "abortOnServerValidation": true
                        })} />
                ]} />,
<<<<<<< HEAD
            <$ActionButton key="p5.Administration.ChangePasswordForm.cancelButton1"
                $widgetId="p5.Administration.ChangePasswordForm.cancelButton1"
                buttonId={"p5.Administration.ChangePasswordForm.cancelButton1"}
=======
            <$ActionButton key="p.Administration.ChangePasswordForm.cancelButton1"
                $widgetId="p.Administration.ChangePasswordForm.cancelButton1"
                buttonId={"p.Administration.ChangePasswordForm.cancelButton1"}
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
                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "dsyv48bSyF2Q9lEdGasWBA", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Change Password"
]);

export const classes = "";

export const autofocus = "desktopOnly";
export const cancelChangesOperationId = "eqkrDVSHKV+PsG87Mirqsw";
<<<<<<< HEAD
export const closeButton = "p5.Administration.ChangePasswordForm.cancelButton1";
=======
export const closeButton = "p.Administration.ChangePasswordForm.cancelButton1";
>>>>>>> feat/sales-domain
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
