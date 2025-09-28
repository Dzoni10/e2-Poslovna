import { reactExports, asPluginWidgets, selectTranslation } from '../index-JDXCDs53.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BMEt46hD.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-CnZtpka2.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BJyyxZlP.js';
import { AssociationProperty } from '../AssociationProperty-DKzgjRwQ.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-RBW52cK-.js';
import { DatabaseObjectListProperty } from '../CTcC6PjV-Zoc9mpUp.js';
import { ListAttributeProperty } from '../ListAttributeProperty-BGCislj4.js';
import { ComboboxWidgetModule } from '../Combobox-DHAsiyOP.js';
import { DataView } from '../DataView-BstQTMJi.js';
import { Div } from '../Div-CbKV9nto.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DeEIVNnx.js';
import { AttributeProperty } from '../D5tDSKpV-NCto3GtK.js';
import '../uEIG9e6s-D5bs4rlT.js';
import '../bdxqAC6d-Crq0yb3P.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $Combobox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Combobox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p0.MyFirstModule.Radnik_NewEdit.layoutGrid1",
      $widgetId: "p0.MyFirstModule.Radnik_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p0.MyFirstModule.Radnik_NewEdit.layoutGrid1$row0",
            $widgetId: "p0.MyFirstModule.Radnik_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p0.MyFirstModule.Radnik_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p0.MyFirstModule.Radnik_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p0.MyFirstModule.Radnik_NewEdit.dataView1",
                        $widgetId: "p0.MyFirstModule.Radnik_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p0.13",
                          "scope": "$Radnik",
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
                              key: "p0.MyFirstModule.Radnik_NewEdit.textBox1$formGroup",
                              $widgetId: "p0.MyFirstModule.Radnik_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p0.MyFirstModule.Radnik_NewEdit.textBox1",
                                    $widgetId: "p0.MyFirstModule.Radnik_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p0.MyFirstModule.Radnik_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MyFirstModule.Radnik",
                                      "attribute": "Ime",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["Ime je obavezno"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Unesite ime" }, "args": {} }
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
                                      "widgetId": "p0.MyFirstModule.Radnik_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Ime" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p0.MyFirstModule.Radnik_NewEdit.textBox1"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p0.MyFirstModule.Radnik_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p0.MyFirstModule.Radnik_NewEdit.textBox2$formGroup",
                              $widgetId: "p0.MyFirstModule.Radnik_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p0.MyFirstModule.Radnik_NewEdit.textBox2",
                                    $widgetId: "p0.MyFirstModule.Radnik_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p0.MyFirstModule.Radnik_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MyFirstModule.Radnik",
                                      "attribute": "Prezime",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["Prezime je obavezno"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Unesite prezime" }, "args": {} }
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
                                      "widgetId": "p0.MyFirstModule.Radnik_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Prezime" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p0.MyFirstModule.Radnik_NewEdit.textBox2"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p0.MyFirstModule.Radnik_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p0.MyFirstModule.Radnik_NewEdit.comboBox1$formGroup",
                              $widgetId: "p0.MyFirstModule.Radnik_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p0.MyFirstModule.Radnik_NewEdit.comboBox1",
                                    $widgetId: "p0.MyFirstModule.Radnik_NewEdit.comboBox1",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceDatabaseDefaultValue: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstModule.Radnik",
                                      "path": "",
                                      "attribute": "MyFirstModule.Radnik_Preduzece",
                                      "endpointEntity": "MyFirstModule.Preduzece",
                                      "selectableObjectsId": "p0.0",
                                      "scope": "p0.MyFirstModule.Radnik_NewEdit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p0.0",
                                      "entity": "MyFirstModule.Preduzece",
                                      "scope": "p0.MyFirstModule.Radnik_NewEdit.dataView1",
                                      "operationId": "FhnRjzyWzF+cx4eluBjEpQ",
                                      "sort": []
                                    }),
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "MyFirstModule.Preduzece",
                                      "attribute": "nazivPreduzeca",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p0.0",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    optionsSourceStaticDataSource: [],
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Izaberite preduzece" }, "args": {} }
                                      })
                                    ]),
                                    filterType: "contains",
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceAssociationCustomContent: void 0,
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
                                    selectedItemsStyle: "text",
                                    selectAllButton: false,
                                    selectAllButtonCaption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "bordered",
                                    onChangeEvent: void 0,
                                    onEnterEvent: void 0,
                                    onLeaveEvent: void 0,
                                    ariaRequired: false,
                                    clearButtonAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                      })
                                    ]),
                                    removeValueAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                      })
                                    ]),
                                    a11ySelectedValue: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                      })
                                    ]),
                                    a11yOptionsAvailable: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                      })
                                    ]),
                                    a11yInstructions: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                      })
                                    ]),
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p0.MyFirstModule.Radnik_NewEdit.comboBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Preduzece" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p0.MyFirstModule.Radnik_NewEdit.comboBox1"
                              }),
                              width: 3,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p0.MyFirstModule.Radnik_NewEdit.comboBox1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p0.MyFirstModule.Radnik_NewEdit.actionButton1",
                              $widgetId: "p0.MyFirstModule.Radnik_NewEdit.actionButton1",
                              buttonId: "p0.MyFirstModule.Radnik_NewEdit.actionButton1",
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
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p0.MyFirstModule.Radnik_NewEdit.dataView1", "source": "object" } }, "config": { "operationId": "C9dREC+C2lKMXSVoSAC5FA", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p0.MyFirstModule.Radnik_NewEdit.actionButton2",
                              $widgetId: "p0.MyFirstModule.Radnik_NewEdit.actionButton2",
                              buttonId: "p0.MyFirstModule.Radnik_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "MfZueqiD2V6so1GA2GM6Rw", "closePage": true }, "disabledDuringExecution": true },
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
  "Novi Radnik"
]);
const classes = "";
const cancelChangesOperationId = "cFby9phGmleTrMJeL3J3Rw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
