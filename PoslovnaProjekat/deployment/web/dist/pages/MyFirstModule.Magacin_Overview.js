import { reactExports, asPluginWidgets, selectTranslation } from '../index-JDXCDs53.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BMEt46hD.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-CnZtpka2.js';
import { DatabaseObjectListProperty } from '../CTcC6PjV-Zoc9mpUp.js';
import { ListAttributeProperty } from '../ListAttributeProperty-BGCislj4.js';
import { SelectionProperty } from '../SelectionProperty-f_wSDnIg.js';
import { DatagridTextFilterWidgetModule, TemplatedWidgetProperty } from '../DatagridTextFilter-DWTJzH1_.js';
import { WebIconProperty } from '../WebIconProperty-Bon9K84_.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BVC6V75r.js';
import { DatagridWidgetModule } from '../Datagrid-1ozoQRRx.js';
import { Div } from '../Div-CbKV9nto.js';
import { Text } from '../Image-D55d_j2j.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-BcLwJ3TJ.js';
import '../uEIG9e6s-D5bs4rlT.js';
import '../D5tDSKpV-NCto3GtK.js';
import '../InlineText-BhumBKcU.js';
import '../ListExpressionProperty-BJu92AGp.js';
import '../WebStaticImageProperty-Cl4Gen30.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $Text, $Datagrid, $DatagridTextFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Text, Datagrid, DatagridTextFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p0.MyFirstModule.Magacin_Overview.layoutGrid1",
      $widgetId: "p0.MyFirstModule.Magacin_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p0.MyFirstModule.Magacin_Overview.layoutGrid1$row0",
            $widgetId: "p0.MyFirstModule.Magacin_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p0.MyFirstModule.Magacin_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p0.MyFirstModule.Magacin_Overview.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p0.MyFirstModule.Magacin_Overview.text1",
                        $widgetId: "p0.MyFirstModule.Magacin_Overview.text1",
                        class: "mx-name-text1",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Magacini" }, "args": {} }
                          })
                        ]),
                        renderMode: "h2"
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p0.MyFirstModule.Magacin_Overview.dataGrid2_1",
                        $widgetId: "p0.MyFirstModule.Magacin_Overview.dataGrid2_1",
                        advanced: false,
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p0.0",
                          "entity": "MyFirstModule.Magacin",
                          "operationId": "fXLA/m6hGFeFOdc60aS1tA",
                          "sort": []
                        }),
                        refreshInterval: 0,
                        itemSelection: SelectionProperty({
                          "selectionType": "Single",
                          "dataSourceId": "p0.0"
                        }),
                        itemSelectionMethod: "rowClick",
                        itemSelectionMode: "clear",
                        showSelectAllToggle: true,
                        loadingType: "spinner",
                        columns: [
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "MyFirstModule.Magacin",
                              "attribute": "nazivMagacina",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p0.0",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "naziv magacina" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p0.MyFirstModule.Magacin_Overview.textFilter1",
                                  $widgetId: "p0.MyFirstModule.Magacin_Overview.textFilter1",
                                  advanced: false,
                                  defaultValue: void 0,
                                  defaultFilter: "contains",
                                  placeholder: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  adjustable: true,
                                  delay: 500,
                                  onChange: void 0,
                                  screenReaderButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderInputCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                    })
                                  ]),
                                  class: "mx-name-textFilter1",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ],
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "fetchOptionsLazy": true,
                            "filterCaptionType": "expression",
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "allowEventPropagation": true,
                            "width": "autoFill",
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false
                          },
                          {
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "MyFirstModule.Magacin",
                              "attribute": "nazivMagacina",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p0.0",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p0.0",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p0.MyFirstModule.Magacin_Overview.actionButton2$visibility",
                                    $widgetId: "p0.MyFirstModule.Magacin_Overview.actionButton2$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p0.MyFirstModule.Magacin_Overview.actionButton2",
                                          $widgetId: "p0.MyFirstModule.Magacin_Overview.actionButton2",
                                          buttonId: "p0.MyFirstModule.Magacin_Overview.actionButton2",
                                          class: "mx-name-actionButton2 btn-lg",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "link",
                                          role: "button",
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "openPage", "argMap": { "param$Magacin": { "widget": "p0.MyFirstModule.Magacin_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/Magacin_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                                    key: "p0.MyFirstModule.Magacin_Overview.actionButton3",
                                    $widgetId: "p0.MyFirstModule.Magacin_Overview.actionButton3",
                                    buttonId: "p0.MyFirstModule.Magacin_Overview.actionButton3",
                                    class: "mx-name-actionButton3 btn-lg",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "link",
                                    role: "button",
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: WebIconProperty({
                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p0.MyFirstModule.Magacin_Overview.dataGrid2_1", "source": "object" } }, "config": { "closePage": false, "operationId": "07/Wcln7kVCQAWAyG7PUXw" }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }),
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "fetchOptionsLazy": true,
                            "filterCaptionType": "expression",
                            "sortable": false,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "no",
                            "allowEventPropagation": true,
                            "width": "autoFit",
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false
                          }
                        ],
                        columnsFilterable: true,
                        pageSize: 20,
                        pagination: "buttons",
                        showPagingButtons: "always",
                        showNumberOfRows: false,
                        pagingPosition: "bottom",
                        loadMoreButtonCaption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                          })
                        ]),
                        showEmptyPlaceholder: "none",
                        emptyPlaceholder: void 0,
                        rowClass: void 0,
                        onClickTrigger: "double",
                        onClick: void 0,
                        onSelectionChange: void 0,
                        columnsSortable: true,
                        columnsResizable: true,
                        columnsDraggable: true,
                        columnsHidable: true,
                        configurationStorageType: "attribute",
                        storeFiltersInPersonalization: true,
                        filterList: [],
                        filtersPlaceholder: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p0.MyFirstModule.Magacin_Overview.actionButton1$visibility",
                              $widgetId: "p0.MyFirstModule.Magacin_Overview.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p0.MyFirstModule.Magacin_Overview.actionButton1",
                                    $widgetId: "p0.MyFirstModule.Magacin_Overview.actionButton1",
                                    buttonId: "p0.MyFirstModule.Magacin_Overview.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Novi magacin" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: WebIconProperty({
                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add" }
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Magacin", "operationId": "pv/LBELeO1CZCgRk436UCQ", "pageSettings": { "name": "MyFirstModule/Magacin_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "allowedRoles": ["Administrator", "User"], "objectParameter": "param$Magacin" }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ],
                        filterSectionTitle: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        exportDialogLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                          })
                        ]),
                        cancelExportLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                          })
                        ]),
                        selectRowLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                          })
                        ]),
                        selectAllRowsLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                          })
                        ]),
                        class: "mx-name-dataGrid2_1",
                        style: void 0,
                        tabIndex: void 0
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
  "Magacin Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
