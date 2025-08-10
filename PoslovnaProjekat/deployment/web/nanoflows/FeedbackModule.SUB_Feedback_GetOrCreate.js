import { addEnumerations, t } from "mendix";

export const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "a59c0303-3ef4-46ca-bbcd-7d77a687bb20",
      "action": () => require("C:/Poslovna/e2-Poslovna/PoslovnaProjekat/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "a2be3e34-2138-4e2c-87d8-b65bb3db8145",
      "condition": {
        "type": "function",
        "name": "=",
        "parameters": [
          {
            "type": "variable",
            "variable": "isStrictMode"
          },
          {
            "type": "literal",
            "value": false
          }
        ]
      },
      "targets": {
        "true": "bf74ccef-50b2-4ea3-831b-30c02e5cd1ce",
        "false": "efe9ec7b-c0e3-40bd-aec5-55e07c8afa7d"
      }
    },
    {
      "type": "jump",
      "label": "efe9ec7b-c0e3-40bd-aec5-55e07c8afa7d",
      "target": "30d05191-213e-40ab-8a15-7ca6ecd3ef69"
    },
    {
      "type": "nanoflowCall",
      "label": "30d05191-213e-40ab-8a15-7ca6ecd3ef69",
      "flow": () => require("C:/Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.Get_And_Set_Feedback_NPE").Get_And_Set_Feedback_NPE,
      "parameters": [],
      "outputVar": "StrictModeFeedback"
    },
    {
      "type": "return",
      "label": "0f5cdb5e-67f1-45ee-ae80-7195dd58fa04",
      "result": {
        "type": "variable",
        "variable": "StrictModeFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "tryCatch",
      "label": "bf74ccef-50b2-4ea3-831b-30c02e5cd1ce",
      "catchTarget": "65c81fb6-32e1-4e2e-8681-8f1af460fc4d",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require("C:/Poslovna/e2-Poslovna/PoslovnaProjekat/javascriptsource/feedbackmodule/actions/GetStorageItemObject").GetStorageItemObject,
          "outputVar": "LocalFeedback",
          "parameters": [
            {
              "kind": "primitive",
              "value": {
                "type": "constant",
                "name": "FeedbackModule.LocalStorageKey"
              }
            },
            {
              "kind": "primitive",
              "value": {
                "type": "literal",
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "cec9953e-443b-4627-bff6-75e124b248e6",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "a7dfe51f-578f-46bf-b4bf-8be6ed20399c",
        "true": "c3c12f3b-6d60-458c-9ae6-c16340c2c611"
      }
    },
    {
      "type": "return",
      "label": "c3c12f3b-6d60-458c-9ae6-c16340c2c611",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "a7dfe51f-578f-46bf-b4bf-8be6ed20399c",
      "target": "5bea65a2-b167-4768-93b0-b1d9099e235a"
    },
    {
      "type": "createObject",
      "label": "5bea65a2-b167-4768-93b0-b1d9099e235a",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "59457efe-72e9-4c64-995e-e7e5ca6220e9",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "65c81fb6-32e1-4e2e-8681-8f1af460fc4d",
      "target": "a7dfe51f-578f-46bf-b4bf-8be6ed20399c"
    },
    {
      "type": "jump",
      "label": "a7dfe51f-578f-46bf-b4bf-8be6ed20399c",
      "target": "5bea65a2-b167-4768-93b0-b1d9099e235a"
    }
  ]
};
