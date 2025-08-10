import { addEnumerations, t } from "mendix";

export const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "638763c7-833f-4385-a2f0-cc2b9a95077b"
    },
    {
      "type": "javaScriptActionCall",
      "label": "ea30e08c-71c6-43c0-b933-6f70095c04c1",
      "action": () => require("C:/Poslovna/e2-Poslovna/PoslovnaProjekat/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackScreenshotWidget").JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "71fcc0cb-52a0-41e6-a2ee-53ef58843b95",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "59f4ddf3-8034-4690-9cb0-985c410d3895",
        "false": "2ee199fa-72cf-437a-b3c0-a2d23ad9060f"
      }
    },
    {
      "type": "jump",
      "label": "2ee199fa-72cf-437a-b3c0-a2d23ad9060f",
      "target": "42182a94-b0e6-4ad8-ac4c-33cf7e9bd568"
    },
    {
      "type": "jump",
      "label": "42182a94-b0e6-4ad8-ac4c-33cf7e9bd568",
      "target": "e4826ab5-5f8a-4674-ae4d-95b18e1f8834"
    },
    {
      "type": "jump",
      "label": "e4826ab5-5f8a-4674-ae4d-95b18e1f8834",
      "target": "ecb2880d-8e05-4cc2-affd-d5cf02057f2c"
    },
    {
      "type": "openForm",
      "label": "ecb2880d-8e05-4cc2-affd-d5cf02057f2c",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "02d47823-73aa-42f1-8f51-1b27be145f74",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "59f4ddf3-8034-4690-9cb0-985c410d3895",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "a72351b7-bc9c-4a4c-ac19-cd92b2cd9f90",
        "false": "73b5fa2c-16e9-4bd0-8c8e-8f4944b00a20"
      }
    },
    {
      "type": "return",
      "label": "73b5fa2c-16e9-4bd0-8c8e-8f4944b00a20",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "a72351b7-bc9c-4a4c-ac19-cd92b2cd9f90",
      "action": () => require("C:/Poslovna/e2-Poslovna/PoslovnaProjekat/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "5ca5e671-c3ca-4d86-b62d-f7587ddf717c",
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
        "true": "4cc79634-397c-492b-848f-d5e92e965d88",
        "false": "0652c2f2-bfd9-49c5-bca4-e283830b678b"
      }
    },
    {
      "type": "jump",
      "label": "0652c2f2-bfd9-49c5-bca4-e283830b678b",
      "target": "2805686b-6ef7-4e16-a40b-c0213de176a2"
    },
    {
      "type": "javaScriptActionCall",
      "label": "2805686b-6ef7-4e16-a40b-c0213de176a2",
      "action": () => require("C:/Poslovna/e2-Poslovna/PoslovnaProjekat/javascriptsource/feedbackmodule/actions/JS_SetSingleLocalStorageObjectItem").JS_SetSingleLocalStorageObjectItem,
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
            "type": "variable",
            "variable": "base64FromWidget"
          }
        }
      ]
    },
    {
      "type": "jump",
      "label": "e90a1f00-dc3e-4d88-aadc-e1722549110a",
      "target": "e4826ab5-5f8a-4674-ae4d-95b18e1f8834"
    },
    {
      "type": "jump",
      "label": "e4826ab5-5f8a-4674-ae4d-95b18e1f8834",
      "target": "ecb2880d-8e05-4cc2-affd-d5cf02057f2c"
    },
    {
      "type": "changeObject",
      "label": "4cc79634-397c-492b-848f-d5e92e965d88",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "KezTPtvealG9to9Prf7JUg",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "e4826ab5-5f8a-4674-ae4d-95b18e1f8834",
      "target": "ecb2880d-8e05-4cc2-affd-d5cf02057f2c"
    }
  ]
};
