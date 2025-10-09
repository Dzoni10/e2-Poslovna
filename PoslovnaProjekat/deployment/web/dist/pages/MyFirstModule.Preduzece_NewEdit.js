import { reactExports, asPluginWidgets, selectTranslation } from '../index-DdpIsMV0.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BLNSIRG_.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-DRrsDoPl.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BblpP4vJ.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-U34DIuXw.js';
import { DataView } from '../DataView-C589ntOr.js';
import { Div } from '../Div-BTfQALgZ.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-bCLQ3iXv.js';
import { AttributeProperty } from '../D5tDSKpV-BMTQuWeb.js';
import '../uEIG9e6s-DXd_R0dy.js';
import '../bdxqAC6d-1B6oqOD4.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1",
      $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1$row0",
            $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p1.MyFirstModule.Preduzece_NewEdit.dataView1",
                        $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p1.12",
                          "scope": "$Preduzece",
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
                              key: "p1.MyFirstModule.Preduzece_NewEdit.textBox1$formGroup",
                              $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p1.MyFirstModule.Preduzece_NewEdit.textBox1",
                                    $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p1.MyFirstModule.Preduzece_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MyFirstModule.Preduzece",
                                      "attribute": "nazivPreduzeca",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["Naziv je obavezan"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Unesite naziv preduzeca" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
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
                                      "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Naziv preduzeca" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox1"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p1.MyFirstModule.Preduzece_NewEdit.textBox2$formGroup",
                              $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p1.MyFirstModule.Preduzece_NewEdit.textBox2",
                                    $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p1.MyFirstModule.Preduzece_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MyFirstModule.Preduzece",
                                      "attribute": "PIB",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["PIB mora imati 13 cifara"]), "expression": { "expr": { "type": "function", "name": "isMatch", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": "^[0-9]{13}$" }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "PIB je obavezan" }, "args": {} }
                                      })
                                    ]),
                                    mask: "9999999999999",
                                    readOnlyStyle: "control",
                                    maxLength: 13,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "PIB" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p1.MyFirstModule.Preduzece_NewEdit.textBox3$formGroup",
                              $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p1.MyFirstModule.Preduzece_NewEdit.textBox3",
                                    $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p1.MyFirstModule.Preduzece_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MyFirstModule.Preduzece",
                                      "attribute": "adresaPreduzeca",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["Adresa je obavezna"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Unesite adresu" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
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
                                      "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Adresa preduzeca" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox3"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p1.MyFirstModule.Preduzece_NewEdit.textBox3"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p1.MyFirstModule.Preduzece_NewEdit.actionButton1",
                              $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.actionButton1",
                              buttonId: "p1.MyFirstModule.Preduzece_NewEdit.actionButton1",
                              class: "mx-name-actionButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-success",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p1.MyFirstModule.Preduzece_NewEdit.dataView1", "source": "object" } }, "config": { "operationId": "4txvCf1Ue1G5Ca4YrBNqCA", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p1.MyFirstModule.Preduzece_NewEdit.actionButton2",
                              $widgetId: "p1.MyFirstModule.Preduzece_NewEdit.actionButton2",
                              buttonId: "p1.MyFirstModule.Preduzece_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "StQgyUWg2V2WYTvgGTuDyA", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Novo preduzece"
]);
const classes = "";
const cancelChangesOperationId = "a6rVzx68H1mnMnyxu8WkKg";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
