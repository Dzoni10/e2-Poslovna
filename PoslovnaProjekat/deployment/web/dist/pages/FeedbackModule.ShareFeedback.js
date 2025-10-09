<<<<<<< HEAD
import { getAugmentedNamespace, getUserRoleNames, hideProgress, showProgress, selectTranslation, handleError, HandledError, toFriendlyId, LogManager, asProperty, getSession, DescribedError, fromConstant$, dynUnavailable, pageScope, getNanoflowArguments$, nanoflowEngine, ensure, readUntracked, MxObject, available, unavailable, reactExports, jsxRuntimeExports, classNames, asPluginWidgets } from '../index-JDXCDs53.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BMEt46hD.js';
import { fromObjectProperty$, ActionButton, TextProperty, ActionProperty } from '../ActionButton-CnZtpka2.js';
import { debounce, Alert, getAriaLabelProps, getValidationAriaProps, FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-RBW52cK-.js';
import { WebIconProperty } from '../WebIconProperty-Bon9K84_.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BVC6V75r.js';
import { ImageWidgetModule, Container, Text } from '../Image-D55d_j2j.js';
import { DataView } from '../DataView-BstQTMJi.js';
import { Div } from '../Div-CbKV9nto.js';
import { Label } from '../Label-CGlK2TV3.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-DeEIVNnx.js';
import { AttributeProperty } from '../D5tDSKpV-NCto3GtK.js';
import '../uEIG9e6s-D5bs4rlT.js';
import '../InlineText-BhumBKcU.js';
import '../bdxqAC6d-Crq0yb3P.js';
=======
<<<<<<< Updated upstream
import { handleError, HandledError, toFriendlyId, LogManager, asProperty, getSession, DescribedError, fromConstant$, dynUnavailable, pageScope, getNanoflowArguments$, nanoflowEngine, ensure, readUntracked, MxObject, available, unavailable, reactExports, jsxRuntimeExports, classNames, asPluginWidgets, selectTranslation } from '../index-BjSpTlX0.js';
import require$$0 from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.DS_Feedback_Populate';
import require$$1 from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.OCH_Feedback_SaveToLocalStorage';
import require$$2 from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.ACT_Feedback_TriggerScreenshotMode';
import require$$3 from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.ACT_Feedback_UploadImage';
import require$$4 from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.ACT_Feedback_ClearImage';
import require$$5 from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.ACT_Feedback_ClearForm';
import require$$6 from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/nanoflows/FeedbackModule.ACT_SubmitFeedback';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-DYUj9_Ay.js';
import { fromObjectProperty$, ActionButton, TextProperty, ActionProperty } from '../ActionButton-dNbAsczi.js';
import { debounce, Alert, getAriaLabelProps, getValidationAriaProps, FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-EdR2-wgr.js';
import { WebIconProperty } from '../WebIconProperty-B82XOhEa.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C8wONAJZ.js';
import { Container, Text } from '../Text-CHYWFktZ.js';
import { DataView } from '../DataView-PQPsNCJf.js';
import { Div } from '../Div-Dyf4zdHI.js';
import * as ImageWidgetModule from '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs';
import '../../../../../../../../Poslovna/e2-Poslovna/PoslovnaProjekat/deployment/web/widgets/com/mendix/widget/web/image/Image.css';
import { Label } from '../Label-CmauxnWL.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D-AdFqBx.js';
import { AttributeProperty } from '../77kgvjgm-4HZvSliz.js';
import '../BkqAssms-D3I0Q7ya.js';
import '../InlineText-BMWFPLMA.js';
import '../DmsI6saM-Dj1PYIQI.js';
=======
import { handleError, HandledError, toFriendlyId, LogManager, asProperty, getSession, DescribedError, fromConstant$, dynUnavailable, pageScope, getNanoflowArguments$, nanoflowEngine, ensure, readUntracked, MxObject, available, unavailable, reactExports, jsxRuntimeExports, classNames, getUserRoleNames, getAugmentedNamespace, hideProgress, showProgress, selectTranslation, asPluginWidgets } from '../index-DRM94Sf-.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-LSQoMZk3.js';
import { fromObjectProperty$, ActionButton, TextProperty, ActionProperty } from '../ActionButton-Vn_V_FOy.js';
import { debounce, Alert, getAriaLabelProps, getValidationAriaProps, FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CQj9lYLp.js';
import { WebIconProperty } from '../WebIconProperty-CkJqYHVz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C8wONAJZ.js';
import { ImageWidgetModule, Container, Text } from '../Image-DMmMe595.js';
import { DataView } from '../DataView-Di9rOy1O.js';
import { Div } from '../Div-DOhBQ24X.js';
import { Label } from '../Label-DhEzky-E.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-C12ql83v.js';
import { AttributeProperty } from '../77kgvjgm-Ckrt0mx6.js';
import '../BkqAssms-a3v8x28y.js';
import '../InlineText-Jv0dr_pn.js';
import '../DmsI6saM-AyKzfY6T.js';
>>>>>>> Stashed changes

function handleDataSourceExecutionError(widgetId, e, dataSourceType) {
  handleError(e instanceof HandledError ? e : new Error(`An error occurred while executing ${dataSourceType} data source for widget ${toFriendlyId(widgetId)}: ${e instanceof Error ? e.message : e}`));
}

const logger = LogManager.get().getLogger(), NanoflowObjectProperty = asProperty((config, store, widgetId) => {
  const allowedRoles = config.source.allowedRoles, session = getSession();
  if (void 0 !== allowedRoles && !session.hasSomeRole(allowedRoles))
    return handleError(new DescribedError("Unable to execute action because you do not have sufficient permissions.")), fromConstant$(dynUnavailable());
  const [currentForm$] = store.useSlot(pageScope, "form");
  return fromObjectProperty$(config, store, widgetId, getNanoflowArguments$(config.argMap, store, widgetId, `data source of ${widgetId}`), async (args) => {
    !function(args2) {
      logger.debug(`Fetching object using nanoflow '${config.source.nanoflow}' for widget ${toFriendlyId(widgetId)}`, "parameter mapping:", args2);
    }(args);
    try {
      const result = await nanoflowEngine.execute(config.source.nanoflow, args, ensure(readUntracked(currentForm$))[0]), mxObject = result instanceof MxObject ? result : void 0;
      return function(mxObject2) {
        logger.debug(mxObject2 ? `Received object '${mxObject2.getGuid()}' for widget ${toFriendlyId(widgetId)}` : `Received no object for widget ${toFriendlyId(widgetId)}`);
      }(mxObject), mxObject ? available(mxObject) : unavailable();
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "nanoflow"), unavailable();
<<<<<<< Updated upstream
=======
    }
  });
});

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var index$1 = reactExports.useLayoutEffect, updateRef = function(ref, value) {
  "function" != typeof ref ? ref.current = value : ref(value);
}, HIDDEN_TEXTAREA_STYLE = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0", display: "block" }, forceHiddenStyles$1 = function(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
}, hiddenTextarea = null, getHeight = function(node, sizingData) {
  var height = node.scrollHeight;
  return "border-box" === sizingData.sizingStyle.boxSizing ? height + sizingData.borderSize : height - sizingData.paddingSize;
};
var noop = function() {
}, SIZING_STYLE = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak", "wordSpacing", "scrollbarGutter"], isIE = !!document.documentElement.currentStyle, getSizingData$1 = function(node) {
  var style = window.getComputedStyle(node);
  if (null === style)
    return null;
  var obj, sizingStyle = (obj = style, SIZING_STYLE.reduce(function(acc, prop) {
    return acc[prop] = obj[prop], acc;
  }, {})), boxSizing = sizingStyle.boxSizing;
  return "" === boxSizing ? null : (isIE && "border-box" === boxSizing && (sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px"), { sizingStyle, paddingSize: parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop), borderSize: parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth) });
};
function useListener(target, type, listener) {
  var value, ref, latestListener = (value = listener, ref = reactExports.useRef(value), index$1(function() {
    ref.current = value;
  }), ref);
  reactExports.useLayoutEffect(function() {
    var handler = function(ev) {
      return latestListener.current(ev);
    };
    if (target)
      return target.addEventListener(type, handler), function() {
        return target.removeEventListener(type, handler);
      };
  }, []);
}
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], TextareaAutosize = function(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = void 0 === _ref$onChange ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = void 0 === _ref$onHeightChange ? noop : _ref$onHeightChange, props = function(r, e) {
    if (null == r)
      return {};
    var t = {};
    for (var n in r)
      if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n))
          continue;
        t[n] = r[n];
      }
    return t;
  }(_ref, _excluded), isControlled = void 0 !== props.value, libRef = reactExports.useRef(null), ref = function(libRef2, userRef2) {
    var prevUserRef = reactExports.useRef();
    return reactExports.useCallback(function(instance) {
      libRef2.current = instance, prevUserRef.current && updateRef(prevUserRef.current, null), prevUserRef.current = userRef2, userRef2 && updateRef(userRef2, instance);
    }, [userRef2]);
  }(libRef, userRef), heightRef = reactExports.useRef(0), measurementsCacheRef = reactExports.useRef(), resizeTextarea = function() {
    var node = libRef.current, nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (nodeSizingData) {
      measurementsCacheRef.current = nodeSizingData;
      var _calculateNodeHeight = function(sizingData, value, minRows2, maxRows2) {
        void 0 === minRows2 && (minRows2 = 1), void 0 === maxRows2 && (maxRows2 = 1 / 0), hiddenTextarea || ((hiddenTextarea = document.createElement("textarea")).setAttribute("tabindex", "-1"), hiddenTextarea.setAttribute("aria-hidden", "true"), forceHiddenStyles$1(hiddenTextarea)), null === hiddenTextarea.parentNode && document.body.appendChild(hiddenTextarea);
        var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle, boxSizing = sizingStyle.boxSizing;
        Object.keys(sizingStyle).forEach(function(_key) {
          var key = _key;
          hiddenTextarea.style[key] = sizingStyle[key];
        }), forceHiddenStyles$1(hiddenTextarea), hiddenTextarea.value = value;
        var height2 = getHeight(hiddenTextarea, sizingData);
        hiddenTextarea.value = value, height2 = getHeight(hiddenTextarea, sizingData), hiddenTextarea.value = "x";
        var rowHeight2 = hiddenTextarea.scrollHeight - paddingSize, minHeight = rowHeight2 * minRows2;
        "border-box" === boxSizing && (minHeight = minHeight + paddingSize + borderSize), height2 = Math.max(minHeight, height2);
        var maxHeight = rowHeight2 * maxRows2;
        return "border-box" === boxSizing && (maxHeight = maxHeight + paddingSize + borderSize), [height2 = Math.min(maxHeight, height2), rowHeight2];
      }(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
      heightRef.current !== height && (heightRef.current = height, node.style.setProperty("height", height + "px", "important"), onHeightChange(height, { rowHeight }));
    }
  };
  return reactExports.useLayoutEffect(resizeTextarea), function(libRef2, listener) {
    useListener(document.body, "reset", function(ev) {
      libRef2.current.form === ev.target && listener(ev);
    });
  }(libRef, function() {
    if (!isControlled) {
      var currentValue = libRef.current.value;
      requestAnimationFrame(function() {
        var node = libRef.current;
        node && currentValue !== node.value && resizeTextarea();
      });
    }
  }), useListener(window, "resize", resizeTextarea), function(listener) {
    useListener(document.fonts, "loadingdone", listener);
  }(resizeTextarea), reactExports.createElement("textarea", _extends({}, props, { onChange: function(event) {
    isControlled || resizeTextarea(), onChange(event);
  }, ref }));
}, index = reactExports.forwardRef(TextareaAutosize);
class TextArea extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = {}, this.onChangeHandler = this.onChange.bind(this), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this), this.onChangeBehaviourHandler = this.createOnChangeBehaviour();
  }
  componentDidMount() {
    const maxLength = this.props.maxLength;
    void 0 !== maxLength && this.props.inputValue.setValidator((val) => void 0 !== val && val.length > maxLength ? this.props.textTooLongMessage.value : void 0);
  }
  componentDidUpdate(prevProps) {
    this.props.inputValue.displayValue !== prevProps.inputValue.displayValue && this.setState({ editedValue: void 0 }), "available" !== prevProps.inputValue.status && "available" === this.props.inputValue.status && this.props.autoGrow && setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
  }
  createOnChangeBehaviour() {
    return this.props.submitWhileEditing ? debounce(this.submitValue.bind(this), ensure(this.props.submitDelay)) : () => {
    };
  }
  getCurrentValue() {
    return this.state.editedValue ?? this.props.inputValue.displayValue;
  }
  submitValue() {
    const inputValue = this.props.inputValue, currentValue = this.getCurrentValue();
    currentValue !== inputValue.displayValue ? inputValue.setValue(currentValue) : this.setState({ editedValue: void 0 });
  }
  onChange(e) {
    this.setState({ editedValue: e.target.value }, () => {
      !this.props.inputValue.readOnly && e.target instanceof HTMLTextAreaElement && document.activeElement !== e.target && this.submitValue();
    }), this.onChangeBehaviourHandler();
  }
  onFocus() {
    this.dispatchAction("onEnter");
  }
  onBlur() {
    this.submitValue(), this.dispatchAction("onLeave");
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [this.props.inputValue.readOnly && "control" !== this.props.readOnlyStyle ? this.renderAsText() : this.renderAsInput(), this.renderCounterMessage(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.inputValue.validation })] });
  }
  renderCounterMessage() {
    return !this.props.inputValue.readOnly && this.props.maxLength && this.props.counterMessage?.value ? jsxRuntimeExports.jsx("label", { className: "mx-textarea-counter", children: this.props.counterMessage.value.replace("{1}", this.getCurrentValue().length.toString()).replace("{2}", this.props.maxLength.toString()) }) : null;
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(index, { id: this.props.id, className: classNames("form-control", "mx-textarea-input", { "mx-textarea-noresize": !this.props.autoGrow }), value: this.getCurrentValue(), tabIndex: this.props.tabIndex, maxLength: this.props.maxLength, minRows: this.props.autoGrow ? 2 : this.props.numberOfLines, maxRows: this.props.autoGrow ? void 0 : this.props.numberOfLines, placeholder: this.props.placeholder.value && this.props.placeholder.value.length > 0 ? this.props.placeholder.value : void 0, onChange: this.onChangeHandler, onFocus: this.onFocusHandler, onBlur: this.onBlurHandler, disabled: this.props.inputValue.readOnly, ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.inputValue.validation, this.props.id), "aria-required": this.props.ariaRequired });
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: this.getCurrentValue() || "\xA0" });
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.inputValue.status && prop && prop.execute();
  }
}

