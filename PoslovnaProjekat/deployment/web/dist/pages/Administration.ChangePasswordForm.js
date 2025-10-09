<<<<<<< HEAD
import { reactExports, asPluginWidgets, selectTranslation } from '../index-JDXCDs53.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BMEt46hD.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-CnZtpka2.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BJyyxZlP.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-RBW52cK-.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BVC6V75r.js';
import { DataView } from '../DataView-BstQTMJi.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DeEIVNnx.js';
import { AttributeProperty } from '../D5tDSKpV-NCto3GtK.js';
import '../uEIG9e6s-D5bs4rlT.js';
import '../bdxqAC6d-Crq0yb3P.js';
=======
<<<<<<< Updated upstream
import { reactExports, asPluginWidgets, selectTranslation } from '../index-BjSpTlX0.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DYUj9_Ay.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dNbAsczi.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-qKRNUhwW.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-EdR2-wgr.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C8wONAJZ.js';
import { DataView } from '../DataView-PQPsNCJf.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D-AdFqBx.js';
import { AttributeProperty } from '../77kgvjgm-4HZvSliz.js';
import '../BkqAssms-D3I0Q7ya.js';
import '../DmsI6saM-Dj1PYIQI.js';
=======
import { reactExports, asPluginWidgets, selectTranslation } from '../index-DRM94Sf-.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-LSQoMZk3.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Vn_V_FOy.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CJXqeTvW.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CQj9lYLp.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C8wONAJZ.js';
import { DataView } from '../DataView-Di9rOy1O.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-C12ql83v.js';
import { AttributeProperty } from '../77kgvjgm-Ckrt0mx6.js';
import '../BkqAssms-a3v8x28y.js';
import '../DmsI6saM-AyKzfY6T.js';
>>>>>>> Stashed changes
>>>>>>> feat/sales-domain

