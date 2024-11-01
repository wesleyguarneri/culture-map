import {
  Validation
} from "./chunk-LVO5HG5M.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-L7FZBUUR.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-M6DKAVSK.js";
import {
  defineCustomElement
} from "./chunk-AX5NQF7U.js";
import {
  createObserver
} from "./chunk-JOYMUIN5.js";
import "./chunk-23E6RT3O.js";
import {
  toAriaBoolean
} from "./chunk-RGUNAV4Z.js";
import "./chunk-RCBGISRX.js";
import {
  H,
  Host,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-radio-button-group.js
var CSS = {
  itemWrapper: "item-wrapper"
};
var IDS = {
  validationMessage: "radioButtonGroupValidationMessage"
};
var radioButtonGroupCss = ":host{display:flex;flex-direction:column}:host>.item-wrapper{display:flex;max-inline-size:100vw}:host([layout=horizontal])>.item-wrapper{flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s])>.item-wrapper{column-gap:1rem}:host([layout=horizontal][scale=m])>.item-wrapper{column-gap:1.25rem}:host([layout=horizontal][scale=l])>.item-wrapper{column-gap:1.5rem}:host([layout=vertical])>.item-wrapper{flex-direction:column;inline-size:-moz-fit-content;inline-size:fit-content}:host([scale=s]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-xxs) * -1)}:host([scale=m]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-sm) * -1)}:host([scale=l]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-md) * -1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteRadioButtonGroupStyle0 = radioButtonGroupCss;
var RadioButtonGroup = proxyCustomElement(class RadioButtonGroup2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteRadioButtonGroupChange = createEvent(this, "calciteRadioButtonGroupChange", 6);
    this.mutationObserver = createObserver("mutation", () => this.passPropsToRadioButtons());
    this.passPropsToRadioButtons = () => {
      this.radioButtons = Array.from(this.el.querySelectorAll("calcite-radio-button"));
      this.selectedItem = Array.from(this.radioButtons).find((radioButton) => radioButton.checked) || null;
      if (this.radioButtons.length > 0) {
        this.radioButtons.forEach((radioButton) => {
          radioButton.disabled = this.disabled || radioButton.disabled;
          radioButton.hidden = this.el.hidden;
          radioButton.name = this.name;
          radioButton.required = this.required;
          radioButton.scale = this.scale;
        });
      }
    };
    this.disabled = false;
    this.layout = "horizontal";
    this.name = void 0;
    this.required = false;
    this.selectedItem = null;
    this.scale = "m";
    this.status = "idle";
    this.validationMessage = void 0;
    this.validationIcon = void 0;
    this.radioButtons = [];
  }
  //--------------------------------------------------------------------------
  //
  //  Global attributes
  //
  //--------------------------------------------------------------------------
  handleHiddenChange() {
    this.passPropsToRadioButtons();
  }
  onDisabledChange() {
    this.passPropsToRadioButtons();
  }
  onLayoutChange() {
    this.passPropsToRadioButtons();
  }
  onScaleChange() {
    this.passPropsToRadioButtons();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.passPropsToRadioButtons();
    this.mutationObserver?.observe(this.el, {
      childList: true,
      subtree: true
    });
  }
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  getFocusableRadioButton() {
    return this.radioButtons.find((radiobutton) => !radiobutton.disabled) ?? null;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Method
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the fist focusable `calcite-radio-button` element in the component. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      if (this.selectedItem && !this.selectedItem.disabled) {
        return this.selectedItem.setFocus();
      }
      if (this.radioButtons.length > 0) {
        return this.getFocusableRadioButton()?.setFocus();
      }
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  radioButtonChangeHandler(event) {
    this.selectedItem = event.target;
    this.calciteRadioButtonGroupChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return h(Host, {
      key: "487c8e698a30bffc79b233b81faad9bab7ea17e5",
      role: "radiogroup"
    }, h("div", {
      key: "63cf9169798fefa62551fa0a975735ed2afd5a66",
      "aria-errormessage": IDS.validationMessage,
      "aria-invalid": toAriaBoolean(this.status === "invalid"),
      class: CSS.itemWrapper
    }, h("slot", {
      key: "a7274291fc93583ebdee167c3c1e2f71f7fa255c"
    })), this.validationMessage && this.status === "invalid" ? h(Validation, {
      icon: this.validationIcon,
      id: IDS.validationMessage,
      message: this.validationMessage,
      scale: this.scale,
      status: this.status
    }) : null);
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "hidden": ["handleHiddenChange"],
      "disabled": ["onDisabledChange"],
      "layout": ["onLayoutChange"],
      "scale": ["onScaleChange"]
    };
  }
  static get style() {
    return CalciteRadioButtonGroupStyle0;
  }
}, [1, "calcite-radio-button-group", {
  "disabled": [516],
  "layout": [513],
  "name": [513],
  "required": [516],
  "selectedItem": [1040],
  "scale": [513],
  "status": [513],
  "validationMessage": [1, "validation-message"],
  "validationIcon": [520, "validation-icon"],
  "radioButtons": [32],
  "setFocus": [64]
}, [[0, "calciteRadioButtonChange", "radioButtonChangeHandler"]], {
  "hidden": ["handleHiddenChange"],
  "disabled": ["onDisabledChange"],
  "layout": ["onLayoutChange"],
  "scale": ["onScaleChange"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-radio-button-group", "calcite-icon", "calcite-input-message"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-radio-button-group":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, RadioButtonGroup);
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
    }
  });
}
defineCustomElement$1();
var CalciteRadioButtonGroup = RadioButtonGroup;
var defineCustomElement3 = defineCustomElement$1;
export {
  CalciteRadioButtonGroup,
  defineCustomElement3 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-radio-button-group.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-radio-button-group-UKIBC6RS.js.map