// BEGIN EXTRA CODE
const handleUserRoles = async () => {
  try {
    let userRoles;
    if (typeof mx !== "undefined" && typeof mx.session === "object" && typeof mx.session.getUserRoleNames === "function") {
      userRoles = mx.session.getUserRoleNames();
    } else if (typeof getUserRoleNames !== "function" || getUserRoleNames === undefined) {
      userRoles = getUserRoleNames();
    } else {
      console.error("Feedback module cannot access a valid user role retrieval function.");
      return undefined;
    }
    if (!Array.isArray(userRoles) || userRoles.length === 0) {
      console.error("User roles not available or empty.");
      return undefined;
    }
    return userRoles[0];
  } catch (error) {
    console.error("Feedback module failed to get the user role name.", error);
    return undefined;
  }
};
const handlePagePath = async () => {
  try {
    if (typeof mx !== "undefined" && typeof mx.ui.getContentForm === "function" && typeof mx.ui.getContentForm().path !== "undefined") {
      return mx.ui.getContentForm().path;
    } else {
      return window.history.state.pageName;
    }
  } catch (error) {
    console.error("Feedback module cannot get the Mendix App page name", error);
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Returns meta data from the clients internet browser. 
 * 
 * This includes; 
 * 
 * ActiveUserRoles
 * PageName
 * EnvironmentURL
 * Browser
 * ScreenWidth
 * ScreenHeight
 * @param {MxObject} feedback
 * @returns {Promise.<MxObject>}
 */
async function JS_PopulateFeedbackMetadata(feedback) {
  // BEGIN USER CODE
  try {
    const userRoles = await handleUserRoles();
    const pagePath = await handlePagePath();
    feedback.set("ActiveUserRoles", userRoles || "");
    feedback.set("PageName", pagePath || "");
    feedback.set("EnvironmentURL", window.location.href || "");
    feedback.set("Browser", navigator.userAgent || "");
    feedback.set("ScreenWidth", window.screen.width || "");
    feedback.set("ScreenHeight", window.screen.height || "");
    return feedback;
  } catch (error) {
    console.error("Feedback Module cannot correctly set meta data.", error);
  }
  ;
  // END USER CODE
}

var JS_PopulateFeedbackMetadata$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_PopulateFeedbackMetadata: JS_PopulateFeedbackMetadata
});

