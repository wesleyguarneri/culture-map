import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  createObserver
} from "./chunk-OOEWT25O.js";
import "./chunk-7JIACICA.js";
import {
  H,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-option.js
var optionCss = ":host{display:block}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteOptionStyle0 = optionCss;
var Option = proxyCustomElement(class Option2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalOptionChange = createEvent(this, "calciteInternalOptionChange", 6);
    this.mutationObserver = createObserver("mutation", () => {
      this.ensureTextContentDependentProps();
      this.calciteInternalOptionChange.emit();
    });
    this.disabled = false;
    this.label = void 0;
    this.selected = void 0;
    this.value = void 0;
  }
  handlePropChange(_newValue, _oldValue, propName) {
    if (propName === "label" || propName === "value") {
      this.ensureTextContentDependentProps();
    }
    this.calciteInternalOptionChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  ensureTextContentDependentProps() {
    const {
      el: {
        textContent
      },
      internallySetLabel,
      internallySetValue,
      label,
      value
    } = this;
    if (!label || label === internallySetLabel) {
      this.label = textContent;
      this.internallySetLabel = textContent;
    }
    if (value == null || value === internallySetValue) {
      this.value = textContent;
      this.internallySetValue = textContent;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.ensureTextContentDependentProps();
    this.mutationObserver?.observe(this.el, {
      attributeFilter: ["label", "value"],
      characterData: true,
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    return h("slot", {
      key: "e5df72ac4455ee2e14c0e48a40739a9a271c9c57"
    }, this.label);
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "disabled": ["handlePropChange"],
      "label": ["handlePropChange"],
      "selected": ["handlePropChange"],
      "value": ["handlePropChange"]
    };
  }
  static get style() {
    return CalciteOptionStyle0;
  }
}, [1, "calcite-option", {
  "disabled": [516],
  "label": [1025],
  "selected": [516],
  "value": [1032]
}, void 0, {
  "disabled": ["handlePropChange"],
  "label": ["handlePropChange"],
  "selected": ["handlePropChange"],
  "value": ["handlePropChange"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-option"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-option":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Option);
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteOption = Option;
var defineCustomElement = defineCustomElement$1;
export {
  CalciteOption,
  defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-option.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-option-DLZBJJ3Y.js.map
