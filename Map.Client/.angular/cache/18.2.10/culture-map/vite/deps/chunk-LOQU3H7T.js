import {
  getSlotAssignedElements,
  slotChangeGetAssignedElements
} from "./chunk-RGUNAV4Z.js";
import {
  Fragment,
  H,
  h,
  proxyCustomElement
} from "./chunk-2P72IR2Y.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@esri/calcite-components/dist/components/tabs.js
var SLOTS = {
  titleGroup: "title-group"
};
var tabsCss = ":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1);background-color:var(--calcite-color-foreground-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1)}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-color-border-1), inset 0 -1px 0 var(--calcite-color-border-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-color-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-color-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}";
var CalciteTabsStyle0 = tabsCss;
var Tabs = proxyCustomElement(class Tabs2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.defaultSlotChangeHandler = (event) => {
      this.tabs = slotChangeGetAssignedElements(event, "calcite-tab");
    };
    this.setDefaultSlotRef = (el) => this.slotEl = el;
    this.layout = "inline";
    this.position = "top";
    this.scale = "m";
    this.bordered = false;
    this.titles = [];
    this.tabs = [];
  }
  handleInheritableProps() {
    this.updateItems();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteInternalTabNavSlotChangeHandler(event) {
    event.stopPropagation();
    if (event.detail.length !== this.titles.length) {
      this.titles = event.detail;
    }
  }
  titlesWatcher() {
    this.updateAriaSettings();
    this.updateItems();
  }
  tabsWatcher() {
    this.updateAriaSettings();
    this.updateItems();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   *
   * Matches up elements from the internal `tabs` and `titles` to automatically
   * update the ARIA attributes and link `<calcite-tab>` and
   * `<calcite-tab-title>` components.
   */
  updateAriaSettings() {
    return __async(this, null, function* () {
      let tabIds;
      let titleIds;
      const tabs = getSlotAssignedElements(this.slotEl, "calcite-tab");
      if (tabs.some((el) => el.tab) || this.titles.some((el) => el.tab)) {
        tabIds = tabs.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
        titleIds = this.titles.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
      } else {
        const tabDomIndexes = yield Promise.all(tabs.map((el) => el.getTabIndex()));
        const titleDomIndexes = yield Promise.all(this.titles.map((el) => el.getTabIndex()));
        tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
          ids[indexInDOM] = tabs[registryIndex].id;
          return ids;
        }, []);
        titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
          ids[indexInDOM] = this.titles[registryIndex].id;
          return ids;
        }, []);
      }
      tabs.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
      this.titles.forEach((el) => el.updateAriaInfo(tabIds, titleIds));
    });
  }
  updateItems() {
    const {
      position,
      scale
    } = this;
    const nav = this.el.querySelector("calcite-tab-nav");
    if (nav) {
      nav.position = position;
      nav.scale = scale;
    }
    Array.from(this.el.querySelectorAll("calcite-tab")).forEach((tab) => {
      if (tab.parentElement === this.el) {
        tab.scale = scale;
      }
    });
    Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach((title) => {
      title.position = position;
      title.scale = scale;
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.updateItems();
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      this.updateItems();
    });
  }
  disconnectedCallback() {
  }
  render() {
    return h(Fragment, {
      key: "d06e888984e54b6b91b3345b42c217d322b46a64"
    }, h("slot", {
      key: "d42da82a176cc1ad492cf1c548b96fc0ca53bc73",
      name: SLOTS.titleGroup
    }), h("section", {
      key: "21e944ce899b9bb2507fc9d9be81d8faa4a1a610"
    }, h("slot", {
      key: "25d4cd299d8529392f6b01deefd3356f8cd6050b",
      onSlotchange: this.defaultSlotChangeHandler,
      ref: this.setDefaultSlotRef
    })));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "position": ["handleInheritableProps"],
      "scale": ["handleInheritableProps"],
      "titles": ["titlesWatcher"],
      "tabs": ["tabsWatcher"]
    };
  }
  static get style() {
    return CalciteTabsStyle0;
  }
}, [1, "calcite-tabs", {
  "layout": [513],
  "position": [513],
  "scale": [513],
  "bordered": [4],
  "titles": [32],
  "tabs": [32]
}, [[0, "calciteInternalTabNavSlotChange", "calciteInternalTabNavSlotChangeHandler"]], {
  "position": ["handleInheritableProps"],
  "scale": ["handleInheritableProps"],
  "titles": ["titlesWatcher"],
  "tabs": ["tabsWatcher"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-tabs"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "calcite-tabs":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Tabs);
        }
        break;
    }
  });
}
defineCustomElement();

export {
  Tabs,
  defineCustomElement
};
/*! Bundled license information:

@esri/calcite-components/dist/components/tabs.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-LOQU3H7T.js.map
