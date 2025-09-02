import { reactExports, asPluginWidgets, selectTranslation } from '../index-BEJ1cYf_.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-T_87vxEU.js';
import { Container, Text } from '../Image-BnSXKlV8.js';
import { Div } from '../Div-BjJtHDbv.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-d1ptF7q4.js';
import '../InlineText-BN7qT_GR.js';
import '../ActionButton-_caBVZhy.js';
import '../CTcC6PjV-CPkyqKwE.js';
import '../uEIG9e6s-DU5WxZZl.js';
import '../ListExpressionProperty-CZIn0qql.js';
import '../WebIconProperty-CuljiodT.js';
import '../WebStaticImageProperty-B-d3FKAx.js';

const React = { createElement: reactExports.createElement };
const { $Container, $Div, $Text } = asPluginWidgets({ Container, Div, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p20.MyFirstModule.Home_Web.container1",
      $widgetId: "p20.MyFirstModule.Home_Web.container1",
      class: "mx-name-container1 pageheader",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p20.MyFirstModule.Home_Web.layoutGrid2",
            $widgetId: "p20.MyFirstModule.Home_Web.layoutGrid2",
            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p20.MyFirstModule.Home_Web.layoutGrid2$row0",
                  $widgetId: "p20.MyFirstModule.Home_Web.layoutGrid2$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p20.MyFirstModule.Home_Web.layoutGrid2$row0$column0",
                        $widgetId: "p20.MyFirstModule.Home_Web.layoutGrid2$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p20.MyFirstModule.Home_Web.text1",
                              $widgetId: "p20.MyFirstModule.Home_Web.text1",
                              class: "mx-name-text1 pageheader-title spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Home" }, "args": {} }
                                })
                              ]),
                              renderMode: "h3"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p20.MyFirstModule.Home_Web.text3",
                              $widgetId: "p20.MyFirstModule.Home_Web.text3",
                              class: "mx-name-text3 pageheader-subtitle text-detail",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Getting started:\r\n- This page is the home page of your new app.\r\n- The Domain model defines your data structure.\r\n- The MyFirstLogic microflow shows how to start building app logic. \r\nBy doing a Right-click on the MyFirstModule you can add new pages, logic, or other documents to your app.\r\n\r\nFor a quick start: https://docs.mendix.com/quickstarts\r\n\r\n" }, "args": {} }
                                })
                              ]),
                              renderMode: "p"
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
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p20.MyFirstModule.Home_Web.layoutGrid1",
      $widgetId: "p20.MyFirstModule.Home_Web.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p20.MyFirstModule.Home_Web.layoutGrid1$row0",
            $widgetId: "p20.MyFirstModule.Home_Web.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p20.MyFirstModule.Home_Web.layoutGrid1$row0$column0",
                  $widgetId: "p20.MyFirstModule.Home_Web.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: void 0
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
  "Homepage"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
