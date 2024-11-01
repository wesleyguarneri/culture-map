import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  getAncestors,
  getDepth
} from "./chunk-BZXFK7JL.js";
import {
  guid
} from "./chunk-AHYZNZSK.js";
import {
  H,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";

// ../../../node_modules/@esri/calcite-components/dist/components/combobox-item-group.js
var CSS = {
  list: "list",
  label: "label",
  title: "title"
};
var comboboxItemGroupCss = ".scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-color-text-3)}.title{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-color-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}::slotted(calcite-combobox-item-group:not([after-empty-group])){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteComboboxItemGroupStyle0 = comboboxItemGroupCss;
var ComboboxItemGroup = proxyCustomElement(class ComboboxItemGroup2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.guid = guid();
    this.afterEmptyGroup = false;
    this.ancestors = void 0;
    this.label = void 0;
    this.scale = "m";
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = getAncestors(this.el);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const {
      el,
      scale
    } = this;
    const depth = getDepth(el);
    return h("ul", {
      key: "32cc4bb7e8e551213c7b3aea1ee6c9907a93dc8b",
      "aria-labelledby": this.guid,
      class: {
        [CSS.list]: true,
        [`scale--${scale}`]: true
      },
      role: "group"
    }, h("li", {
      key: "7bad1e784bd918befdeccba34625d9404f610a91",
      class: {
        [CSS.label]: true
      },
      id: this.guid,
      role: "presentation",
      style: {
        "--calcite-combobox-item-spacing-indent-multiplier": `${depth}`
      }
    }, h("span", {
      key: "9cfc56d414a465bb5d5e5beec561f5149779b31c",
      class: CSS.title
    }, this.label)), h("slot", {
      key: "ec83330096f7031828f4b58cf2ee94611a9fddfe"
    }));
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteComboboxItemGroupStyle0;
  }
}, [1, "calcite-combobox-item-group", {
  "afterEmptyGroup": [516, "after-empty-group"],
  "ancestors": [1040],
  "label": [1],
  "scale": [1]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-combobox-item-group"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-combobox-item-group":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ComboboxItemGroup);
        }
        break;
    }
  });
}
defineCustomElement();

export {
  ComboboxItemGroup,
  defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/combobox-item-group.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-Y37RDRZA.js.map