const React = { createElement: reactExports.createElement };
const { $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
<<<<<<< HEAD
      key: "p5.Administration.ChangePasswordForm.dataView2",
      $widgetId: "p5.Administration.ChangePasswordForm.dataView2",
=======
      key: "p.Administration.ChangePasswordForm.dataView2",
      $widgetId: "p.Administration.ChangePasswordForm.dataView2",
>>>>>>> feat/sales-domain
      class: "mx-name-dataView2 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
<<<<<<< HEAD
        "dataSourceId": "p5.6",
=======
        "dataSourceId": "p.6",
>>>>>>> feat/sales-domain
        "scope": "$AccountPasswordData",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
<<<<<<< HEAD
            key: "p5.Administration.ChangePasswordForm.textBox3$formGroup",
            $widgetId: "p5.Administration.ChangePasswordForm.textBox3$formGroup",
=======
            key: "p.Administration.ChangePasswordForm.textBox3$formGroup",
            $widgetId: "p.Administration.ChangePasswordForm.textBox3$formGroup",
>>>>>>> feat/sales-domain
            class: "mx-name-textBox3 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
<<<<<<< HEAD
                  key: "p5.Administration.ChangePasswordForm.textBox3",
                  $widgetId: "p5.Administration.ChangePasswordForm.textBox3",
                  inputValue: AttributeProperty({
                    "scope": "p5.Administration.ChangePasswordForm.dataView2",
=======
                  key: "p.Administration.ChangePasswordForm.textBox3",
                  $widgetId: "p.Administration.ChangePasswordForm.textBox3",
                  inputValue: AttributeProperty({
                    "scope": "p.Administration.ChangePasswordForm.dataView2",
>>>>>>> feat/sales-domain
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "NewPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [{ "type": "function", "name": "length", "parameters": [{ "type": "function", "name": "toString", "parameters": [{ "type": "variable", "variable": "value" }] }] }, { "type": "literalNumeric", "value": "0" }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
<<<<<<< HEAD
                    "widgetId": "p5.Administration.ChangePasswordForm.textBox3"
=======
                    "widgetId": "p.Administration.ChangePasswordForm.textBox3"
>>>>>>> feat/sales-domain
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
<<<<<<< HEAD
              "widgetId": "p5.Administration.ChangePasswordForm.textBox3"
=======
              "widgetId": "p.Administration.ChangePasswordForm.textBox3"
>>>>>>> feat/sales-domain
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
<<<<<<< HEAD
              "inputWidgetId": "p5.Administration.ChangePasswordForm.textBox3"
=======
              "inputWidgetId": "p.Administration.ChangePasswordForm.textBox3"
>>>>>>> feat/sales-domain
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
<<<<<<< HEAD
            key: "p5.Administration.ChangePasswordForm.textBox1$formGroup",
            $widgetId: "p5.Administration.ChangePasswordForm.textBox1$formGroup",
=======
            key: "p.Administration.ChangePasswordForm.textBox1$formGroup",
            $widgetId: "p.Administration.ChangePasswordForm.textBox1$formGroup",
>>>>>>> feat/sales-domain
            class: "mx-name-textBox1 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
<<<<<<< HEAD
                  key: "p5.Administration.ChangePasswordForm.textBox1",
                  $widgetId: "p5.Administration.ChangePasswordForm.textBox1",
                  inputValue: AttributeProperty({
                    "scope": "p5.Administration.ChangePasswordForm.dataView2",
=======
                  key: "p.Administration.ChangePasswordForm.textBox1",
                  $widgetId: "p.Administration.ChangePasswordForm.textBox1",
                  inputValue: AttributeProperty({
                    "scope": "p.Administration.ChangePasswordForm.dataView2",
>>>>>>> feat/sales-domain
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "ConfirmPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": ">", "parameters": [{ "type": "function", "name": "length", "parameters": [{ "type": "function", "name": "toString", "parameters": [{ "type": "variable", "variable": "value" }] }] }, { "type": "literalNumeric", "value": "0" }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
<<<<<<< HEAD
                    "widgetId": "p5.Administration.ChangePasswordForm.textBox1"
=======
                    "widgetId": "p.Administration.ChangePasswordForm.textBox1"
>>>>>>> feat/sales-domain
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
<<<<<<< HEAD
              "widgetId": "p5.Administration.ChangePasswordForm.textBox1"
=======
              "widgetId": "p.Administration.ChangePasswordForm.textBox1"
>>>>>>> feat/sales-domain
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
<<<<<<< HEAD
              "inputWidgetId": "p5.Administration.ChangePasswordForm.textBox1"
=======
              "inputWidgetId": "p.Administration.ChangePasswordForm.textBox1"
>>>>>>> feat/sales-domain
            })
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
<<<<<<< HEAD
            key: "p5.Administration.ChangePasswordForm.microflowButton1$visibility",
            $widgetId: "p5.Administration.ChangePasswordForm.microflowButton1$visibility",
=======
            key: "p.Administration.ChangePasswordForm.microflowButton1$visibility",
            $widgetId: "p.Administration.ChangePasswordForm.microflowButton1$visibility",
>>>>>>> feat/sales-domain
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
<<<<<<< HEAD
                  key: "p5.Administration.ChangePasswordForm.microflowButton1",
                  $widgetId: "p5.Administration.ChangePasswordForm.microflowButton1",
                  buttonId: "p5.Administration.ChangePasswordForm.microflowButton1",
=======
                  key: "p.Administration.ChangePasswordForm.microflowButton1",
                  $widgetId: "p.Administration.ChangePasswordForm.microflowButton1",
                  buttonId: "p.Administration.ChangePasswordForm.microflowButton1",
>>>>>>> feat/sales-domain
                  class: "mx-name-microflowButton1",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "button",
                  role: void 0,
                  buttonClass: "btn-success",
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Change" }, "args": {} }
                    })
                  ]),
                  tooltip: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  icon: void 0,
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "P3fMqug0Pl21mMakb1FY1A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                    "abortOnServerValidation": true
                  })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
<<<<<<< HEAD
            key: "p5.Administration.ChangePasswordForm.cancelButton1",
            $widgetId: "p5.Administration.ChangePasswordForm.cancelButton1",
            buttonId: "p5.Administration.ChangePasswordForm.cancelButton1",
=======
            key: "p.Administration.ChangePasswordForm.cancelButton1",
            $widgetId: "p.Administration.ChangePasswordForm.cancelButton1",
            buttonId: "p.Administration.ChangePasswordForm.cancelButton1",
>>>>>>> feat/sales-domain
            class: "mx-name-cancelButton1",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-default",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
              })
            ]),
            tooltip: TextProperty({
              "value": selectTranslation([
                ""
              ])
            }),
            icon: void 0,
            action: ActionProperty({
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "dsyv48bSyF2Q9lEdGasWBA", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Change Password"
]);
const classes = "";
const autofocus = "desktopOnly";
const cancelChangesOperationId = "eqkrDVSHKV+PsG87Mirqsw";
<<<<<<< HEAD
const closeButton = "p5.Administration.ChangePasswordForm.cancelButton1";
=======
const closeButton = "p.Administration.ChangePasswordForm.cancelButton1";
>>>>>>> feat/sales-domain
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { autofocus, cancelChangesOperationId, classes, closeButton, content, style, title };