var require$$0$4 = /*@__PURE__*/getAugmentedNamespace(JS_PopulateFeedbackMetadata$1);

var AsyncStorage = {};

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Store a Mendix object in device storage, identified by a unique key. Can be accesed by the GetStargeItemObject action. Please note that users can clear the device storage.
 * @param {string} key - This field is required.
 * @param {MxObject} value - This field is required.
 * @returns {Promise.<void>}
 */
async function SetStorageItemObject(key, value) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!value) {
    return Promise.reject(new Error("Input parameter 'Value' is required"));
  }
  const serializedObject = serializeMxObject(value);
  return setItem(key, JSON.stringify(serializedObject));
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce((accumulator, attributeName) => {
      accumulator[attributeName] = object.get(attributeName);
      return accumulator;
    }, {
      guid: object.getGuid()
    });
  }
  // END USER CODE
}

var SetStorageItemObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SetStorageItemObject: SetStorageItemObject
});

var require$$0$3 = /*@__PURE__*/getAugmentedNamespace(SetStorageItemObject$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<void>}
 */
async function JS_Recalculate_MendixModal_Error_PopUp_Zindex() {
  // BEGIN USER CODE

  function setModalZindex(cssSelector, zIndexValue) {
    try {
      const htmlElement = document.querySelectorAll(cssSelector);
      if (!htmlElement.length) {
        return;
      }
      htmlElement.forEach(item => item.style.zIndex = zIndexValue);
    } catch (error) {
      console.warn("Feedback Module JS Action JS_Recalculate_Modal_Zindex could not execute correctly.", error);
    }
  }
  ;
  setTimeout(() => {
    setModalZindex(".mx-dialog-info, mx-dialog-warning, .mx-dialog-error", "90");
    setModalZindex(".mx-underlay", "80");
  }, 500);
  // END USER CODE
}

var JS_Recalculate_MendixModal_Error_PopUp_Zindex$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_Recalculate_MendixModal_Error_PopUp_Zindex: JS_Recalculate_MendixModal_Error_PopUp_Zindex
});

var require$$2$1 = /*@__PURE__*/getAugmentedNamespace(JS_Recalculate_MendixModal_Error_PopUp_Zindex$1);
>>>>>>> feat/sales-domain

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<boolean>}
 */
async function JS_isStrictMode() {
  // BEGIN USER CODE
  return new Promise(resolve => {
    try {
      mx.data.create({
        entity: "FeedbackModule.Feedback",
        callback: obj => {
          mx.data.remove({
            guid: obj.getGuid(),
            callback: () => resolve(false),
            error: () => resolve(false)
          });
        },
        error: () => resolve(false)
      });
    } catch (err) {
      if (err.message.includes("mx.data.create is disabled")) {
        resolve(true);
      } else {
        resolve(true);
      }
    }
  });
  // END USER CODE
}

var JS_isStrictMode$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_isStrictMode: JS_isStrictMode
});

var require$$1$2 = /*@__PURE__*/getAugmentedNamespace(JS_isStrictMode$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Get locally stored JSON object stored in clients internet browser. Identified by a unique key. Can be accessed by the GetStorageItemObject action. Please note that users can clear the device storage.
 * @param {string} key - This field is required.
 * @param {string} entity - This field is required.
 * @returns {Promise.<MxObject>}
 */
async function GetStorageItemObject(key, entity) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!entity) {
    return Promise.reject(new Error("Input parameter 'Entity' is required"));
  }
  return getItem(key).then(result => {
    if (result === null) {
      return Promise.reject(new Error(`Storage item '${key}' does not exist`));
    }
    const value = JSON.parse(result);
    return getOrCreateMxObject(entity, value).then(newObject => {
      const newValue = serializeMxObject(newObject);
      return setItem(key, JSON.stringify(newValue)).then(() => newObject);
    });
  });
  function getItem(key) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.getItem(key);
    }
    if (window) {
      const value = window.localStorage.getItem(key);
      return Promise.resolve(value);
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function getOrCreateMxObject(entity, value) {
    return getMxObject(value.guid).then(existingObject => {
      if (existingObject) {
        return existingObject;
      } else {
        return createMxObject(entity, value);
      }
    });
  }
  function getMxObject(guid) {
    return new Promise((resolve, reject) => {
      mx.data.get({
        guid,
        callback: mxObject => resolve(mxObject),
        error: error => reject(error)
      });
    });
  }
  function createMxObject(entity, value) {
    return new Promise((resolve, reject) => {
      mx.data.create({
        entity,
        callback: mxObject => {
          Object.keys(value).filter(attribute => attribute !== "guid").forEach(attributeName => {
            const attributeValue = value[attributeName];
            mxObject.set(attributeName, attributeValue);
          });
          resolve(mxObject);
        },
        error: () => reject(new Error(`Could not create '${entity}' object`))
      });
    });
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce((accumulator, attributeName) => {
      accumulator[attributeName] = object.get(attributeName);
      return accumulator;
    }, {
      guid: object.getGuid()
    });
  }
  // END USER CODE
}

var GetStorageItemObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GetStorageItemObject: GetStorageItemObject
});

var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(GetStorageItemObject$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} localStorageKey
 * @param {string} objectItemKey
 * @returns {Promise.<string>}
 */
async function JS_GetSingleLocalStorageObjectItem(localStorageKey, objectItemKey) {
  var _parsedObject$objectI;
  // BEGIN USER CODE
  if (!localStorageKey) {
    return Promise.reject(new Error("Input parameter 'localStorageKey' is required"));
  }
  if (!objectItemKey) {
    return Promise.reject(new Error("Input parameter 'objectItemKey' is required"));
  }
  const localObject = window.localStorage.getItem(localStorageKey);
  const parsedObject = JSON.parse(localObject);
  const singleItem = (_parsedObject$objectI = parsedObject === null || parsedObject === void 0 ? void 0 : parsedObject[objectItemKey]) !== null && _parsedObject$objectI !== void 0 ? _parsedObject$objectI : "";
  return Promise.resolve(singleItem);
  // END USER CODE
}

var JS_GetSingleLocalStorageObjectItem$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_GetSingleLocalStorageObjectItem: JS_GetSingleLocalStorageObjectItem
});

var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(JS_GetSingleLocalStorageObjectItem$1);

const Get_And_Set_Feedback_NPE = {
  "name": "FeedbackModule.Get_And_Set_Feedback_NPE",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "fc75dfbe-58c7-4d4f-bc07-5ce4fccc70cc",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "AppID",
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
            "value": "AppID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "6a2b23ad-c00f-4bd6-b074-d0d460d3c7a3",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "Subject",
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
            "value": "Subject"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "288d074f-4d8a-4609-8285-1e33ab3e9c77",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "Description",
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
            "value": "Description"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "d40863a3-8f3f-41ee-920d-57c8010047cf",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterUUID",
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
            "value": "SubmitterUUID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "b68870a5-91f9-4cde-ba5c-ad572744eca0",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterEmail",
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
            "value": "SubmitterEmail"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "1a8a628e-f2b5-4a6b-b7c4-33b7b6101f39",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterDisplayName",
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
            "value": "SubmitterDisplayName"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "81672744-355a-4439-8db5-8b16a910b370",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "ImageB64",
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
            "value": "ImageB64"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "56b8baee-3660-4cc5-a331-416bdb3b4303",
      "action": () => require$$0$2.JS_GetSingleLocalStorageObjectItem,
      "outputVar": "_showEmail",
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
            "value": "_showEmail"
          }
        }
      ]
    },
    {
      "type": "createObject",
      "label": "41fa0ece-c978-4c18-8e10-77f0586ad647",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "AppID",
      "value": {
        "type": "variable",
        "variable": "AppID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Subject",
      "value": {
        "type": "variable",
        "variable": "Subject"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Description",
      "value": {
        "type": "variable",
        "variable": "Description"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "variable",
        "variable": "SubmitterUUID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "variable",
        "variable": "SubmitterEmail"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "variable",
        "variable": "SubmitterDisplayName"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "ImageB64"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "_showEmail"
            },
            {
              "type": "literal",
              "value": "true"
            }
          ]
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "literal",
          "value": false
        }
      }
    },
    {
      "type": "return",
      "label": "63574191-fe2f-4a95-8486-6f017cd3883b",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    }
  ]
};

