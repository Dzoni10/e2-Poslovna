import { addEnumerations, t } from "mendix";

export const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "0e96b640-65da-49db-adb1-718efa91b689",
      "operationId": "dZFxUSm68V2iPmTJQ1IXyQ",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "dc8f8ed1-760f-4460-abc5-682ed72e5013",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "ecbcb7f6-8939-493c-bce7-a591f472b5bb",
        "false": "6f2bf62a-4d71-4aee-b613-7c4cbe51ae9f"
      }
    },
    {
      "type": "return",
      "label": "6f2bf62a-4d71-4aee-b613-7c4cbe51ae9f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "ecbcb7f6-8939-493c-bce7-a591f472b5bb",
      "operationId": "wVx+l0GNI16PBKpa7/B41w",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "65d59618-e640-4c46-9df6-0e1dbc65531f",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "7ac21c97-48ef-41e6-b456-d44d234e7bb6",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "5454d477-3bbd-47a1-896d-05a606c4162c",
        "false": "f6f6c56d-e316-428e-8106-84ebfaa6e9e8"
      }
    },
    {
      "type": "jump",
      "label": "f6f6c56d-e316-428e-8106-84ebfaa6e9e8",
      "target": "93f78b6e-a440-4689-8c9f-fc4c61360279"
    },
    {
      "type": "openForm",
      "label": "93f78b6e-a440-4689-8c9f-fc4c61360279",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "9697cb0f-3f86-412b-a00d-ea4256506d57",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "5454d477-3bbd-47a1-896d-05a606c4162c",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "16e46266-05b1-4055-8d79-7f124f82774c",
      "flow": () => require("C:/Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.SUB_Feedback_ResetLocalStorage").SUB_Feedback_ResetLocalStorage,
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "1dd397af-fd43-4545-94b4-47067d012334",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
