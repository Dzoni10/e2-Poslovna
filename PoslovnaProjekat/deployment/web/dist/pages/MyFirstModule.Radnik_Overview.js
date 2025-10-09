import { reactExports, asPluginWidgets, selectTranslation } from '../index-9YRUqoZR.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BSTS-pb7.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-dhEFVOBy.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-DOzAOCvU.js';
import { ListAttributeProperty } from '../ListAttributeProperty-daqfkgGj.js';
import { SelectionProperty } from '../SelectionProperty-DPvgtBfJ.js';
import { DatagridTextFilterWidgetModule, TemplatedWidgetProperty } from '../DatagridTextFilter-BgBjCLui.js';
import { WebIconProperty } from '../WebIconProperty-DZSUe3JO.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D1kXRtZG.js';
import { DatagridWidgetModule } from '../Datagrid-CoF3q784.js';
import { Div } from '../Div-BEtJmTkn.js';
import { Text } from '../Image-DP5udpmp.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-DWMpWEK3.js';
import '../BkqAssms-CUfoyzkd.js';
import '../77kgvjgm-_yhfSwqC.js';
import '../InlineText-CCt9-DhP.js';
import '../ListExpressionProperty-woJl_eg3.js';
import '../WebStaticImageProperty-l2spNxXU.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $Text, $Datagrid, $DatagridTextFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Text, Datagrid, DatagridTextFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstModule.Radnik_Overview.layoutGrid1",
      $widgetId: "p.MyFirstModule.Radnik_Overview.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstModule.Radnik_Overview.layoutGrid1$row0",
            $widgetId: "p.MyFirstModule.Radnik_Overview.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstModule.Radnik_Overview.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstModule.Radnik_Overview.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p.MyFirstModule.Radnik_Overview.text1",
                        $widgetId: "p.MyFirstModule.Radnik_Overview.text1",
                        class: "mx-name-text1",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Radnik" }, "args": {} }
                          })
                        ]),
                        renderMode: "h2"
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p.MyFirstModule.Radnik_Overview.dataGrid2_1",
                        $widgetId: "p.MyFirstModule.Radnik_Overview.dataGrid2_1",
                        advanced: false,
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p.0",
                          "entity": "MyFirstModule.Radnik",
                          "operationId": "kuo0GCvMjlmXA52By4aTmw",
                          "sort": []
                        }),
                        refreshInterval: 0,
                        itemSelection: SelectionProperty({
                          "selectionType": "Single",
                          "dataSourceId": "p.0"
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
                              "entity": "MyFirstModule.Radnik",
                              "attribute": "Ime",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.0",
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
                                "expression": { "expr": { "type": "literal", "value": "Ime" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p.MyFirstModule.Radnik_Overview.textFilter2",
                                  $widgetId: "p.MyFirstModule.Radnik_Overview.textFilter2",
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
                                  class: "mx-name-textFilter2",
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
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "MyFirstModule.Radnik",
                              "attribute": "Prezime",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.0",
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
                                "expression": { "expr": { "type": "literal", "value": "Prezime" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p.MyFirstModule.Radnik_Overview.textFilter1",
                                  $widgetId: "p.MyFirstModule.Radnik_Overview.textFilter1",
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
                              "entity": "MyFirstModule.Radnik",
                              "attribute": "Ime",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.0",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.0",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MyFirstModule.Radnik_Overview.actionButton2$visibility",
                                    $widgetId: "p.MyFirstModule.Radnik_Overview.actionButton2$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MyFirstModule.Radnik_Overview.actionButton2",
                                          $widgetId: "p.MyFirstModule.Radnik_Overview.actionButton2",
                                          buttonId: "p.MyFirstModule.Radnik_Overview.actionButton2",
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
                                            "action": { "type": "openPage", "argMap": { "param$Radnik": { "widget": "p.MyFirstModule.Radnik_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/Radnik_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                                    key: "p.MyFirstModule.Radnik_Overview.actionButton3",
                                    $widgetId: "p.MyFirstModule.Radnik_Overview.actionButton3",
                                    buttonId: "p.MyFirstModule.Radnik_Overview.actionButton3",
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
                                      "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.MyFirstModule.Radnik_Overview.dataGrid2_1", "source": "object" } }, "config": { "closePage": false, "operationId": "pr1KZrbFRFqhWK9WXkIoWg" }, "disabledDuringExecution": true },
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
                              key: "p.MyFirstModule.Radnik_Overview.actionButton1$visibility",
                              $widgetId: "p.MyFirstModule.Radnik_Overview.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MyFirstModule.Radnik_Overview.actionButton1",
                                    $widgetId: "p.MyFirstModule.Radnik_Overview.actionButton1",
                                    buttonId: "p.MyFirstModule.Radnik_Overview.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "New Radnik" }, "args": {} }
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
                                      "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Radnik", "operationId": "0mKl6YRv0lGj2wUxj+BD8A", "pageSettings": { "name": "MyFirstModule/Radnik_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "allowedRoles": ["Administrator", "User"], "objectParameter": "param$Radnik" }, "disabledDuringExecution": true },
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
  "Radnik Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const autofocus = "off";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { autofocus, classes, content, style, title };