const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "a59c0303-3ef4-46ca-bbcd-7d77a687bb20",
      "action": () => require$$1$2.JS_isStrictMode,
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
      "flow": () => Get_And_Set_Feedback_NPE,
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
          "action": () => require$$1$1.GetStorageItemObject,
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

const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "cd568966-f70f-457e-9e16-bccc0c080bef",
      "flow": () => SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "7116d227-229b-403e-b162-1b81e345f432",
      "operationId": "UfgOPEV80VikxxkixdWIEA",
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
      "type": "changeObject",
      "label": "d6b0258f-db3e-47f3-98e3-18d6660d8e48",
      "inputVar": "Feedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "variable",
          "variable": "Feedback",
          "path": "_showEmail"
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "conditional",
          "condition": {
            "type": "conditional",
            "condition": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": null
                }
              ]
            },
            "then": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": ""
                }
              ]
            },
            "else": {
              "type": "literal",
              "value": false
            }
          },
          "then": {
            "type": "literal",
            "value": false
          },
          "else": {
            "type": "literal",
            "value": true
          }
        }
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "d114431a-11b9-4a04-9e16-85b6192a47f5",
      "action": () => require$$0$4.JS_PopulateFeedbackMetadata,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "dd69660f-0e69-4bad-b7fd-ba6b82b5dc9e",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "90b1dfa1-2178-4f09-8909-2353327df6f9",
      "action": () => require$$2$1.JS_Recalculate_MendixModal_Error_PopUp_Zindex,
      "parameters": []
    },
    {
      "type": "return",
      "label": "e9de4292-ad53-498a-acf5-a18012391f43",
      "result": {
        "type": "variable",
        "variable": "Feedback"
      },
      "resultKind": "object"
    }
  ]
};

// BEGIN EXTRA CODE
// messageActionTypes are to identify the postMessage types between the JS Action & Feedback Widget.
const messageAction_toggleAnnotateMode$1 = "mxFeedbackWidget_toggleScreenshotMode"; // The Feedback widget reads this to trigger a specific screenshot mode stage.
const messageAction_isBase64$1 = "mxFeedbackWidget_convertedToBase64"; // We expect this string from the widget when screenshot mode in enabled.
const messageAction_actionCancelled$1 = "mxFeedbackWidget_actionCancelled"; // The Feedback widget will send this back if screenshot/annotation actions are cancelled by the user.

