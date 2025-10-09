<<<<<<< HEAD
import { reactExports, asPluginWidgets, selectTranslation } from '../index-JDXCDs53.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BMEt46hD.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-CnZtpka2.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BJyyxZlP.js';
import { AssociationProperty } from '../AssociationProperty-DKzgjRwQ.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-RBW52cK-.js';
import { DatabaseObjectListProperty } from '../CTcC6PjV-Zoc9mpUp.js';
import { ListAttributeProperty } from '../ListAttributeProperty-BGCislj4.js';
import { ComboboxWidgetModule } from '../Combobox-DHAsiyOP.js';
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
import { AssociationProperty } from '../AssociationProperty-ofkzE30k.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-EdR2-wgr.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-DT5jvNDi.js';
import { ListAttributeProperty } from '../ListAttributeProperty-BqFtOePf.js';
import * as ComboboxWidgetModule from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs';
import '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css';
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
import { AssociationProperty } from '../AssociationProperty-B8-mdEat.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CQj9lYLp.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-BIL054Xu.js';
import { ListAttributeProperty } from '../ListAttributeProperty-BRLhJBGz.js';
import { ComboboxWidgetModule } from '../Combobox-DlwWXVlg.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C8wONAJZ.js';
import { DataView } from '../DataView-Di9rOy1O.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-C12ql83v.js';
import { AttributeProperty } from '../77kgvjgm-Ckrt0mx6.js';
import '../BkqAssms-a3v8x28y.js';
import '../DmsI6saM-AyKzfY6T.js';
>>>>>>> Stashed changes
>>>>>>> feat/sales-domain

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $DataView, $FormGroup, $TextBox, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, Combobox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
<<<<<<< HEAD
      key: "p4.Administration.MyAccount.dataView1",
      $widgetId: "p4.Administration.MyAccount.dataView1",
=======
      key: "p.Administration.MyAccount.dataView1",
      $widgetId: "p.Administration.MyAccount.dataView1",
>>>>>>> feat/sales-domain
      class: "mx-name-dataView1 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
<<<<<<< HEAD
        "dataSourceId": "p4.9",
=======
        "dataSourceId": "p.9",
>>>>>>> feat/sales-domain
        "scope": "$Account",
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
            key: "p4.Administration.MyAccount.textBox2$formGroup",
            $widgetId: "p4.Administration.MyAccount.textBox2$formGroup",
=======
            key: "p.Administration.MyAccount.textBox2$formGroup",
            $widgetId: "p.Administration.MyAccount.textBox2$formGroup",
>>>>>>> feat/sales-domain
            class: "mx-name-textBox2 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
