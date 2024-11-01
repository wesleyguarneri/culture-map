import {
  defineCustomElement as defineCustomElement3
} from "./chunk-KJHR46PR.js";
import {
  syncHiddenFormInput
} from "./chunk-GL2UDHKK.js";
import {
  Validation
} from "./chunk-LVO5HG5M.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-L7FZBUUR.js";
import {
  HiddenFormInputSlot,
  connectForm,
  disconnectForm,
  internalHiddenInputInputEvent,
  submitForm
} from "./chunk-HIXQ76MY.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-46GG7UPH.js";
import {
  connectLabel,
  disconnectLabel,
  getLabelText
} from "./chunk-PBDQTCSC.js";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages
} from "./chunk-XGIY42ZI.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-M6DKAVSK.js";
import {
  connectLocalized,
  disconnectLocalized
} from "./chunk-B3F3MSZ2.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import {
  createObserver
} from "./chunk-JOYMUIN5.js";
import {
  getIconScale
} from "./chunk-D25A7Z5T.js";
import {
  getElementDir,
  getSlotted,
  setRequestedIcon,
  toAriaBoolean
} from "./chunk-RGUNAV4Z.js";
import {
  CSS_UTILITY
} from "./chunk-RCBGISRX.js";
import {
  H,
  Host,
  createEvent,
  forceUpdate,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/input-text.js
var CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper"
};
var IDS = {
  validationMessage: "inputTextValidationMessage"
};
var SLOTS = {
  action: "action"
};
var inputTextCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:0.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:0.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:0.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 0.75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:0.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteInputTextStyle0 = inputTextCss;
var InputText = proxyCustomElement(class InputText2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalInputTextFocus = createEvent(this, "calciteInternalInputTextFocus", 7);
    this.calciteInternalInputTextBlur = createEvent(this, "calciteInternalInputTextBlur", 7);
    this.calciteInputTextInput = createEvent(this, "calciteInputTextInput", 7);
    this.calciteInputTextChange = createEvent(this, "calciteInputTextChange", 7);
    this.previousValueOrigin = "initial";
    this.mutationObserver = createObserver("mutation", () => this.setDisabledAction());
    this.userChangedValue = false;
    this.keyDownHandler = (event) => {
      if (this.readOnly || this.disabled || event.defaultPrevented) {
        return;
      }
      if (this.isClearable && event.key === "Escape") {
        this.clearInputTextValue(event);
        event.preventDefault();
      }
      if (event.key === "Enter") {
        if (submitForm(this)) {
          event.preventDefault();
        }
      }
    };
    this.clearInputTextValue = (nativeEvent) => {
      this.setValue({
        committing: true,
        nativeEvent,
        origin: "user",
        value: ""
      });
    };
    this.emitChangeIfUserModified = () => {
      if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
        this.calciteInputTextChange.emit();
        this.setPreviousEmittedValue(this.value);
      }
    };
    this.inputTextBlurHandler = () => {
      this.calciteInternalInputTextBlur.emit({
        element: this.childEl,
        value: this.value
      });
      this.emitChangeIfUserModified();
    };
    this.clickHandler = (event) => {
      if (this.disabled) {
        return;
      }
      const composedPath = event.composedPath();
      if (!composedPath.includes(this.inputWrapperEl) || composedPath.includes(this.actionWrapperEl)) {
        return;
      }
      this.setFocus();
    };
    this.inputTextFocusHandler = () => {
      this.calciteInternalInputTextFocus.emit({
        element: this.childEl,
        value: this.value
      });
    };
    this.inputTextInputHandler = (nativeEvent) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      this.setValue({
        nativeEvent,
        origin: "user",
        value: nativeEvent.target.value
      });
    };
    this.inputTextKeyDownHandler = (event) => {
      if (this.disabled || this.readOnly) {
        return;
      }
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
      }
    };
    this.onHiddenFormInputInput = (event) => {
      if (event.target.name === this.name) {
        this.setValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      this.setFocus();
      event.stopPropagation();
    };
    this.setChildElRef = (el) => {
      this.childEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (!this.childEl) {
        return;
      }
      this.childEl.value = newInputValue;
    };
    this.setPreviousEmittedValue = (value) => {
      this.previousEmittedValue = value;
    };
    this.setPreviousValue = (value) => {
      this.previousValue = value;
    };
    this.setValue = ({
      committing = false,
      nativeEvent,
      origin,
      previousValue,
      value
    }) => {
      this.setPreviousValue(previousValue ?? this.value);
      this.previousValueOrigin = origin;
      this.userChangedValue = origin === "user" && value !== this.value;
      this.value = value;
      if (origin === "direct") {
        this.setInputValue(value);
        this.setPreviousEmittedValue(value);
      }
      if (nativeEvent) {
        const calciteInputTextInputEvent = this.calciteInputTextInput.emit();
        if (calciteInputTextInputEvent.defaultPrevented) {
          this.value = this.previousValue;
        } else if (committing) {
          this.emitChangeIfUserModified();
        }
      }
    };
    this.alignment = "start";
    this.autofocus = void 0;
    this.clearable = false;
    this.disabled = false;
    this.enterKeyHint = void 0;
    this.form = void 0;
    this.icon = void 0;
    this.iconFlipRtl = false;
    this.inputMode = void 0;
    this.label = void 0;
    this.loading = false;
    this.maxLength = void 0;
    this.minLength = void 0;
    this.validationMessage = void 0;
    this.validationIcon = void 0;
    this.validity = {
      valid: false,
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false
    };
    this.name = void 0;
    this.placeholder = void 0;
    this.prefixText = void 0;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.autocomplete = void 0;
    this.pattern = void 0;
    this.suffixText = void 0;
    this.editingEnabled = false;
    this.value = "";
    this.messages = void 0;
    this.messageOverrides = void 0;
    this.effectiveLocale = void 0;
    this.defaultMessages = void 0;
    this.slottedActionElDisabledInternally = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Global attributes
  //
  //--------------------------------------------------------------------------
  handleGlobalAttributesChanged() {
    forceUpdate(this);
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  onMessagesChange() {
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setValue({
        origin: "direct",
        previousValue,
        value: !newValue ? "" : newValue
      });
    }
    this.userChangedValue = false;
  }
  updateRequestedIcon() {
    this.requestedIcon = setRequestedIcon({}, this.icon, "text");
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
  }
  effectiveLocaleChange() {
    updateMessages(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLocalized(this);
    connectMessages(this);
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    connectLabel(this);
    connectForm(this);
    this.mutationObserver?.observe(this.el, {
      childList: true
    });
    this.setDisabledAction();
    this.el.addEventListener(internalHiddenInputInputEvent, this.onHiddenFormInputInput);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
    disconnectLocalized(this);
    disconnectMessages(this);
    this.mutationObserver?.disconnect();
    this.el.removeEventListener(internalHiddenInputInputEvent, this.onHiddenFormInputInput);
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      setUpLoadableComponent(this);
      this.requestedIcon = setRequestedIcon({}, this.icon, "text");
      yield setUpMessages(this);
      this.setPreviousEmittedValue(this.value);
      this.setPreviousValue(this.value);
    });
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      this.childEl?.focus();
    });
  }
  /** Selects the text of the component's `value`. */
  selectText() {
    return __async(this, null, function* () {
      this.childEl?.select();
    });
  }
  onLabelClick() {
    this.setFocus();
  }
  syncHiddenFormInput(input) {
    syncHiddenFormInput("text", this, input);
  }
  setDisabledAction() {
    const slottedActionEl = getSlotted(this.el, "action");
    if (!slottedActionEl) {
      return;
    }
    if (this.disabled) {
      if (slottedActionEl.getAttribute("disabled") == null) {
        this.slottedActionElDisabledInternally = true;
      }
      slottedActionEl.setAttribute("disabled", "");
    } else if (this.slottedActionElDisabledInternally) {
      slottedActionEl.removeAttribute("disabled");
      this.slottedActionElDisabledInternally = false;
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const dir = getElementDir(this.el);
    const loader = h("div", {
      key: "2ca041a581304297694d2219c52e3567ee39c4d9",
      class: CSS.loader
    }, h("calcite-progress", {
      key: "dfc05d226e43048d229f32e830ce2d1295d5691f",
      label: this.messages.loading,
      type: "indeterminate"
    }));
    const inputClearButton = h("button", {
      key: "39f2afe7d3280b4de0b4e8970266886a7119e5ba",
      "aria-label": this.messages.clear,
      class: CSS.clearButton,
      disabled: this.disabled || this.readOnly,
      onClick: this.clearInputTextValue,
      tabIndex: -1,
      type: "button"
    }, h("calcite-icon", {
      key: "c16107371113f3015fb8d259d7a0b227c4256f8f",
      icon: "x",
      scale: getIconScale(this.scale)
    }));
    const iconEl = h("calcite-icon", {
      key: "f5dc6921fbe712ebda049e863bc8b2372083a4d1",
      class: CSS.inputIcon,
      flipRtl: this.iconFlipRtl,
      icon: this.requestedIcon,
      scale: getIconScale(this.scale)
    });
    const prefixText = h("div", {
      key: "b295b7306b9d121c47f1129f743429de65166bc3",
      class: CSS.prefix
    }, this.prefixText);
    const suffixText = h("div", {
      key: "85c5d7ba85182aecc7bf5471c96ce96507953948",
      class: CSS.suffix
    }, this.suffixText);
    const childEl = h("input", {
      key: "b542aedd945ae0c3ec2a8e6bc2f2f22f5040636c",
      "aria-errormessage": IDS.validationMessage,
      "aria-invalid": toAriaBoolean(this.status === "invalid"),
      "aria-label": getLabelText(this),
      autocomplete: this.autocomplete,
      autofocus: this.el.autofocus ? true : null,
      class: {
        [CSS.editingEnabled]: this.editingEnabled,
        [CSS.inlineChild]: !!this.inlineEditableEl
      },
      defaultValue: this.defaultValue,
      disabled: this.disabled ? true : null,
      enterKeyHint: this.el.enterKeyHint || this.el.getAttribute("enterkeyhint"),
      inputMode: this.el.inputMode || this.el.getAttribute("inputmode"),
      maxLength: this.maxLength,
      minLength: this.minLength,
      name: this.name,
      onBlur: this.inputTextBlurHandler,
      onFocus: this.inputTextFocusHandler,
      onInput: this.inputTextInputHandler,
      onKeyDown: this.inputTextKeyDownHandler,
      pattern: this.pattern,
      placeholder: this.placeholder || "",
      readOnly: this.readOnly,
      ref: this.setChildElRef,
      required: this.required ? true : null,
      tabIndex: this.disabled || this.inlineEditableEl && !this.editingEnabled ? -1 : null,
      type: "text",
      value: this.value
    });
    return h(Host, {
      key: "5a32059d58fc667ccef836b97c7dbf9c7d0456ba",
      onClick: this.clickHandler,
      onKeyDown: this.keyDownHandler
    }, h(InteractiveContainer, {
      key: "06f4302d0b97901f9f962f6b96460c517a0e415d",
      disabled: this.disabled
    }, h("div", {
      key: "f160e1bebeee50b752d6f38fbc2517952fb92c94",
      class: {
        [CSS.inputWrapper]: true,
        [CSS_UTILITY.rtl]: dir === "rtl"
      },
      ref: (el) => this.inputWrapperEl = el
    }, this.prefixText ? prefixText : null, h("div", {
      key: "72b7e6c7ffdd700779f0ab266050bf263a5912c5",
      class: CSS.wrapper
    }, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), h("div", {
      key: "b359ff4cad35756cf2b4fd97087071cfb8cb6363",
      class: CSS.actionWrapper,
      ref: (el) => this.actionWrapperEl = el
    }, h("slot", {
      key: "123667cff5ed426e732c9b5ef716147431d10ac5",
      name: SLOTS.action
    })), this.suffixText ? suffixText : null, h(HiddenFormInputSlot, {
      key: "fb9c298c3ad9b1b67f6e9e8cc2fb9e7b96f010dd",
      component: this
    })), this.validationMessage && this.status === "invalid" ? h(Validation, {
      icon: this.validationIcon,
      id: IDS.validationMessage,
      message: this.validationMessage,
      scale: this.scale,
      status: this.status
    }) : null));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "autofocus": ["handleGlobalAttributesChanged"],
      "enterkeyhint": ["handleGlobalAttributesChanged"],
      "inputmode": ["handleGlobalAttributesChanged"],
      "disabled": ["disabledWatcher"],
      "messageOverrides": ["onMessagesChange"],
      "value": ["valueWatcher"],
      "icon": ["updateRequestedIcon"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return CalciteInputTextStyle0;
  }
}, [1, "calcite-input-text", {
  "alignment": [513],
  "autofocus": [4],
  "clearable": [516],
  "disabled": [516],
  "enterKeyHint": [1, "enter-key-hint"],
  "form": [513],
  "icon": [520],
  "iconFlipRtl": [516, "icon-flip-rtl"],
  "inputMode": [1, "input-mode"],
  "label": [1],
  "loading": [516],
  "maxLength": [514, "max-length"],
  "minLength": [514, "min-length"],
  "validationMessage": [1, "validation-message"],
  "validationIcon": [520, "validation-icon"],
  "validity": [1040],
  "name": [513],
  "placeholder": [1],
  "prefixText": [1, "prefix-text"],
  "readOnly": [516, "read-only"],
  "required": [516],
  "scale": [513],
  "status": [513],
  "autocomplete": [1],
  "pattern": [1],
  "suffixText": [1, "suffix-text"],
  "editingEnabled": [1540, "editing-enabled"],
  "value": [1025],
  "messages": [1040],
  "messageOverrides": [1040],
  "effectiveLocale": [32],
  "defaultMessages": [32],
  "slottedActionElDisabledInternally": [32],
  "setFocus": [64],
  "selectText": [64]
}, void 0, {
  "autofocus": ["handleGlobalAttributesChanged"],
  "enterkeyhint": ["handleGlobalAttributesChanged"],
  "inputmode": ["handleGlobalAttributesChanged"],
  "disabled": ["disabledWatcher"],
  "messageOverrides": ["onMessagesChange"],
  "value": ["valueWatcher"],
  "icon": ["updateRequestedIcon"],
  "effectiveLocale": ["effectiveLocaleChange"]
}]);
function defineCustomElement4() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-text", "calcite-icon", "calcite-input-message", "calcite-progress"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-input-text":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, InputText);
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
      case "calcite-input-message":
        if (!customElements.get(tagName)) {
          defineCustomElement2();
        }
        break;
      case "calcite-progress":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
    }
  });
}
defineCustomElement4();

export {
  defineCustomElement4 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/input-text.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-A3REIP66.js.map