/* 
	The widget and JS action communicate with the following postMessage object structure:
	messageObject = {messageActionType: string;messageData: string;}
*/
const messageObject = {
  "messageActionType": messageAction_toggleAnnotateMode$1 //The Feedback widget reads this to trigger a specific Mode.
};
const parseJson = event => {
  try {
    return JSON.parse(event);
  } catch {
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * Lets to take a screenshot of the current visible page
 * 
 * More detailed explanation:
 * The Mendix Feedback Widget handles annotation, screenshot and also renders a default styled button on your page. 
 * 
 * Usage:
 * You should use this JavaScript action to trigger the screenshot functionality.
 * 
 * Return Type:
 * Will return a image base64 string
 * 
 * @returns {Promise.<string>}
 */
async function JS_ToggleFeedbackScreenshotWidget() {
  // BEGIN USER CODE
  postMessage(JSON.stringify(messageObject), window.origin); // Send a message to the Feedback Wiget to trigger screenshot mode.

  return new Promise(resolve => {
    function handleEvent(event) {
      const parsedData = parseJson(event.data);
      if (parsedData && event.origin === window.origin) {
        if (parsedData.messageActionType === messageAction_isBase64$1) {
          window.removeEventListener("message", handleEvent);
          resolve(parsedData.messageData); // Resolve & return the base64 image to the nanoflow.
        }
        ;
        if (parsedData.messageActionType === messageAction_actionCancelled$1) {
          resolve("uploadCancelled");
        }
      }
    }
    ;
    window.addEventListener("message", handleEvent); // Listen and wait for the Feedback Widget to send back the edited screenshot as base64.
  });
  // END USER CODE
}

var JS_ToggleFeedbackScreenshotWidget$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_ToggleFeedbackScreenshotWidget: JS_ToggleFeedbackScreenshotWidget
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(JS_ToggleFeedbackScreenshotWidget$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} localStorageKey
 * @param {string} imageDataB64
 * @returns {Promise.<void>}
 */
async function JS_SetSingleLocalStorageObjectItem(localStorageKey, imageDataB64) {
  // BEGIN USER CODE
  if (!localStorageKey) {
    return Promise.reject(new Error("Input parameter 'localStorageKey' is required"));
  }
  const existingData = window.localStorage.getItem(localStorageKey);
  let parsedData = {};
  if (existingData) {
    try {
      parsedData = JSON.parse(existingData);
    } catch (error) {
      console.warn(`Failed to parse existing localStorage data. Overwriting.`, error);
    }
  }
  parsedData.ImageB64 = imageDataB64;
  window.localStorage.setItem(localStorageKey, JSON.stringify(parsedData));
  return Promise.resolve();
  // END USER CODE
}

var JS_SetSingleLocalStorageObjectItem$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_SetSingleLocalStorageObjectItem: JS_SetSingleLocalStorageObjectItem
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(JS_SetSingleLocalStorageObjectItem$1);

const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "638763c7-833f-4385-a2f0-cc2b9a95077b"
    },
    {
      "type": "javaScriptActionCall",
      "label": "ea30e08c-71c6-43c0-b933-6f70095c04c1",
      "action": () => require$$0$1.JS_ToggleFeedbackScreenshotWidget,
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
      "action": () => require$$1$2.JS_isStrictMode,
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
      "action": () => require$$2.JS_SetSingleLocalStorageObjectItem,
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

// BEGIN EXTRA CODE
var isUploading = false;
async function storeFileAndGetResourceUrl(file) {
  return URL.createObjectURL(file); // Saves the file to locally memory and returns a URL path to the Blob object.
}
;
function removeDomElements(_ref) {
  let {
    fileInput,
    progressId
  } = _ref;
  console.log("progressId", progressId);
  if (progressId) hideProgress({
    progressId
  });
  if (fileInput) document.body.removeChild(fileInput);
  isUploading = false;
}
;
function validateFileTypes(_ref2) {
  let {
    acceptedTypes,
    fileType
  } = _ref2;
  if (!acceptedTypes && !fileType) return false;
  const accepted = acceptedTypes.split(",");
  return accepted.some(type => new RegExp(type).test(fileType));
}
;
function validateFileSize(_ref3) {
  let {
    uploadedFile,
    maxSize
  } = _ref3;
  if (!uploadedFile && !maxSize) return false;
  const uploadedSize = uploadedFile.size / 1024 / 1024; // Convert to MB
  return uploadedSize < maxSize.c[0] + 0.1; // 0.1 MB extra tolerance
}
;
// END EXTRA CODE

/**
 * What does this JavaScript Action do?
 * 
 * This is a custom build JavaScript Action that triggers the file upload dialog box to open in your internet browser. 
 * 
 * Dependency Note: 
 * This JavaScript action should be used with the JavaScript Action called 'JS_RevokeUploadedFileFromMemory' so that the image uploaded is removed from local memory :)
 * 
 * Explanation of this JavaScript Action & Memory management.
 * 
 * We use createObjectURL() to upload and store files in local memory. We can access and cosume this in memory image resource via the URL path that is returned from the createObjectURL() method. 
 * 
 * However, each time you call createObjectURL(), a new object is created in memory, even if you've already created one for the same object. 
 * So each of these must be released by calling the JS Action called 'JS_RevokeUploadedFileFromMemory' when you no longer need them.
 * 
 * Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so with the JavaScriptAction called 'JS_RevokeUploadedFileFromMemory'.
 * @param {string} userDefined_mimeTypes
 * @param {Big} userDefined_fileUploadSize
 * @returns {Promise.<string>}
 */
async function JS_UploadAndConvertToFileBlobURL(userDefined_mimeTypes, userDefined_fileUploadSize) {
  // BEGIN USER CODE
  return new Promise((resolve, reject) => {
    try {
      // Create and append the HTML input element to the body
      const fileInput = document.createElement("input");
      fileInput.style.position = "absolute";
      fileInput.style.left = "-9999px";
      fileInput.name = "fileupload";
      fileInput.id = "fileupload";
      fileInput.type = "file";
      if (userDefined_mimeTypes) {
        fileInput.accept = userDefined_mimeTypes;
      }
      fileInput.multiple = false;
      fileInput.onchange = handleFileUpload;
      document.body.appendChild(fileInput);
      fileInput.addEventListener("cancel", () => resolve("uploadCancelled"));
      fileInput.click();

      // A function used to validate & store the uploaded file to local memory.
      function handleFileUpload(event) {
        isUploading = true;
        const newFile = event.target.files[0];
        const progressId = showProgress();

        // Check if the uploaded file type matches the user defined accepted types.
        if (!validateFileTypes({
          acceptedTypes: fileInput.accept,
          fileType: newFile.type
        })) {
          removeDomElements({
            fileInput,
            progressId
          });
          return resolve("fileTypeNotAccepted");
        }
        // Check if the uploaded file matches the user defined upload size.
        if (!validateFileSize({
          uploadedFile: newFile,
          maxSize: userDefined_fileUploadSize
        })) {
          removeDomElements({
            fileInput,
            progressId
          });
          return resolve("fileSizeNotAccepted");
        }
        // Store file locally on users device and return path to resource.
        storeFileAndGetResourceUrl(newFile).then(fileBlobURL => {
          if (fileBlobURL && typeof fileBlobURL === "string") {
            removeDomElements({
              fileInput,
              progressId
            });
            return resolve(fileBlobURL);
          } else {
            removeDomElements({
              fileInput,
              progressId
            });
            return resolve("fileNotConverted");
          }
        });
      }
      ;
    } catch (error) {
      reject(error);
    }
    ;
  });
  // END USER CODE
}

var JS_UploadAndConvertToFileBlobURL$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_UploadAndConvertToFileBlobURL: JS_UploadAndConvertToFileBlobURL
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(JS_UploadAndConvertToFileBlobURL$1);

// BEGIN EXTRA CODE
// messageActionTypes are to identify the postMessage types between the JS Action & Feedback Widget.
const messageAction_toggleAnnotateMode = "mxFeedbackWidget_toggleAnnotateMode"; // The Feedback widget reads this to trigger a specific screenshot mode stage.
const messageAction_isBase64 = "mxFeedbackWidget_convertedToBase64"; // We expect this string from the widget when screenshot mode in enabled.
const messageAction_actionCancelled = "mxFeedbackWidget_actionCancelled"; // The Feedback widget will send this back if screenshot/annotation actions are cancelled by the user.

const parseJSON = event => {
  try {
    return JSON.parse(event);
  } catch {
    return undefined;
  }
};
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * When you upload a screenshot manually the image can be annotatated. 
 * 
 * More detailed explanation:
 * The Mendix Feedback Widget handles annotation and also renders a default styled button on your page. 
 * 
 * In order to trigger the annotation mode you have to use this JavaScript action to send the widget the correct image payload.
 * 
 * Return Type:
 * Will return base 64 image string
 * @param {string} fileBlobURL
 * @returns {Promise.<string>}
 */
async function JS_ToggleFeedbackAnnotateWidget(fileBlobURL) {
  // BEGIN USER CODE
  /* 
  The widget and JS action communicate with the following postMessage object structure:
  messageObject = {messageActionType: string;messageData: string;}
  */
  const messageObject = {
    "messageActionType": messageAction_toggleAnnotateMode,
    // The widget reads this to trigger the Annotate Mode.
    "messageData": fileBlobURL // The widget uses this URL reference to get access to the locally stored image blob.
  };
  postMessage(JSON.stringify(messageObject), window.origin); // Send the serialized message object to Feedback Wiget to trigger annotate mode.

  return new Promise(resolve => {
    function handleEvent(event) {
      const parsedData = parseJSON(event.data); // Convert the received string to an object.

      if (event.origin === window.origin) {
        if (parsedData && parsedData.messageActionType === messageAction_isBase64) {
          window.removeEventListener("message", handleEvent);
          resolve(parsedData.messageData); // Resolve & return the base64 image to the nanoflow.
        }
        ;
        if (parsedData && parsedData.messageActionType === messageAction_actionCancelled) {
          resolve();
        }
      }
    }
    ;
    window.addEventListener("message", handleEvent); // Listen and wait for the Feedback Widget to send the base64 image.
  });
  // END USER CODE
}

var JS_ToggleFeedbackAnnotateWidget$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_ToggleFeedbackAnnotateWidget: JS_ToggleFeedbackAnnotateWidget
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(JS_ToggleFeedbackAnnotateWidget$1);

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * What does this JavaScript action do?
 * 
 * After you have uploaded an image it removes locally stored image from memory. This is a custom build action.
 * 
 * Dependency Note: 
 * This JavaScript action should be used only when you have inserted the Image Upload JavaScript Action called 'JS_UploadAndConvertToFileBlobURL' into your nanoflow.
 * 
 * More detailed explanation:  Memory management.
 * 
 * To upload a image we use a custom build Javascript action called  'JS_UploadAndConvertToFileBlobURL'.
 * Inside this action we use a JavaScript method called createObjectURL() to upload and store files in local memory. We can access and cosume this in memory image resource via the URL path that is returned from the createObjectURL() method. 
 * 
 * However, each time you call createObjectURL(), a new object is created in memory, even if you've already created one for the same object. 
 * So each of these must be released by calling this action called 'JS_RevokeUploadedFileFromMemory' when you no longer need them.
 * 
 * Browsers will release object URLs automatically when the document is unloaded; however, for optimal performance and memory usage, if there are safe times when you can explicitly unload them, you should do so with the JavaScriptAction called 'JS_RevokeUploadedFileFromMemory'.
 * @param {string} fileBlobURL - You have to pass the fileBlobURL that was created using the URL.createObjectURL() in the JS Action called 'JS_UploadAndConvertToFileBlobURL'
 * @returns {Promise.<void>}
 */
async function JS_RevokeUploadedFileFromMemory(fileBlobURL) {
  // BEGIN USER CODE
  /* We use the URL.createObjectURL() static method which creates a string containing a URL representing the
     image uploaded. 
     The image blob is stored in the clients browser and takes up memory whilst the session is active. So here we 
     revoke the image when the user deletes the image. Note that the image is automaticlly revoked when the browser refreshes
     or closes.
  
     You have to pass the fileBlobURL that was created using the URL.createObjectURL() in the JS Action called 'JS_UploadAndConvertToFileBlobURL'
   */
  if (fileBlobURL && typeof fileBlobURL === "string") {
    URL.revokeObjectURL(fileBlobURL);
  } else {
    throw new Error("Image was not removed from browser memory");
  }
  // END USER CODE
}

var JS_RevokeUploadedFileFromMemory$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_RevokeUploadedFileFromMemory: JS_RevokeUploadedFileFromMemory
});

var require$$3 = /*@__PURE__*/getAugmentedNamespace(JS_RevokeUploadedFileFromMemory$1);