<<<<<<< HEAD
                  key: "p4.Administration.MyAccount.textBox2",
                  $widgetId: "p4.Administration.MyAccount.textBox2",
                  inputValue: AttributeProperty({
                    "scope": "p4.Administration.MyAccount.dataView1",
=======
                  key: "p.Administration.MyAccount.textBox2",
                  $widgetId: "p.Administration.MyAccount.textBox2",
                  inputValue: AttributeProperty({
                    "scope": "p.Administration.MyAccount.dataView1",
>>>>>>> feat/sales-domain
                    "path": "",
                    "entity": "Administration.Account",
                    "attribute": "FullName",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": null,
                    "formatting": {}
                  }),
                  isPassword: false,
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
                  ariaRequired: void 0,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
<<<<<<< HEAD
                    "widgetId": "p4.Administration.MyAccount.textBox2"
=======
                    "widgetId": "p.Administration.MyAccount.textBox2"
>>>>>>> feat/sales-domain
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
<<<<<<< HEAD
              "widgetId": "p4.Administration.MyAccount.textBox2"
=======
              "widgetId": "p.Administration.MyAccount.textBox2"
>>>>>>> feat/sales-domain
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
<<<<<<< HEAD
              "inputWidgetId": "p4.Administration.MyAccount.textBox2"
=======
              "inputWidgetId": "p.Administration.MyAccount.textBox2"
>>>>>>> feat/sales-domain
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
<<<<<<< HEAD
            key: "p4.Administration.MyAccount.textBox5$formGroup",
            $widgetId: "p4.Administration.MyAccount.textBox5$formGroup",
=======
            key: "p.Administration.MyAccount.textBox5$formGroup",
            $widgetId: "p.Administration.MyAccount.textBox5$formGroup",
>>>>>>> feat/sales-domain
            class: "mx-name-textBox5 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
<<<<<<< HEAD
                  key: "p4.Administration.MyAccount.textBox5",
                  $widgetId: "p4.Administration.MyAccount.textBox5",
                  inputValue: AttributeProperty({
                    "scope": "p4.Administration.MyAccount.dataView1",
=======
                  key: "p.Administration.MyAccount.textBox5",
                  $widgetId: "p.Administration.MyAccount.textBox5",
                  inputValue: AttributeProperty({
                    "scope": "p.Administration.MyAccount.dataView1",
>>>>>>> feat/sales-domain
                    "path": "",
                    "entity": "Administration.Account",
                    "attribute": "Name",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": null,
                    "formatting": {}
                  }),
                  isPassword: false,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 100,
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
<<<<<<< HEAD
                    "widgetId": "p4.Administration.MyAccount.textBox5"
=======
                    "widgetId": "p.Administration.MyAccount.textBox5"
>>>>>>> feat/sales-domain
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
<<<<<<< HEAD
              "widgetId": "p4.Administration.MyAccount.textBox5"
=======
              "widgetId": "p.Administration.MyAccount.textBox5"
>>>>>>> feat/sales-domain
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
<<<<<<< HEAD
              "inputWidgetId": "p4.Administration.MyAccount.textBox5"
=======
              "inputWidgetId": "p.Administration.MyAccount.textBox5"
>>>>>>> feat/sales-domain
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
<<<<<<< HEAD
            key: "p4.Administration.MyAccount.comboBox3$formGroup",
            $widgetId: "p4.Administration.MyAccount.comboBox3$formGroup",
=======
            key: "p.Administration.MyAccount.comboBox3$formGroup",
            $widgetId: "p.Administration.MyAccount.comboBox3$formGroup",
>>>>>>> feat/sales-domain
            class: "mx-name-comboBox3",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $Combobox,
                {
<<<<<<< HEAD
                  key: "p4.Administration.MyAccount.comboBox3",
                  $widgetId: "p4.Administration.MyAccount.comboBox3",
=======
                  key: "p.Administration.MyAccount.comboBox3",
                  $widgetId: "p.Administration.MyAccount.comboBox3",
>>>>>>> feat/sales-domain
                  optionsSourceType: "association",
                  attributeAssociation: AssociationProperty({
                    "type": "Reference",
                    "entity": "Administration.Account",
                    "path": "",
                    "attribute": "System.User_Language",
                    "endpointEntity": "System.Language",
<<<<<<< HEAD
                    "selectableObjectsId": "p4.0",
                    "scope": "p4.Administration.MyAccount.dataView1",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                  }),
                  optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                    "dataSourceId": "p4.0",
                    "entity": "System.Language",
                    "scope": "p4.Administration.MyAccount.dataView1",
=======
                    "selectableObjectsId": "p.0",
                    "scope": "p.Administration.MyAccount.dataView1",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                  }),
                  optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                    "dataSourceId": "p.0",
                    "entity": "System.Language",
                    "scope": "p.Administration.MyAccount.dataView1",
>>>>>>> feat/sales-domain
                    "operationId": "weCRgkkOnFqaYAPvVcN5Qw",
                    "sort": []
                  }),
                  optionsSourceAssociationCaptionType: "attribute",
                  optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                    "path": "",
                    "entity": "System.Language",
                    "attribute": "Description",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
<<<<<<< HEAD
                    "dataSourceId": "p4.0",
=======
                    "dataSourceId": "p.0",
>>>>>>> feat/sales-domain
                    "isList": false
                  }),
                  optionsSourceAssociationCaptionExpression: void 0,
                  emptyOptionText: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                  source: "context",
                  optionsSourceDatabaseDataSource: void 0,
                  optionsSourceDatabaseCaptionType: "attribute",
                  optionsSourceStaticDataSource: [],
                  optionsSourceDatabaseCustomContentType: "no",
                  staticDataSourceCustomContentType: "no",
                  readOnlyStyle: "text",
                  lazyLoading: true,
                  loadingType: "spinner",
                  optionsSourceDatabaseDefaultValue: void 0,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
