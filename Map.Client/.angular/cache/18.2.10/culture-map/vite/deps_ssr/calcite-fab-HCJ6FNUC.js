import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  defineCustomElement as defineCustomElement3
} from "./chunk-CNAVB3BR.js";
import "./chunk-BJU43354.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-H4DSEZHF.js";
import "./chunk-YJ576OO7.js";
import {
  defineCustomElement as defineCustomElement2
} from "./chunk-5S5OSPDN.js";
import "./chunk-JQGPN2VA.js";
import {
  componentFocusable,
  setComponentLoaded,
  setUpLoadableComponent
} from "./chunk-3LOI6Q5C.js";
import "./chunk-G3GRZSKY.js";
import "./chunk-HCYVIRBF.js";
import {
  defineCustomElement
} from "./chunk-JTD7ODRH.js";
import "./chunk-OOEWT25O.js";
import "./chunk-7JIACICA.js";
import "./chunk-SJNQ3G2B.js";
import {
  focusElement
} from "./chunk-AHYZNZSK.js";
import "./chunk-IE4UBD3F.js";
import {
  H,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-fab.js
var CSS = {
  button: "button"
};
var ICONS = {
  plus: "plus"
};
var fabCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}calcite-button{--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:hover{--tw-shadow:var(--calcite-shadow-md);--tw-shadow-colored:var(--calcite-shadow-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}calcite-button:active{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteFabStyle0 = fabCss;
var Fab = proxyCustomElement(class Fab2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.appearance = "solid";
    this.kind = "brand";
    this.disabled = false;
    this.icon = ICONS.plus;
    this.iconFlipRtl = false;
    this.label = void 0;
    this.loading = false;
    this.scale = "m";
    this.text = void 0;
    this.textEnabled = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
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
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  setFocus() {
    return __async(this, null, function* () {
      yield componentFocusable(this);
      focusElement(this.buttonEl);
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const {
      appearance,
      kind,
      disabled,
      loading,
      scale,
      textEnabled,
      icon,
      label,
      text,
      iconFlipRtl
    } = this;
    const title = !textEnabled ? label || text || null : null;
    return h(InteractiveContainer, {
      key: "7953bd06defeddfed5530500901609524f7b58fd",
      disabled
    }, h("calcite-button", {
      key: "c2bbe2be5e2ac375abab75024005f1eb5afed51c",
      appearance: appearance === "solid" ? "solid" : "outline-fill",
      class: CSS.button,
      disabled,
      iconFlipRtl: iconFlipRtl ? "start" : null,
      iconStart: icon,
      kind,
      label,
      loading,
      ref: (buttonEl) => {
        this.buttonEl = buttonEl;
      },
      round: true,
      scale,
      title,
      type: "button",
      width: "auto"
    }, this.textEnabled ? this.text : null));
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteFabStyle0;
  }
}, [1, "calcite-fab", {
  "appearance": [513],
  "kind": [513],
  "disabled": [516],
  "icon": [513],
  "iconFlipRtl": [516, "icon-flip-rtl"],
  "label": [1],
  "loading": [516],
  "scale": [513],
  "text": [1],
  "textEnabled": [516, "text-enabled"],
  "setFocus": [64]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-fab", "calcite-button", "calcite-icon", "calcite-loader"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-fab":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Fab);
        }
        break;
      case "calcite-button":
        if (!customElements.get(tagName)) {
          defineCustomElement3();
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
      case "calcite-loader":
        if (!customElements.get(tagName)) {
          defineCustomElement2();
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteFab = Fab;
var defineCustomElement4 = defineCustomElement$1;
export {
  CalciteFab,
  defineCustomElement4 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-fab.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-fab-HCJ6FNUC.js.map