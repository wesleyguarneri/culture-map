import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  defineCustomElement
} from "./chunk-JTD7ODRH.js";
import {
  setRequestedIcon
} from "./chunk-AHYZNZSK.js";
import {
  H,
  Host,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";

// ../../../node_modules/@esri/calcite-components/dist/components/input-message.js
var StatusIconDefaults = {
  valid: "check-circle",
  invalid: "exclamation-mark-triangle",
  idle: "information"
};
var inputMessageCss = ":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteInputMessageStyle0 = inputMessageCss;
var InputMessage = proxyCustomElement(class InputMessage2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.icon = void 0;
    this.iconFlipRtl = false;
    this.scale = "m";
    this.status = "idle";
  }
  handleIconEl() {
    this.requestedIcon = setRequestedIcon(StatusIconDefaults, this.icon, this.status);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.requestedIcon = setRequestedIcon(StatusIconDefaults, this.icon, this.status);
  }
  render() {
    const hidden = this.el.hidden;
    return h(Host, {
      key: "c7d1b37721cec28dee1020b81ff66dee7fc8bc44",
      "calcite-hydrated-hidden": hidden
    }, this.renderIcon(this.requestedIcon), h("slot", {
      key: "7147d81e906765c154b4a61e31706a72c1ef3ae0"
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  renderIcon(iconName) {
    if (iconName) {
      return h("calcite-icon", {
        class: "calcite-input-message-icon",
        flipRtl: this.iconFlipRtl,
        icon: iconName,
        scale: "s"
      });
    }
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "status": ["handleIconEl"],
      "icon": ["handleIconEl"]
    };
  }
  static get style() {
    return CalciteInputMessageStyle0;
  }
}, [1, "calcite-input-message", {
  "icon": [520],
  "iconFlipRtl": [516, "icon-flip-rtl"],
  "scale": [513],
  "status": [513]
}, void 0, {
  "status": ["handleIconEl"],
  "icon": ["handleIconEl"]
}]);
function defineCustomElement2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-input-message", "calcite-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-input-message":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, InputMessage);
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
    }
  });
}
defineCustomElement2();

export {
  InputMessage,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/input-message.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-WIAYKTPO.js.map
