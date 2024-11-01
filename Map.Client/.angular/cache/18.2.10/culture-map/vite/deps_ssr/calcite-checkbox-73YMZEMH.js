import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  HiddenFormInputSlot,
  connectForm,
  disconnectForm
} from "./chunk-BJU43354.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-H4DSEZHF.js";
import {
  connectLabel,
  disconnectLabel,
  getLabelText
} from "./chunk-YJ576OO7.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-3LOI6Q5C.js";
import {
  isActivationKey
} from "./chunk-HCYVIRBF.js";
import "./chunk-7JIACICA.js";
import "./chunk-SJNQ3G2B.js";
import {
  getElementDir,
  guid,
  toAriaBoolean
} from "./chunk-AHYZNZSK.js";
import {
  CSS_UTILITY
} from "./chunk-IE4UBD3F.js";
import {
  H,
  Host,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/checkbox.js
var CSS = {
  toggle: "toggle",
  check: "check-svg"
};
var checkboxCss = ':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .check-svg,:host([scale=s]) .toggle{inline-size:var(--calcite-checkbox-size, 0.75rem);block-size:var(--calcite-checkbox-size, 0.75rem)}:host([scale=m]) .check-svg,:host([scale=m]) .toggle{inline-size:var(--calcite-checkbox-size, var(--calcite-font-size--1));block-size:var(--calcite-checkbox-size, var(--calcite-font-size--1))}:host([scale=l]) .check-svg,:host([scale=l]) .toggle{inline-size:var(--calcite-checkbox-size, 1rem);block-size:var(--calcite-checkbox-size, 1rem)}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-color-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-checkbox-border-color, var(--calcite-color-border-input));color:var(--calcite-checkbox-icon-color, var(--calcite-color-background))}:host([status=invalid]:not([checked])) .check-svg{box-shadow:inset 0 0 0 1px var(--calcite-color-status-danger)}:host([status=invalid]:not([checked])) .toggle:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-checkbox-border-color-hover, var(--calcite-color-brand))}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.toggle::after,.toggle::before{inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute}.toggle:not(.calcite--rtl)::after{content:"";transform:translateX(-50%) translateY(-50%)}.toggle.calcite--rtl::before{content:"";transform:translateX(50%) translateY(-50%)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}';
var CalciteCheckboxStyle0 = checkboxCss;
var Checkbox = proxyCustomElement(class Checkbox2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalCheckboxBlur = createEvent(this, "calciteInternalCheckboxBlur", 6);
    this.calciteCheckboxChange = createEvent(this, "calciteCheckboxChange", 6);
    this.calciteInternalCheckboxFocus = createEvent(this, "calciteInternalCheckboxFocus", 6);
    this.checkedPath = "M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";
    this.indeterminatePath = "M13 8v1H3V8z";
    this.getPath = () => this.indeterminate ? this.indeterminatePath : this.checked ? this.checkedPath : "";
    this.toggle = () => {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.setFocus();
        this.indeterminate = false;
        this.calciteCheckboxChange.emit();
      }
    };
    this.keyDownHandler = (event) => {
      if (isActivationKey(event.key)) {
        this.toggle();
        event.preventDefault();
      }
    };
    this.clickHandler = () => {
      if (this.disabled) {
        return;
      }
      this.toggle();
    };
    this.onToggleBlur = () => {
      this.calciteInternalCheckboxBlur.emit(false);
    };
    this.onToggleFocus = () => {
      this.calciteInternalCheckboxFocus.emit(true);
    };
    this.onLabelClick = () => {
      this.toggle();
    };
    this.checked = false;
    this.disabled = false;
    this.form = void 0;
    this.guid = void 0;
    this.hovered = false;
    this.indeterminate = false;
    this.label = void 0;
    this.name = void 0;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
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
    this.value = void 0;
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
      this.toggleEl?.focus();
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  syncHiddenFormInput(input) {
    input.type = "checkbox";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.guid = this.el.id || `calcite-checkbox-${guid()}`;
    connectLabel(this);
    connectForm(this);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
  }
  componentWillLoad() {
    setUpLoadableComponent(this);
  }
  componentDidLoad() {
    setComponentLoaded(this);
  }
  componentDidRender() {
    updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const rtl = getElementDir(this.el) === "rtl";
    return h(Host, {
      key: "146f32544b1a2d6d3c0292462edb979699e4b75a",
      onClick: this.clickHandler,
      onKeyDown: this.keyDownHandler
    }, h(InteractiveContainer, {
      key: "d5897a38a203d29967ec1f1e618a7b37d60d9b95",
      disabled: this.disabled
    }, h("div", {
      key: "17739f11d7e6368788941434ff8ef6f5d6291cd9",
      "aria-checked": toAriaBoolean(this.checked),
      "aria-label": getLabelText(this),
      class: {
        [CSS.toggle]: true,
        [CSS_UTILITY.rtl]: rtl
      },
      onBlur: this.onToggleBlur,
      onFocus: this.onToggleFocus,
      ref: (toggleEl) => this.toggleEl = toggleEl,
      role: "checkbox",
      tabIndex: this.disabled ? void 0 : 0
    }, h("svg", {
      key: "99df5e78e296d086a6782983a929bd149c3c4e39",
      "aria-hidden": "true",
      class: CSS.check,
      viewBox: "0 0 16 16"
    }, h("path", {
      key: "57458a12cf5feeada4c57dfc51c5b62f1e73d49b",
      d: this.getPath()
    })), h("slot", {
      key: "ad29699957eb1d3f041549d7057b4842d3396b3c"
    })), h(HiddenFormInputSlot, {
      key: "1b2a325739b08d7f21d4abee49fe27f632f78183",
      component: this
    })));
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteCheckboxStyle0;
  }
}, [1, "calcite-checkbox", {
  "checked": [1540],
  "disabled": [516],
  "form": [513],
  "guid": [1537],
  "hovered": [516],
  "indeterminate": [1540],
  "label": [1],
  "name": [513],
  "required": [516],
  "scale": [513],
  "status": [513],
  "validity": [1040],
  "value": [8],
  "setFocus": [64]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-checkbox"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-checkbox":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Checkbox);
        }
        break;
    }
  });
}
defineCustomElement();

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-checkbox.js
var CalciteCheckbox = Checkbox;
var defineCustomElement2 = defineCustomElement;
export {
  CalciteCheckbox,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/checkbox.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/calcite-checkbox.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-checkbox-73YMZEMH.js.map