const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "instructions": [
    {
      "type": "setVariable",
      "label": "c8ca7a74-8f93-49e4-9825-2f73a5c82b5d",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "546b12ac-9419-4997-8673-3f76430dbb26",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "83bef3c3-3e65-4d12-89d3-172d61d1bb4d",
      "action": () => require$$0.JS_UploadAndConvertToFileBlobURL,
      "outputVar": "fileBlobURL",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "mimeTypes"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileUploadSize"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "01092b34-fed7-44ed-8b87-beda59f3eab3",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "f860dce0-b64f-4d0d-9fcd-3ac8406be650",
        "false": "9e416061-a40a-464e-ab02-9a2c208175e0"
      }
    },
    {
      "type": "return",
      "label": "9e416061-a40a-464e-ab02-9a2c208175e0",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "f860dce0-b64f-4d0d-9fcd-3ac8406be650",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "06cd272e-aa4d-435d-9640-0b0649dc0de1",
        "true": "7453e083-cd16-462c-b943-26d1b5d56f9c"
      }
    },
    {
      "type": "switch",
      "label": "7453e083-cd16-462c-b943-26d1b5d56f9c",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileSizeNotAccepted"
          }
        ]
      },
      "targets": {
        "true": "cea84e89-0b63-44c8-b93e-18d3fa5ccbd2",
        "false": "8341eb0c-4020-4ff9-a304-ed94e6738de9"
      }
    },
    {
      "type": "showMessage",
      "label": "8341eb0c-4020-4ff9-a304-ed94e6738de9",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Maximum image size allowed is 5MB."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "79e08af5-20d9-4d7f-8a26-9b0bc8a459c9",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "cea84e89-0b63-44c8-b93e-18d3fa5ccbd2",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileTypeNotAccepted"
          }
        ]
      },
      "targets": {
        "false": "d026c7e2-515d-4bc0-8262-b6705557bbaa",
        "true": "4dbf279b-e812-4ce7-a6f0-65b2b91e0f01"
      }
    },
    {
      "type": "closeForm",
      "label": "4dbf279b-e812-4ce7-a6f0-65b2b91e0f01"
    },
    {
      "type": "javaScriptActionCall",
      "label": "691a0af6-85f9-491d-b874-912b36a6b616",
      "action": () => require$$1.JS_ToggleFeedbackAnnotateWidget,
      "outputVar": "base64ImageFromWidget",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "8cb5a7ce-27b5-43c5-a63e-f8ad09f2dc92",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "+rRMFUbTZViyv4KDk3d9Qg",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "f55a755a-ec05-493e-b4de-bfb4d5d503ad",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "d1b0caf0-1a12-40eb-9b4f-c57c30c7ee18",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "6855b76a-56fa-49d7-94c9-599813be478f",
      "action": () => require$$3.JS_RevokeUploadedFileFromMemory,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "426753b3-381c-46a1-9fd8-83b1640f52b5",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "d026c7e2-515d-4bc0-8262-b6705557bbaa",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Only images with format of .gif .jpg .jpeg .png are allowed"
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "f2b473c0-d368-4b9d-bd71-e8819781b50f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "06cd272e-aa4d-435d-9640-0b0649dc0de1",
      "messageType": "error",
      "message": selectTranslation([
        {
          "type": "literal",
          "value": "Upload failed, please try again."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "4796ebed-a8c7-479d-8ce2-a257b40003c1",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_Feedback_ClearImage = {
  "name": "FeedbackModule.ACT_Feedback_ClearImage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "63037b7c-518e-45c7-ba34-dd596770526d",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "557f3b75-83da-434e-962f-04382ed06571",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "7c26966b-5dd8-466a-a29a-bbd752ef7b32",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_Feedback_ClearForm = {
  "name": "FeedbackModule.ACT_Feedback_ClearForm",
  "instructions": [
    {
      "type": "changeObject",
      "label": "a5370875-dc82-498a-8333-91376c5d7666",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "Feedback",
              "path": "_showEmail"
            },
            {
              "type": "literal",
              "value": false
            }
          ]
        },
        "then": {
          "type": "variable",
          "variable": "Feedback",
          "path": "SubmitterEmail"
        },
        "else": {
          "type": "literal",
          "value": null
        }
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "f21b5580-e35c-45ea-8ca0-66fff30b807b",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "1afe366a-9f00-47c6-96a7-46f8d2e704ea",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const SUB_Feedback_ResetLocalStorage = {
  "name": "FeedbackModule.SUB_Feedback_ResetLocalStorage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "5b8ea496-6050-4125-9811-79703e1f21eb",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ActiveUserRoles",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "PageName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Browser",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "EnvironmentURL",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenshotName",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Priority",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenWidth",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ScreenHeight",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "6d96b462-911e-4b4f-a081-8eab75fced2d",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "d6a755aa-dd58-4e32-a3d5-7a5d0be001a8",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_SubmitFeedback = {
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
      "flow": () => SUB_Feedback_ResetLocalStorage,
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

const OCH_Feedback_SaveToLocalStorage = {
  "name": "FeedbackModule.OCH_Feedback_SaveToLocalStorage",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "7986c1fb-d131-44c8-b9f9-d959cc526c22",
      "action": () => require$$0$3.SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "24112eba-f17a-4c1c-9d63-c50b7781915c",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
>>>>>>> Stashed changes
    }
  ]
};

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $FormGroup, $TextBox, $TextArea, $Label, $ConditionalVisibilityWrapper, $ActionButton, $Image } = asPluginWidgets({ Div, DataView, Container, Text, FormGroup, TextBox, TextArea, Label, ConditionalVisibilityWrapper, ActionButton, Image });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
<<<<<<< HEAD
      key: "p11.FeedbackModule.ShareFeedback.layoutGrid1",
      $widgetId: "p11.FeedbackModule.ShareFeedback.layoutGrid1",
=======
      key: "p.FeedbackModule.ShareFeedback.layoutGrid1",
      $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1",
>>>>>>> feat/sales-domain
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
<<<<<<< HEAD
            key: "p11.FeedbackModule.ShareFeedback.layoutGrid1$row0",
            $widgetId: "p11.FeedbackModule.ShareFeedback.layoutGrid1$row0",
=======
            key: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0",
            $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0",
>>>>>>> feat/sales-domain
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
<<<<<<< HEAD
                  key: "p11.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
                  $widgetId: "p11.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
=======
                  key: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
                  $widgetId: "p.FeedbackModule.ShareFeedback.layoutGrid1$row0$column0",
>>>>>>> feat/sales-domain
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
<<<<<<< HEAD
                        key: "p11.FeedbackModule.ShareFeedback.dataView5",
                        $widgetId: "p11.FeedbackModule.ShareFeedback.dataView5",
=======
                        key: "p.FeedbackModule.ShareFeedback.dataView5",
                        $widgetId: "p.FeedbackModule.ShareFeedback.dataView5",
>>>>>>> feat/sales-domain
                        class: "mx-name-dataView5 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: NanoflowObjectProperty({
<<<<<<< HEAD
                          "dataSourceId": "p11.20",
=======
                          "dataSourceId": "p.20",
>>>>>>> feat/sales-domain
                          "editable": true,
<<<<<<< Updated upstream
                          "source": { "nanoflow": () => require$$0.DS_Feedback_Populate, "allowedRoles": [] },
=======
                          "source": { "nanoflow": () => DS_Feedback_Populate, "allowedRoles": [] },
>>>>>>> Stashed changes
                          "argMap": {}
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
<<<<<<< HEAD
                              key: "p11.FeedbackModule.ShareFeedback.container5",
                              $widgetId: "p11.FeedbackModule.ShareFeedback.container5",
=======
                              key: "p.FeedbackModule.ShareFeedback.container5",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container5",
>>>>>>> feat/sales-domain
                              class: "mx-name-container5 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.text1",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.text1",
=======
                                    key: "p.FeedbackModule.ShareFeedback.text1",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.text1",
>>>>>>> feat/sales-domain
                                    class: "mx-name-text1",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Help us make your experience better and share your feedback with us!" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "p"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
=======
                                    key: "p.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_subject$formGroup",
>>>>>>> feat/sales-domain
                                    class: "mx-name-feedback_subject mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
<<<<<<< HEAD
                                          key: "p11.FeedbackModule.ShareFeedback.feedback_subject",
                                          $widgetId: "p11.FeedbackModule.ShareFeedback.feedback_subject",
                                          inputValue: AttributeProperty({
                                            "scope": "p11.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Subject",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
=======
                                          key: "p.FeedbackModule.ShareFeedback.feedback_subject",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_subject",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Subject",
<<<<<<< Updated upstream
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p9.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
=======
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
>>>>>>> Stashed changes
>>>>>>> feat/sales-domain
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Summarize your feedback in a few words" }, "args": {} }
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
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
<<<<<<< HEAD
                                            "widgetId": "p11.FeedbackModule.ShareFeedback.feedback_subject"
=======
                                            "widgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
>>>>>>> feat/sales-domain
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Subject" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
<<<<<<< HEAD
                                      "widgetId": "p11.FeedbackModule.ShareFeedback.feedback_subject"
=======
                                      "widgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
>>>>>>> feat/sales-domain
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
<<<<<<< HEAD
                                      "inputWidgetId": "p11.FeedbackModule.ShareFeedback.feedback_subject"
=======
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.feedback_subject"
>>>>>>> feat/sales-domain
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.textArea2$formGroup",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.textArea2$formGroup",
=======
                                    key: "p.FeedbackModule.ShareFeedback.textArea2$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.textArea2$formGroup",
>>>>>>> feat/sales-domain
                                    class: "mx-name-textArea2 mx-textarea",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextArea,
                                        {
<<<<<<< HEAD
                                          key: "p11.FeedbackModule.ShareFeedback.textArea2",
                                          $widgetId: "p11.FeedbackModule.ShareFeedback.textArea2",
                                          inputValue: AttributeProperty({
                                            "scope": "p11.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Description",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
=======
                                          key: "p.FeedbackModule.ShareFeedback.textArea2",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.textArea2",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "Description",
<<<<<<< Updated upstream
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p9.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
=======
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
>>>>>>> Stashed changes
>>>>>>> feat/sales-domain
                                            "isList": false,
                                            "validation": null
                                          }),
                                          counterMessage: void 0,
                                          maxLength: void 0,
                                          numberOfLines: 5,
                                          autoGrow: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Please add a detailed description, including steps you took before finding issue, or how this idea would help improve the experience for you and other users" }, "args": {} }
                                            })
                                          ]),
                                          readOnlyStyle: "control",
                                          textTooLongMessage: void 0,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          ariaLabel: void 0,
                                          ariaRequired: void 0,
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
<<<<<<< HEAD
                                            "widgetId": "p11.FeedbackModule.ShareFeedback.textArea2"
=======
                                            "widgetId": "p.FeedbackModule.ShareFeedback.textArea2"
>>>>>>> feat/sales-domain
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
<<<<<<< HEAD
                                      "widgetId": "p11.FeedbackModule.ShareFeedback.textArea2"
=======
                                      "widgetId": "p.FeedbackModule.ShareFeedback.textArea2"
>>>>>>> feat/sales-domain
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
<<<<<<< HEAD
                                      "inputWidgetId": "p11.FeedbackModule.ShareFeedback.textArea2"
=======
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.textArea2"
>>>>>>> feat/sales-domain
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
<<<<<<< HEAD
                              key: "p11.FeedbackModule.ShareFeedback.container4",
                              $widgetId: "p11.FeedbackModule.ShareFeedback.container4",
=======
                              key: "p.FeedbackModule.ShareFeedback.container4",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container4",
>>>>>>> feat/sales-domain
                              class: "mx-name-container4 col-left spacing-outer-bottom",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Label,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.label1",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.label1",
                                    class: "mx-name-label1 text-semibold spacing-outer-bottom-none",
                                    style: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p11.FeedbackModule.ShareFeedback.label1"
=======
                                    key: "p.FeedbackModule.ShareFeedback.label1",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.label1",
                                    class: "mx-name-label1 text-semibold spacing-outer-bottom-none",
                                    style: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.FeedbackModule.ShareFeedback.label1"
>>>>>>> feat/sales-domain
                                    }),
                                    caption: TextProperty({
                                      "value": selectTranslation([
                                        "Attachment"
                                      ])
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.text2",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.text2",
=======
                                    key: "p.FeedbackModule.ShareFeedback.text2",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.text2",
>>>>>>> feat/sales-domain
                                    class: "mx-name-text2 text-light",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Upload a jpg, jpeg, png or gif image file of max. 5MB." }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
<<<<<<< HEAD
                              key: "p11.FeedbackModule.ShareFeedback.container2",
                              $widgetId: "p11.FeedbackModule.ShareFeedback.container2",
=======
                              key: "p.FeedbackModule.ShareFeedback.container2",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container2",
>>>>>>> feat/sales-domain
                              class: "mx-name-container2 flexcontainer justify-content-start spacing-outer-bottom-medium",
                              style: {
                                "gap": "8px"
                              },
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.actionButton4$visibility",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.actionButton4$visibility",
=======
                                    key: "p.FeedbackModule.ShareFeedback.actionButton4$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.actionButton4$visibility",
>>>>>>> feat/sales-domain
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
<<<<<<< HEAD
                                          key: "p11.FeedbackModule.ShareFeedback.actionButton4",
                                          $widgetId: "p11.FeedbackModule.ShareFeedback.actionButton4",
                                          buttonId: "p11.FeedbackModule.ShareFeedback.actionButton4",
=======
                                          key: "p.FeedbackModule.ShareFeedback.actionButton4",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.actionButton4",
                                          buttonId: "p.FeedbackModule.ShareFeedback.actionButton4",
>>>>>>> feat/sales-domain
                                          class: "mx-name-actionButton4",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Take Screenshot" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-camera" }
                                          }),
                                          action: ActionProperty({
<<<<<<< HEAD
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$2.ACT_Feedback_TriggerScreenshotMode, "allowedRoles": [] }, "disabledDuringExecution": true },
=======
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_TriggerScreenshotMode, "allowedRoles": [] }, "disabledDuringExecution": true },
>>>>>>> feat/sales-domain
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.actionButton5$visibility",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.actionButton5$visibility",
=======
                                    key: "p.FeedbackModule.ShareFeedback.actionButton5$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.actionButton5$visibility",