<<<<<<< HEAD
                    "widgetId": "p4.Administration.MyAccount.comboBox3"
=======
                    "widgetId": "p.Administration.MyAccount.comboBox3"
>>>>>>> feat/sales-domain
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
<<<<<<< HEAD
              "widgetId": "p4.Administration.MyAccount.comboBox3"
=======
              "widgetId": "p.Administration.MyAccount.comboBox3"
>>>>>>> feat/sales-domain
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
<<<<<<< HEAD
              "inputWidgetId": "p4.Administration.MyAccount.comboBox3"
=======
              "inputWidgetId": "p.Administration.MyAccount.comboBox3"
>>>>>>> feat/sales-domain
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
<<<<<<< HEAD
            key: "p4.Administration.MyAccount.microflowTrigger1$visibility",
            $widgetId: "p4.Administration.MyAccount.microflowTrigger1$visibility",
=======
            key: "p.Administration.MyAccount.microflowTrigger1$visibility",
            $widgetId: "p.Administration.MyAccount.microflowTrigger1$visibility",
>>>>>>> feat/sales-domain
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
<<<<<<< HEAD
                  key: "p4.Administration.MyAccount.microflowTrigger1",
                  $widgetId: "p4.Administration.MyAccount.microflowTrigger1",
                  buttonId: "p4.Administration.MyAccount.microflowTrigger1",
=======
                  key: "p.Administration.MyAccount.microflowTrigger1",
                  $widgetId: "p.Administration.MyAccount.microflowTrigger1",
                  buttonId: "p.Administration.MyAccount.microflowTrigger1",
>>>>>>> feat/sales-domain
                  class: "mx-name-microflowTrigger1",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "button",
                  role: void 0,
                  buttonClass: "btn-default",
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                    })
                  ]),
                  tooltip: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  icon: void 0,
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "Account": { "widget": "$Account", "source": "object" } }, "config": { "operationId": "4lkUbW6N3FOPp6SE/S/wTA", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                    "abortOnServerValidation": true
                  })
                }
              )
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
<<<<<<< HEAD
            key: "p4.Administration.MyAccount.saveButton1",
            $widgetId: "p4.Administration.MyAccount.saveButton1",
            buttonId: "p4.Administration.MyAccount.saveButton1",
=======
            key: "p.Administration.MyAccount.saveButton1",
            $widgetId: "p.Administration.MyAccount.saveButton1",
            buttonId: "p.Administration.MyAccount.saveButton1",
>>>>>>> feat/sales-domain
            class: "mx-name-saveButton1",
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
<<<<<<< HEAD
              "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p4.Administration.MyAccount.dataView1", "source": "object" } }, "config": { "operationId": "RmFg7NefCVqzVaskAwZ0ow", "closePage": true }, "disabledDuringExecution": true },
=======
              "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.Administration.MyAccount.dataView1", "source": "object" } }, "config": { "operationId": "RmFg7NefCVqzVaskAwZ0ow", "closePage": true }, "disabledDuringExecution": true },
>>>>>>> feat/sales-domain
              "abortOnServerValidation": true
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
<<<<<<< HEAD
            key: "p4.Administration.MyAccount.cancelButton1",
            $widgetId: "p4.Administration.MyAccount.cancelButton1",
            buttonId: "p4.Administration.MyAccount.cancelButton1",
=======
            key: "p.Administration.MyAccount.cancelButton1",
            $widgetId: "p.Administration.MyAccount.cancelButton1",
            buttonId: "p.Administration.MyAccount.cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "KL0TEv+lPVmdrzhAUo9bCw", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "My Account"
]);
const classes = "";
const autofocus = "desktopOnly";
const cancelChangesOperationId = "YzmbacoJglCrifiHI/gm0w";
<<<<<<< HEAD
const closeButton = "p4.Administration.MyAccount.cancelButton1";
=======
const closeButton = "p.Administration.MyAccount.cancelButton1";
>>>>>>> feat/sales-domain
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { autofocus, cancelChangesOperationId, classes, closeButton, content, style, title };
