import {
  associateExplicitLabelToUnlabeledComponent,
  labelConnectedEvent,
  labelDisconnectedEvent
} from "./chunk-PBDQTCSC.js";
import "./chunk-D25A7Z5T.js";
import "./chunk-RGUNAV4Z.js";
import "./chunk-RCBGISRX.js";
import {
  H,
  Host,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/label2.js
var CSS = {
  container: "container"
};
var labelCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteLabelStyle0 = labelCss;
var Label = proxyCustomElement(class Label2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalLabelClick = createEvent(this, "calciteInternalLabelClick", 2);
    this.labelClickHandler = (event) => {
      if (window.getSelection()?.type === "Range") {
        return;
      }
      this.calciteInternalLabelClick.emit({
        sourceEvent: event
      });
    };
    this.alignment = "start";
    this.for = void 0;
    this.scale = "m";
    this.layout = "default";
  }
  handleForChange() {
    associateExplicitLabelToUnlabeledComponent(this.el);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    document.dispatchEvent(new CustomEvent(labelConnectedEvent));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent(labelDisconnectedEvent));
  }
  render() {
    return h(Host, {
      key: "c3eff09792519c9e5a76ee28e3754db83b536f99",
      onClick: this.labelClickHandler
    }, h("div", {
      key: "387902edd9b59be290f95ad6c2721584037d7256",
      class: CSS.container
    }, h("slot", {
      key: "b54d782522e95323333040e40e1a6dd06b52a575"
    })));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "for": ["handleForChange"]
    };
  }
  static get style() {
    return CalciteLabelStyle0;
  }
}, [1, "calcite-label", {
  "alignment": [513],
  "for": [513],
  "scale": [513],
  "layout": [513]
}, void 0, {
  "for": ["handleForChange"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-label"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-label":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Label);
        }
        break;
    }
  });
}
defineCustomElement();

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-label.js
var CalciteLabel = Label;
var defineCustomElement2 = defineCustomElement;
export {
  CalciteLabel,
  defineCustomElement2 as defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/label2.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)

@esri/calcite-components/dist/components/calcite-label.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-label-NSQ5QQOX.js.map