>>>>>>> feat/sales-domain
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
<<<<<<< HEAD
                                          key: "p11.FeedbackModule.ShareFeedback.actionButton5",
                                          $widgetId: "p11.FeedbackModule.ShareFeedback.actionButton5",
                                          buttonId: "p11.FeedbackModule.ShareFeedback.actionButton5",
=======
                                          key: "p.FeedbackModule.ShareFeedback.actionButton5",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.actionButton5",
                                          buttonId: "p.FeedbackModule.ShareFeedback.actionButton5",
>>>>>>> feat/sales-domain
                                          class: "mx-name-actionButton5",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Upload" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-open" }
                                          }),
                                          action: ActionProperty({
<<<<<<< HEAD
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$3.ACT_Feedback_UploadImage, "allowedRoles": [] }, "disabledDuringExecution": true },
=======
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_UploadImage, "allowedRoles": [] }, "disabledDuringExecution": true },
>>>>>>> feat/sales-domain
                                            "abortOnServerValidation": true
                                          })
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
                            $ConditionalVisibilityWrapper,
                            {
<<<<<<< HEAD
                              key: "p11.FeedbackModule.ShareFeedback.container6$visibility",
                              $widgetId: "p11.FeedbackModule.ShareFeedback.container6$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ImageB64" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
=======
                              key: "p.FeedbackModule.ShareFeedback.container6$visibility",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container6$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ImageB64" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
>>>>>>> feat/sales-domain
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.container6",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.container6",
=======
                                    key: "p.FeedbackModule.ShareFeedback.container6",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.container6",
>>>>>>> feat/sales-domain
                                    class: "mx-name-container6 mxfeedback-screenshot-preview spacing-outer-bottom-medium",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
<<<<<<< HEAD
                                          key: "p11.FeedbackModule.ShareFeedback.container7",
                                          $widgetId: "p11.FeedbackModule.ShareFeedback.container7",
=======
                                          key: "p.FeedbackModule.ShareFeedback.container7",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.container7",
>>>>>>> feat/sales-domain
                                          class: "mx-name-container7",
                                          style: {
                                            "position": "relative"
                                          },
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
<<<<<<< HEAD
                                                key: "p11.FeedbackModule.ShareFeedback.actionButton1$visibility",
                                                $widgetId: "p11.FeedbackModule.ShareFeedback.actionButton1$visibility",
=======
                                                key: "p.FeedbackModule.ShareFeedback.actionButton1$visibility",
                                                $widgetId: "p.FeedbackModule.ShareFeedback.actionButton1$visibility",
>>>>>>> feat/sales-domain
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
<<<<<<< HEAD
                                                      key: "p11.FeedbackModule.ShareFeedback.actionButton1",
                                                      $widgetId: "p11.FeedbackModule.ShareFeedback.actionButton1",
                                                      buttonId: "p11.FeedbackModule.ShareFeedback.actionButton1",
=======
                                                      key: "p.FeedbackModule.ShareFeedback.actionButton1",
                                                      $widgetId: "p.FeedbackModule.ShareFeedback.actionButton1",
                                                      buttonId: "p.FeedbackModule.ShareFeedback.actionButton1",
>>>>>>> feat/sales-domain
                                                      class: "mx-name-actionButton1 mxfeedback-screenshot-preview__delete-button",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "button",
                                                      role: void 0,
                                                      buttonClass: "btn-default",
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
                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-remove" }
                                                      }),
                                                      action: ActionProperty({
<<<<<<< HEAD
                                                        "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$4.ACT_Feedback_ClearImage, "allowedRoles": [] }, "disabledDuringExecution": true },
=======
                                                        "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_ClearImage, "allowedRoles": [] }, "disabledDuringExecution": true },
>>>>>>> feat/sales-domain
                                                        "abortOnServerValidation": true
                                                      })
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
<<<<<<< HEAD
                                                key: "p11.FeedbackModule.ShareFeedback.image1",
                                                $widgetId: "p11.FeedbackModule.ShareFeedback.image1",
