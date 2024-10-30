import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MAX_COLUMNS
} from "./chunk-5QBMTVSS.js";
import {
  InteractiveContainer,
  updateHostInteraction
} from "./chunk-H4DSEZHF.js";
import {
  H,
  Host,
  createEvent,
  h,
  proxyCustomElement
} from "./chunk-IAO6HACY.js";
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@esri/calcite-components/dist/components/calcite-list-item-group.js
var CSS = {
  container: "container",
  heading: "heading"
};
var listItemGroupCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteListItemGroupStyle0 = listItemGroupCss;
var ListItemGroup = proxyCustomElement(class ListItemGroup2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteInternalListItemGroupDefaultSlotChange = createEvent(this, "calciteInternalListItemGroupDefaultSlotChange", 6);
    this.handleDefaultSlotChange = () => {
      this.calciteInternalListItemGroupDefaultSlotChange.emit();
    };
    this.disabled = false;
    this.filterHidden = false;
    this.heading = void 0;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentDidRender() {
    updateHostInteraction(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const {
      disabled,
      heading
    } = this;
    return h(Host, {
      key: "e1e0304c3d4fe02909fd0075de2e4f5ef806be39"
    }, h(InteractiveContainer, {
      key: "5fb0861fb58de90808e98b7061d3c906c822203c",
      disabled
    }, h("tr", {
      key: "c77af78f937c3135601df2c4574b858662d5fcdb",
      class: CSS.container
    }, h("td", {
      key: "f1ae6b9e09e78f87b814287f8eaeb0a105575c7a",
      class: CSS.heading,
      colSpan: MAX_COLUMNS
    }, heading)), h("slot", {
      key: "7346d5d774173403910eddd35bf700ccd1437c4f",
      onSlotchange: this.handleDefaultSlotChange
    })));
  }
  get el() {
    return this;
  }
  static get style() {
    return CalciteListItemGroupStyle0;
  }
}, [1, "calcite-list-item-group", {
  "disabled": [516],
  "filterHidden": [516, "filter-hidden"],
  "heading": [513]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-list-item-group"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-list-item-group":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ListItemGroup);
        }
        break;
    }
  });
}
defineCustomElement$1();
var CalciteListItemGroup = ListItemGroup;
var defineCustomElement = defineCustomElement$1;
export {
  CalciteListItemGroup,
  defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-list-item-group.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=calcite-list-item-group-6BWZOKKY.js.map