=======
                                                key: "p.FeedbackModule.ShareFeedback.image1",
                                                $widgetId: "p.FeedbackModule.ShareFeedback.image1",
>>>>>>> feat/sales-domain
                                                datasource: "imageUrl",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
<<<<<<< HEAD
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ImageB64" }, "args": { "currentObject": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
=======
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ImageB64" }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
>>>>>>> feat/sales-domain
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: void 0,
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "A Preview of the Feedback image that was from the screenshot or upload" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "auto",
                                                width: 100,
                                                heightUnit: "auto",
                                                height: 100,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image1 mxfeedback-screenshot-preview__image img-center img-contain",
                                                style: {
                                                  "width": "auto"
                                                },
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
<<<<<<< HEAD
                              key: "p11.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              $widgetId: "p11.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_showEmail" }, "args": { "currentObject": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
=======
                              key: "p.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              $widgetId: "p.FeedbackModule.ShareFeedback.textBox1$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_showEmail" }, "args": { "currentObject": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } } }
>>>>>>> feat/sales-domain
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.textBox1$formGroup",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.textBox1$formGroup",
=======
                                    key: "p.FeedbackModule.ShareFeedback.textBox1$formGroup",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.textBox1$formGroup",
>>>>>>> feat/sales-domain
                                    class: "mx-name-textBox1 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
<<<<<<< HEAD
                                          key: "p11.FeedbackModule.ShareFeedback.textBox1",
                                          $widgetId: "p11.FeedbackModule.ShareFeedback.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "p11.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "SubmitterEmail",
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
=======
                                          key: "p.FeedbackModule.ShareFeedback.textBox1",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "p.FeedbackModule.ShareFeedback.dataView5",
                                            "path": "",
                                            "entity": "FeedbackModule.Feedback",
                                            "attribute": "SubmitterEmail",
<<<<<<< Updated upstream
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p9.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$1.OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
=======
                                            "onChange": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => OCH_Feedback_SaveToLocalStorage, "allowedRoles": [] }, "disabledDuringExecution": false },
>>>>>>> Stashed changes
>>>>>>> feat/sales-domain
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "name@company.com" }, "args": {} }
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
                                          submitWhileEditing: true,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
<<<<<<< HEAD
                                            "widgetId": "p11.FeedbackModule.ShareFeedback.textBox1"
=======
                                            "widgetId": "p.FeedbackModule.ShareFeedback.textBox1"
>>>>>>> feat/sales-domain
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Email" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
<<<<<<< HEAD
                                      "widgetId": "p11.FeedbackModule.ShareFeedback.textBox1"
=======
                                      "widgetId": "p.FeedbackModule.ShareFeedback.textBox1"
>>>>>>> feat/sales-domain
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
<<<<<<< HEAD
                                      "inputWidgetId": "p11.FeedbackModule.ShareFeedback.textBox1"
=======
                                      "inputWidgetId": "p.FeedbackModule.ShareFeedback.textBox1"
>>>>>>> feat/sales-domain
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
<<<<<<< HEAD
                              key: "p11.FeedbackModule.ShareFeedback.container3",
                              $widgetId: "p11.FeedbackModule.ShareFeedback.container3",
=======
                              key: "p.FeedbackModule.ShareFeedback.container3",
                              $widgetId: "p.FeedbackModule.ShareFeedback.container3",
>>>>>>> feat/sales-domain
                              class: "mx-name-container3 flex-row flexcontainer justify-content-end",
                              style: {
                                "gap": "8px"
                              },
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.feedback_cancel",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.feedback_cancel",
                                    buttonId: "p11.FeedbackModule.ShareFeedback.feedback_cancel",
=======
                                    key: "p.FeedbackModule.ShareFeedback.feedback_cancel",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_cancel",
                                    buttonId: "p.FeedbackModule.ShareFeedback.feedback_cancel",
>>>>>>> feat/sales-domain
                                    class: "mx-name-feedback_cancel",
                                    style: {
                                      "border": "0"
                                    },
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
                                      "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.feedback_clear$visibility",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.feedback_clear$visibility",
=======
                                    key: "p.FeedbackModule.ShareFeedback.feedback_clear$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_clear$visibility",
>>>>>>> feat/sales-domain
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
<<<<<<< HEAD
                                          key: "p11.FeedbackModule.ShareFeedback.feedback_clear",
                                          $widgetId: "p11.FeedbackModule.ShareFeedback.feedback_clear",
                                          buttonId: "p11.FeedbackModule.ShareFeedback.feedback_clear",
=======
                                          key: "p.FeedbackModule.ShareFeedback.feedback_clear",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_clear",
                                          buttonId: "p.FeedbackModule.ShareFeedback.feedback_clear",
>>>>>>> feat/sales-domain
                                          class: "mx-name-feedback_clear btn-bordered",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
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
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$5.ACT_Feedback_ClearForm, "allowedRoles": [] }, "disabledDuringExecution": true },
=======
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_Feedback_ClearForm, "allowedRoles": [] }, "disabledDuringExecution": true },
>>>>>>> feat/sales-domain
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
<<<<<<< HEAD
                                    key: "p11.FeedbackModule.ShareFeedback.feedback_submit$visibility",
                                    $widgetId: "p11.FeedbackModule.ShareFeedback.feedback_submit$visibility",
=======
                                    key: "p.FeedbackModule.ShareFeedback.feedback_submit$visibility",
                                    $widgetId: "p.FeedbackModule.ShareFeedback.feedback_submit$visibility",
>>>>>>> feat/sales-domain
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
<<<<<<< HEAD
                                          key: "p11.FeedbackModule.ShareFeedback.feedback_submit",
                                          $widgetId: "p11.FeedbackModule.ShareFeedback.feedback_submit",
                                          buttonId: "p11.FeedbackModule.ShareFeedback.feedback_submit",
=======
                                          key: "p.FeedbackModule.ShareFeedback.feedback_submit",
                                          $widgetId: "p.FeedbackModule.ShareFeedback.feedback_submit",
                                          buttonId: "p.FeedbackModule.ShareFeedback.feedback_submit",
>>>>>>> feat/sales-domain
                                          class: "mx-name-feedback_submit",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-primary",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Submit" }, "args": {} }
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
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p11.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => require$$6.ACT_SubmitFeedback, "allowedRoles": [] }, "disabledDuringExecution": true },
=======
                                            "action": { "type": "callNanoflow", "argMap": { "Feedback": { "widget": "p.FeedbackModule.ShareFeedback.dataView5", "source": "object" } }, "config": { "nanoflow": () => ACT_SubmitFeedback, "allowedRoles": [] }, "disabledDuringExecution": true },
>>>>>>> feat/sales-domain
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: true,
                        footer: void 0
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
  "Share your feedback"
]);
const classes = "";
const autofocus = "desktopOnly";
const cancelChangesOperationId = "BfY+4JHNAl6t5444TUmhIw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { autofocus, cancelChangesOperationId, classes, content, style, title };
